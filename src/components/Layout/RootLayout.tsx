"use client";
import { Layout } from "antd";
const { Content } = Layout;
import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
type PropsType = {
  children: ReactNode;
};

const RootLayout = ({ children }: PropsType) => {
  return (
    <Layout>
      <AppHeader />
      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>
      <AppFooter />
    </Layout>
  );
};
export default RootLayout;
