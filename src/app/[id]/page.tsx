import RootLayout from "@/components/Layout/RootLayout";
import TaskDetails from "@/components/UI/TaskDetails";

interface IProps {
    params: any;
  }

const Task = ({ params }: IProps) => {
    const {id} = params
  return (
    <RootLayout>
        <TaskDetails id={id}/>
    </RootLayout>
  )
}
export default Task;