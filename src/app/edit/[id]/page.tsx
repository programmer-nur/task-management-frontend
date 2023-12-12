interface IProps {
    params: any;
  }

const TaskById = ({ params }: IProps) => {
    const {id} = params
  return (
    <div>TaskById {id}</div>
  )
}
export default TaskById