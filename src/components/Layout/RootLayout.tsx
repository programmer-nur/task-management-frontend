'use client';

import { Layout } from 'antd';
import { ReactNode } from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const { Content } = Layout;

type PropsType = {
  children: ReactNode;
};

function RootLayou({ children }: PropsType) {
  return (
    <Layout>
      <AppHeader />
      <Content
        style={{
          padding: '0 24px',
          minHeight: '100vh',
        }}
      >
        {children}
      </Content>
      <AppFooter />
    </Layout>
  );
}
export default RootLayou;
