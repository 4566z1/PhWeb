import React from 'react';
import { Layout, Typography, Input, Form, Checkbox, Space, Steps, Button, Select } from 'antd';
import MyParticles from '../component/MyParticles';

const { Title } = Typography;
const { Content, Footer } = Layout;

const Recommand_page = () => {
  return (
    <div>
      <MyParticles></MyParticles>
      <Content style={{
        textAlign: 'center',
      }}>
        <Typography>
          <Title>填写企业信息</Title>
        </Typography>
        <br></br>
        <Steps
          size='small'
          current={0}
          percent={33}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '60vw'
          }}
          items={[
            {
              title: '填写企业信息',
            },
            {
              title: '云服务数据分析',
            },
            {
              title: '完成',
            },
          ]}
        />
        <br></br>
        <br></br>
        <br></br>
        <Space
          bordered
          align="center"
          direction="vertical"
          style={{
            borderRadius: "10px",
            boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            width: "60vw",
            height: '30vw'
            // backgroundColor
            // backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"
          }}>
          <br></br>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="贷款金额"
              name="1"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input addonAfter="万"/>
            </Form.Item>
            <Form.Item
              label="年收入额"
              name="2"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input addonAfter="万"/>
            </Form.Item>
            <Form.Item
              label="首次贷款"
              name="3"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Checkbox>是</Checkbox>
              <Checkbox>否</Checkbox>
            </Form.Item>
            <Form.Item
              label="职位"
              name="none"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="还款年底"
              name="4"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                defaultValue="3年"
                style={{ width: 120 }}
                options={[
                  { value: '3年', label: '3年' },
                ]}
              />
            </Form.Item>
            <br></br>
            <Button
              type="primary"
              size='large'
              style={{
                marginLeft: 'auto',
                marginRight: 'auto'
              }}>
              提交企业信息
            </Button>
          </Form>


        </Space>

      </Content>

      <Footer
        style={{
          textAlign: 'center',
          marginTop: '5%',
          background: 'rgb(0,0,0,0)'
        }}
      >
        PHWeb ©2023 Created by PH Teams
      </Footer>
    </div>
  );
};

export default Recommand_page;