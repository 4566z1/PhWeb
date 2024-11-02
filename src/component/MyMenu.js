import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { ConfigProvider, Menu, Space, Image, Row, Col, Input, Typography } from 'antd';
import logo from '../logo.png'

const { Title } = Typography;

const items = [
  {
    label: '首页',
    key: 'home',
  },
  {
    label: '金融产品',
    key: 'product',
  },
  {
    label: '新闻',
    key: 'news',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        关于
      </a>
    ),
    key: 'about',
  },
];

const TopMenu = () => {
  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            fontSize: 20,
            horizontalLineHeight: 4
          },
        }
      }}
    >
      <div style={{
        backgroundColor: "#FFFFFF",
        boxShadow: '0 5px 5px -5px gray'
      }}>
        <Row justify="center" align="middle">
          <Col span={8}>
            <Space>
              <div style={{ width: 15 }} />
              <Image src={logo} height={80} width={80}></Image>
              <div style={{ width: 2 }} />
              <Title style={{
                marginTop: 10
              }} level={2} ellipsis={true}>Pu Hui</Title>
              <div style={{ width: 100 }} />
              <Input size='large' prefix={<SearchOutlined />} bordered={false} placeholder="输入关键字搜索..." />
            </Space>
          </Col>
          <Col span={8}>
            <Space>
              <div style={{ width: 600}} />
              <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </Space>
          </Col>
          <Col span={8} />
        </Row>
      </div>
    </ConfigProvider>
  );
};
export default TopMenu;