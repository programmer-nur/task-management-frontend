'use client'
import { Button } from "antd";
import Form from "../Form/Form";
import InputFiled from "../Form/InputFiled"
import InputTextArea from "../Form/InputTextArea";

const TaskEdit = () => {
    const onSubmit =(value:any)=>{
        console.log(value)
    }
  return (
   <div className="flex flex-col justify-center mt-8 items-center">
    <h2 className="py-3">Update Task</h2>
     <div className="max-w-md border bg-slate-200 p-8 rounded-md">
        <Form  submitHandler={onSubmit}>
          <div className="mb-4">
            <InputFiled name="title" label="Title" />
            <InputTextArea rows={4} name="description" label="Description" />
          </div>

          <div className="text-end">
            <Button type="primary" htmlType="submit">
              Create Task
            </Button>
          </div>
        </Form>
    </div>
   </div>
  )
}
export default TaskEdit