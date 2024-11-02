import React from 'react';
import { Layout, Typography, Table, Space, Image } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import MyParticles from '../component/MyParticles';

const { Title } = Typography;
const { Content, Footer } = Layout;


// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (_, index) => {
  return {};
};

const Custom_page = () => {
  const columns = [
    {
      title: '',
      dataIndex: 'key',
      rowScope: 'row',
    },
    {
      title:
        <Space>
          <Image
            width={200}
            height={40}
            src='http://image4.ccb.com/cn/home/company/v3/images/img/20150828_1440745919/20151201084052927594.png' />
          <DownOutlined/>
        </Space>,
      dataIndex: 'name',
      onCell: sharedOnCell,
    },
    {
      title:
        <Space>
          <Image
            width={200}
            height={40}
            src='https://ts1.cn.mm.bing.net/th/id/R-C.ff4ee877efc117860e73f34553323d05?rik=%2fCwazaP5BTx85Q&riu=http%3a%2f%2fcontent.icbc.com.cn%2fimage%2flogo.png&ehk=M9ENXXDPAcm1%2fhDdRVV8PEVya4ZOqus1ioJmaaYAZtQ%3d&risl=&pid=ImgRaw&r=0' />
          <DownOutlined />
        </Space>,
      dataIndex: 'age',
      onCell: sharedOnCell,
    },
    {
      title:
        <Space>
          <Image
            width={200}
            height={40}
            src='https://www.abchina.com/cn/images/logo_ue2.png' />
          <DownOutlined />
        </Space>,
      dataIndex: 'tel',
      onCell: sharedOnCell,
    },
    {
      title: <Space>
        <Image
          width={200}
          height={40}
          src='https://tse2-mm.cn.bing.net/th/id/OIP-C.rdsAnVNdtcx-KHY1D_Ph_QHaCK?w=337&h=102&c=7&r=0&o=5&dpr=1.7&pid=1.7' />
        <DownOutlined />
      </Space>,
      dataIndex: 'phone',
      onCell: sharedOnCell,
    },
    {
      title: <Space>添加更多金融产品<DownOutlined /></Space>,
      dataIndex: 'empty',
      onCell: sharedOnCell,
    },
  ];
  const data = [
    {
      key: '申请金额',
      name: '10万',
      age: '10万',
      tel: '10万',
      phone: '10万',
      empty: ''
    },
    {
      key: '月本金',
      name: '1667',
      age: '1667',
      tel: '1667',
      phone: '1667',
      empty: ''
    },
    {
      key: '月费率',
      name: '0.22%',
      age: '0.266%',
      tel: '0.25%',
      phone: '0.25%',
      empty: ''
    },
    {
      key: '月手续费',
      name: '220',
      age: '266',
      tel: '250',
      phone: '250',
      empty: ''
    },
    {
      key: '月还款金额',
      name: '1887',
      age: '1933',
      tel: '1917',
      phone: '1917',
      empty: ''
    },
    {
      key: '申请资料',
      name: <Space
        direction="vertical"
        align='start'
        size='middle'>
        <li type='disc'>身份证明</li>
        <li type='disc'>房产证明</li>
        <li type='disc'>社保/公积金</li>
        <li type='disc'>本科以上学历贷</li>
      </Space>,
      age: <Space
        direction="vertical"
        align='start'
        size='middle'>
        <li type='disc'>身份证明</li>
        <li type='disc'>房产证明</li>
        <li type='disc'>收入证明</li>
      </Space>,
      tel: <Space
        direction="vertical"
        align='start'
        size='middle'>
        <li type='disc'>身份证明</li>
        <li type='disc'>房产证明</li>
        <li type='disc'>近半年来收入流水证明</li>
      </Space>,
      phone: <Space
        direction="vertical"
        align='start'
        size='middle'>
        <li type='disc'>身份证明</li>
        <li type='disc'>房产证明</li>
        <li type='disc'>近半年来收入流水证明</li>
      </Space>,
      empty: ''
    },
    {
      key: '放款方式',
      name: <Space
        direction="vertical"
        align='start'
        size='middle'>
        <li type='disc'>放款到本行信用卡</li>
        <li type='disc'>毛胚房分2次放款</li>
        <li type='disc'>精装房一次性放款</li>
      </Space>,
      age: <Space
        direction="vertical"
        align='start'
        size='middle'>
        <li type='disc'>放款到本行信用卡</li>
        <li type='disc'>一次性放款</li>
      </Space>,
      tel: <Space
        direction="vertical"
        align='start'
        size='middle'>
        <li type='disc'>放款到本行信用卡</li>
        <li type='disc'>毛胚房分2次放款</li>
        <li type='disc'>精装房一次性放款</li>
      </Space>,
      phone: <Space
        direction="vertical"
        align='start'
        size='middle'>
        <li type='disc'>放款到本行信用卡</li>
        <li type='disc'>毛胚房分2次放款</li>
        <li type='disc'>精装房一次性放款</li>
      </Space>,
      empty: ''
    },
    {
      key: '用款方式',
      name: <Space
        direction="vertical"
        align='start'
        size='middle'>
        <li type='disc'>淘宝(部分家装商户)</li>
        <li type='disc'>51类家装建材商户</li>
      </Space>,
      age: <Space
        direction="vertical"
        align='start'
        size='middle'>
        <li type='disc'>家装建材商户</li>
      </Space>,
      tel: <Space
        direction="vertical"
        align='start'
        size='middle'>
        <li type='disc'>京东(部分家装商户)</li>
        <li type='disc'>41类家装建材商户</li>
      </Space>,
      phone: <Space
        direction="vertical"
        align='start'
        size='middle'>
        <li type='disc'>40类家装建材商户</li>
      </Space>,
      empty: ''
    },
    {
      key: '提前还款',
      name: '400客服电话申请',
      age: '网点现场沟通申请',
      tel: '网点现场沟通申请',
      phone: '网点现场沟通申请',
      empty: ''
    },
    {
      key: '违约金',
      name: '无',
      age: '剩余本金3%',
      tel: '无',
      phone: '无',
      empty: ''
    },
  ];

  return (
    <div>
      <MyParticles></MyParticles>
      <Content style={{
        textAlign: 'center',
      }}>
        <Typography>
          <Title>自定义金融产品对比</Title>
        </Typography>
        <br></br>
        <br></br>
        <Table
          style={{
            boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            marginLeft: 'auto',
            marginRight: 'auto',
            borderRadius: '10px',
            width: '80vw',

            background: 'rgb(0,0,0,0)'
          }}
          columns={columns}
          dataSource={data}
          bordered />;
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

export default Custom_page;