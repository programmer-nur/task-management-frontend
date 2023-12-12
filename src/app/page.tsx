import RootLayout from '@/components/Layout/RootLayout';
import TaskLists from '@/components/UI/TaskLists';

function Home() {
  return (
    <div>
      <RootLayout>
        <TaskLists />
      </RootLayout>
    </div>
  );
}
export default Home;
