'use client'
import { Layout, Menu } from "antd";
const { Header } = Layout;
import Link from "next/link";

const AppHeader = () => {
  return (
    <Header
    className="flex justify-between items-center"
  >
    <div className="brand-logo">
      <h1>
        <Link
          href="/"
          className="text-white text-2xl bg-[#404040] py-2 px-3 rounded-md"
        >
         TASK_MANAGEMENT
        </Link>
      </h1>
    </div>
    <Menu theme="dark" mode="vertical">
      <Menu.Item>
          Create Task   
      </Menu.Item>
    </Menu>
  </Header>
  )
}
export default AppHeader