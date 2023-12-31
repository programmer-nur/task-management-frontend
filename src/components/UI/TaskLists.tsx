'use client';

import { Button, Input, Modal, Select, Spin, message } from 'antd';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import TaskCard from './TaskCard';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { filterData, searched } from '@/redux/slices/filterSlice';
import {
  useCreateTaskMutation,
  useGetAllTasksQuery,
} from '@/redux/api/taskApi';
import Form from '../Form/Form';
import InputFiled from '../Form/InputFiled';
import InputTextArea from '../Form/InputTextArea';
import { ITask } from '@/types/common';
import InputSelectFiled from '../Form/InputSelectFiled';
import { categories } from '@/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { taskSchema } from '@/schema/taskSchema';
const { Search } = Input;

const TaskLists = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { searchTerm, status } = useAppSelector((state) => state.filter);

  //   create and get task
  const [createTask] = useCreateTaskMutation();
  const { data, isError, isLoading, error } = useGetAllTasksQuery(undefined);

  const tasks = data as ITask[];

  //   checked task complete or incomplete
  const filterTasks = tasks?.filter((task: ITask) => {
    if (status === null) {
      return task;
    } else {
      return task.completed === status;
    }
  });

  //   Task search implementation
  const filteredData = filterTasks?.filter((task) => {
    const lowercaseSearchText = searchTerm.toLowerCase();
    return (
      task?.title?.toLowerCase().includes(lowercaseSearchText) ||
      task?.description?.toLowerCase().includes(lowercaseSearchText)
    );
  });

  // decide what to render
  let content = null;
  if (isLoading)
    content = (
      <div className="flex justify-center items-center">
        <Spin size="large" />
      </div>
    );

  if (!isLoading && isError)
    content = <div className="col-span-12">{error as string}</div>;

  if (!isError && !isLoading && filteredData?.length === 0) {
    content = (
      <div className="col-span-12 font-semibold text-xl">No Task found!</div>
    );
  }

  if (!isError && !isLoading && filteredData?.length > 0) {
    content = filteredData.map((task: ITask) => (
      <TaskCard key={task.id} task={task} />
    ));
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onSubmit = async (data: { title: string; description: string }) => {
    message.loading('Creating.....');
    try {
      const taskData = {
        title: data.title,
        description: data.description,
        completed: false,
      };
      const res = await createTask(taskData).unwrap();
      if (res?.id) {
        message.success('Task Create successfully');
        setIsModalOpen(false);
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div className="mx-8 sm:mx-24">
      <div className="my-10 flex flex-wrap justify-center items-center gap-3">
        <Search
          placeholder="Search By Name"
          allowClear
          enterButton="Search"
          size="middle"
          onSearch={(value) => dispatch(searched(value))}
          style={{ width: 300, marginRight: 16 }}
        />

        <Select
          placeholder="Filter Task"
          onChange={(value) => dispatch(filterData(value))}
          size="middle"
          style={{ width: 150, marginRight: 16 }}
          options={[
            { value: null, label: 'All' },
            { value: true, label: 'Complete' },
            { value: false, label: 'InComplete' },
          ]}
        ></Select>
        <Button size="middle" onClick={showModal} type="primary">
          <PlusOutlined /> Create Task
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content}
      </div>
      <Modal
        title="Create Task"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={null}
      >
        <Form submitHandler={onSubmit} resolver={yupResolver(taskSchema)}>
          <div className="mb-4">
            <div className="my-2">
              <InputFiled name="title" label="Title" />
            </div>
            <div className="my-2">
              <InputTextArea rows={4} name="description" label="Description" />
            </div>
          </div>

          <div className="text-end">
            <Button type="primary" htmlType="submit">
              Create Task
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};
export default TaskLists;
