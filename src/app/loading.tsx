"use client";

import { Row, Space, Spin } from "antd";
const LoadingPage = () => {
  return (
    <Row style={{ height: "100vh" }} justify="center" align="middle">
      <Space size="large">
        <Spin size="large" />
      </Space>
    </Row>
  );
};

export default LoadingPage;