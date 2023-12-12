import { ITask } from '@/types/common';
import { Button, Card, Modal, message } from 'antd';
import { useState } from 'react';
import Form from '../Form/Form';
import InputFiled from '../Form/InputFiled';
import InputTextArea from '../Form/InputTextArea';
import { useUpdateTaskMutation } from '@/redux/api/taskApi';
import Link from 'next/link';

const TaskCard = ({ task }: { task: ITask }) => {
  const { title, description, completed, id } = task;
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [updateTask] =useUpdateTaskMutation()

  const onSubmit =async (data: {title:string,description:string}) => {
    message.loading("Creating.....");
    try {
        const taskData = {
            title:data.title,
            description:data.description,
            completed:false
        }
      const res = await updateTask(taskData).unwrap();
      if (res?.id) {
        message.success("Task Create successfully");
        setIsModalOpen(false);
      }
    } catch (err: any) {
      message.error(err.message);
    }
    
  };
  return (
    <>

    <Card hoverable  actions={[
        <Link href={`/${String(id)}`}>Details</Link>,
        <Link href={`/edit/${String(id)}`}>Edit</Link>,
        <p>Delete</p>,
      ]}>
      <article className="rounded-xl border-2 border-gray-100 bg-white">
      <div className="flex justify-end">
          <strong
            className={`mb-[2px] me-[2px] inline-flex items-center gap-1 rounded-es-xl rounded-se-xl ${
              completed ? 'bg-blue-500' : 'bg-red-500'
            } px-3 py-1.5 text-white`}
          >
            <span className="text-[10px] font-medium sm:text-xs">
              {completed ? 'Complete' : 'Incomplete'}
            </span>
          </strong>
        </div>
        <div className="flex items-start gap-4">
          <div>
            <h3 className="font-medium line-clamp-1 sm:text-lg">{title}</h3>

            <p className="line-clamp-2 text-sm text-gray-700">{description}</p>
          </div>
        </div>
        
      </article>
    </Card>
    <Modal
        title="Update Task"
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        footer={null}
      >
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <InputFiled name="title" label="Title" />
            <InputTextArea rows={4} name="description" label="Description" />
          </div>

          <div className="text-end">
            <Button type="primary" htmlType="submit">
              Update Task
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default TaskCard;
