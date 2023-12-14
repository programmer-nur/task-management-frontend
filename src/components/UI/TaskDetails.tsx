'use client';
import { useGetTaskByIdQuery } from '@/redux/api/taskApi';
import { Spin } from 'antd';

const TaskDetails = ({ id }: { id: string }) => {
  const { data: task, isLoading } = useGetTaskByIdQuery(id);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spin size="large" />
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="rounded-xl  max-w-3xl bg-white mt-8 p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
            <div className="flex items-start sm:gap-8">
              <div>
                <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                  {task.completed ? 'Completed' : 'Incomplete'}
                </strong>

                <h3 className="mt-4 text-lg font-medium sm:text-xl">
                  {task.title}
                </h3>

                <p className="mt-1 text-sm text-gray-700">{task.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default TaskDetails;
