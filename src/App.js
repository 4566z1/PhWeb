import React from 'react';
import { Layout, Typography, Space, Card } from 'antd';
import MyMenu from './component/MyMenu'
import MyParticles from './component/MyParticles';

const { Title, Paragraph } = Typography;
const { Content, Footer } = Layout;
const { Meta } = Card;

const App = () => {
  return (
    <div>
      <MyParticles></MyParticles>
      <MyMenu />
      <Content style={{
        textAlign: 'center',
      }}>
        <Typography>
          <Title>普惠金融系统</Title>
          <Paragraph strong={true}>
            帮 助 小 微 企 业 更 加 快 速 全 面 地 了 解 贷 款 产 品
          </Paragraph>
        </Typography>
        <Space direction='horizontal' size={100} style={{
          position: "relative",
          top: "50px"
        }}>
          <Card
            hoverable
            style={{ width: 360, height: 480 }}
            cover={<img alt="example" src="https://iconfont.alicdn.com/p/illus_3d/file/2OEYpu98KSmI/a07d51f8-88a5-449b-b012-1ab7f77dde5c.png" />}
          >
            <Meta title="智能化普惠金融产品推荐" description="结合大数据科学和人工智能，为用户提供最精准最全面的产品推荐" />
          </Card>
          <Card
            hoverable
            style={{ width: 360, height: 480 }}
            cover={<img alt="example" src="https://iconfont.alicdn.com/p/illus_3d/file/2OEYpu98KSmI/f4c2b3c5-4393-4482-ad3c-2273879d417d.png" />}
          >
            <Meta title="自定义普惠金融产品分析" description="汇聚海量金融产品，让用户体验到最新最全的产品对比" />
          </Card>
          <Card
            hoverable
            style={{ width: 360, height: 480 }}
            cover={<img alt="example" src="https://iconfont.alicdn.com/p/illus_3d/file/2OEYpu98KSmI/d6073ba9-c146-46e7-bddc-062779547316.png" />}
          >
            <Meta title="普惠金融热点新闻及政策" description="集成先进的推荐算法，为用户提供个性化的新闻服务" />
          </Card>
        </Space>

      </Content>
      <br></br>
      {/* <Timeline style={{
        marginLeft: '45%'
      }}
        items={[
          {
            children: '普惠金融宣讲会',
          },
          {
            children: '普惠金融志愿服务',
          },
          {
            children: '普惠金融交流会',
          },
          {
            dot: <SmileOutlined />,
            children: '普惠金融线上服务',
          },
        ]}
      /> */}
      {/* <Button size='large' type="primary" style={{
        display: 'block',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        快速开始
      </Button> */}
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

export default App;