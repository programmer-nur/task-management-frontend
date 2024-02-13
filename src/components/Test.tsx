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
import { taskSchema } from '@/schema/taskSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import {useFormContext} from "react-hook-form"

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import UploaderImage from './UI/UploaderImage';
import { useForm } from 'react-hook-form';
import ImageUpload from './UI/ImageUpload';
import ProfilePhotoUpload from './UI/ImageUpload';

const SignUpSchema = z.object({
  title: z.string({required_error: "Name is required",}),
  description: z.string({required_error: "Sdeasfasdf is required",}),
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
const task = {title:"Test", description:"Test description",completed: true,}
  const router = useRouter();
  const [updateTask] = useUpdateTaskMutation(undefined);
  const defaultValues = {
    title: task?.title || '',
    description: task?.description || '',
    completed: Boolean(task?.completed) || null,
  };
  const onSubmit = async (data:any) => {
    console.log(data.title, 'Title');
  console.log(data.description, 'Description');

  // If you are using the UploaderImage component, 'image' will be the name prop you passed to it
  console.log(data.image, 'Image');
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
    <ProfilePhotoUpload />
      <UploaderImage name="image" />
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
