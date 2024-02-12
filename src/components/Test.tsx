'use client';
import { Button, message } from 'antd';
import {
  useGetTaskByIdQuery,
  useUpdateTaskMutation,
} from '@/redux/api/taskApi';
import { useRouter } from 'next/navigation';
import Form from './Form/Form';
import InputFiled from './Form/InputFiled';
import InputTextArea from './Form/InputTextArea';
import InputSelectFiled from './Form/InputSelectFiled';
import { taskSchema } from '@/schema/taskSchema';
import { yupResolver } from '@hookform/resolvers/yup';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const SignUpSchema = z.object({
  title: z.string({required_error: "Name is required",}),
  description: z.string(),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;
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

const Test = ({ id }: { id: string }) => {
  const router = useRouter();
  const { data: task } = useGetTaskByIdQuery(id);
  const [updateTask] = useUpdateTaskMutation(undefined);
  const defaultValues = {
    title: task?.title || '',
    description: task?.description || '',
    completed: Boolean(task?.completed) || null,
  };

  const onSubmit = async (value: any) => {
    console.log(value);
  };
  return (
    <div className="flex flex-col justify-center my-8 items-center">
      <h2 className="py-3">Update Task</h2>
      <div className=" border bg-slate-200 p-5 rounded-md">
        <Form submitHandler={onSubmit} resolver={zodResolver(SignUpSchema)}>
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
      </div>
    </div>
  );
};
export default Test;
