'use client';
import { Layout } from 'antd';
import Link from 'next/link';
const { Header } = Layout;

function AppHeader() {
  return (
    <Header className="flex justify-center items-center">
      <div className="brand-logo">
        <h1>
          <Link
            href="/"
            className="text-white text-lg sm:text-xl bg-[#404040] py-1 px-3 rounded-md"
          >
            TASK_MANAGEMENT
          </Link>
        </h1>
      </div>
    </Header>
  );
}
export default AppHeader;
