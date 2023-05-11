"use client";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";
const { Header, Content, Footer, Sider } = Layout;


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function NavBar({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link href="/">Dashboard</Link>
          </Menu.Item>
          <Menu.SubMenu key="2" icon={<DesktopOutlined />} title="Payments">
            <Menu.Item key="3">
              <Link href="/monthly">Monthly Payments</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link href="/payments">Payments</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link href="/registrations">Registrations</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="6" icon={<FileOutlined />}>
            <Link href="/students">Students</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<FileOutlined />}>
            <Link href="/teachers">Teachers</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<FileOutlined />}>
            <Link href="/courses">Courses</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content className="mt-10">
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Bright Minds Tuition Services ©2023 Created by Devs with ❤️
        </Footer>
      </Layout>
    </Layout>
  );
}
