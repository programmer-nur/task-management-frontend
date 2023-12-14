'use client';
import { Button, message } from 'antd';
import Form from '../Form/Form';
import InputFiled from '../Form/InputFiled';
import InputTextArea from '../Form/InputTextArea';
import InputSelectFiled from '../Form/InputSelectFiled';
import {
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
} from '@/redux/api/taskApi';
import { useRouter } from 'next/navigation';

export const status = [
  {
    label: 'Completed',
    value: true,
  },
  {
    label: 'Incomplete',
    value: false || null,
  },
];

const TaskEdit = ({ id }: { id: string }) => {
  const router = useRouter();
  const { data: task } = useGetTaskByIdQuery(id);
  const [updateTask] = useUpdateTaskMutation(undefined);
  const defaultValues = {
    title: task?.title || '',
    description: task?.description || '',
    completed: Boolean(task?.completed) || null,
  };

  const onSubmit = async (value: any) => {
    message.loading('Update.....');
    try {
      const updateData = {
        id,
        body: value,
      };
      const res = await updateTask(updateData).unwrap();
      if (res?.id) {
        message.success('Task Update successfully');
        router.push('/');
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };
  return (
    <div className="flex flex-col justify-center my-8 items-center">
      <h2 className="py-3">Update Task</h2>
      <div className=" border bg-slate-200 p-5 rounded-md">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div className="mb-4">
            <div className="my-2">
              <InputFiled name="title" label="Title" />
            </div>
            <div className="my-2">
              <InputTextArea rows={4} name="description" label="Description" />
            </div>
            <div className="my-2">
              <InputSelectFiled
                name="completed"
                label="Completed"
                size="large"
                // @ts-ignore
                options={status}
              />
            </div>
          </div>
          <div className="text-end">
            <Button type="primary" htmlType="submit">
              Update Task
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default TaskEdit;
