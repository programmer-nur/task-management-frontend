import RootLayout from "@/components/Layout/RootLayout";

interface IProps {
    params: any;
  }

const TaskById = ({ params }: IProps) => {
    const {id} = params
  return (
    <RootLayout>
      TaskById {id}
      </RootLayout>
  )
}
export default TaskById