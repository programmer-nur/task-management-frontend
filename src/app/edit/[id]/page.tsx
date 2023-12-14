import RootLayout from "@/components/Layout/RootLayout";
import TaskEdit from "@/components/UI/TaskEdit";

interface IProps {
    params: any;
  }

const TaskById = ({ params }: IProps) => {
    const {id} = params
  return (
    <RootLayout>
      <TaskEdit id={String(id)}/>
    </RootLayout>
  )
}
export default TaskById