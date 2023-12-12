'use client';

import {
  FacebookFilled,
  LinkedinFilled,
  GithubFilled,
} from '@ant-design/icons';
import { Layout } from 'antd';
import Link from 'next/link';

const { Footer } = Layout;

function AppFooter() {
  return (
    <Footer
      className="text-center bg-slate-300"
    >
      <h2
        className="text-2xl"
      >
        TASK_MANAGEMENT
      </h2>
      <p className="flex justify-center items-center gap-4 py-4">
        <Link href="https://web.facebook.com">
          <FacebookFilled className="text-3xl" />
        </Link>
        <Link href="www.twitter.com">
          <GithubFilled className="text-3xl text-gray-500" />
        </Link>
        <Link href="https://www.linkedin.com/in/programmer-nur/">
          <LinkedinFilled className="text-3xl" />
        </Link>
      </p>
      Task Management ©2023 Created by Nur Mohammad
    </Footer>
  );
}
export default AppFooter;
