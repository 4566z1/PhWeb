import React from 'react';
import { Layout, Typography, Card, Image, Row, Col, Statistic, Space } from 'antd';
import MyParticles from '../component/MyParticles';

const { Title} = Typography;
const { Content, Footer } = Layout;

const Result_page = () => {
    return (
        <div>
            <MyParticles></MyParticles>
            <Content style={{
                textAlign: 'center',
            }}>
                <Typography>
                    <Title>根据云端大数据计算分析，您的企业适合选择</Title>
                </Typography>
                <Image
                    style={{
                        position: 'relative',
                        top: '-50px'
                    }}
                    width={300}
                    src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/32fa828ba61ea8d35cd64a91910a304e241f58aa.jpg"
                />
                <Row
                    style={{
                        position: 'relative',
                        top: '-80px'
                    }}
                    gutter={16}
                    justify="space-around"
                    align="middle"
                >
                    <Col span={4}>
                        <Card
                            style={{
                                boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                                background: 'rgb(0,0,0,0)',
                            }}
                            bordered={false}>
                            <Statistic
                                title="申请金额"
                                value={10}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                suffix="万"
                            />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            style={{
                                boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                                background: 'rgb(0,0,0,0)'
                            }}
                            bordered={false}>
                            <Statistic
                                title="月本金"
                                value={1667}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                            />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            style={{
                                boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                                background: 'rgb(0,0,0,0)'
                            }}
                            bordered={false}>
                            <Statistic
                                title="月费率"
                                value={0.25}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            style={{
                                boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                                background: 'rgb(0,0,0,0)'
                            }}
                            bordered={false}>
                            <Statistic
                                title="月手续费"
                                value={250}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                suffix=""
                            />
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card
                            style={{
                                boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                                background: 'rgb(0,0,0,0)'
                            }}
                            bordered={false}>
                            <Statistic
                                title="月还款金额"
                                value={1917}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                suffix=""
                            />
                        </Card>
                    </Col>
                </Row>
                <Space
                    align='center'
                    size='large'>
                    <Card
                        title="申请资料"
                        bordered={false}
                        style={{
                            width: 250,
                            height: 200,
                            boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                            background: 'rgb(0,0,0,0)'
                        }}>
                        <Space
                            direction="vertical"
                            align='start'
                            size='middle'>
                            <li type='disc'>身份证明</li>
                            <li type='disc'>房产证明</li>
                            <li type='disc'>近半年来收入流水证明</li>
                        </Space>
                    </Card>

                    <Card
                        title="放款方式"
                        bordered={false}
                        style={{
                            width: 250,
                            height: 200,
                            boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                            background: 'rgb(0,0,0,0)'
                        }}>
                        <Space
                            direction="vertical"
                            align='start'
                            size='middle'>
                            <li type='disc'>放款到本行信用卡</li>
                            <li type='disc'>毛胚房分2次放款</li>
                            <li type='disc'>精装房一次性放款</li>
                        </Space>
                    </Card>

                    <Card
                        title="用款方式"
                        bordered={false}
                        style={{
                            width: 250,
                            height: 200,
                            boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                            background: 'rgb(0,0,0,0)'
                        }}>
                        <Space
                            direction="vertical"
                            align='start'
                            size='middle'>
                            <li type='disc'>京东(部分家装商户)</li>
                            <li type='disc'>41类家装建材商户</li>
                        </Space>
                    </Card>

                    <Card
                        title="提前还款"
                        bordered={false}
                        style={{
                            width: 250,
                            height: 200,
                            boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                            background: 'rgb(0,0,0,0)'
                        }}>
                        <Space
                            direction="vertical"
                            align='start'
                            size='middle'>
                            <li type='disc'>网点现场沟通申请</li>
                        </Space>
                    </Card>

                    <Card
                        title="违约金"
                        bordered={false}
                        style={{
                            width: 250,
                            height: 200,
                            boxShadow: " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                            background: 'rgb(0,0,0,0)'
                        }}>
                        <Space
                            direction="vertical"
                            align='start'
                            size='middle'>
                            <li type='disc'>无</li>
                        </Space>
                    </Card>
                </Space>
            </Content>

            <Footer
                style={{
                    textAlign: 'center',
                    marginTop: '12%',
                    background: 'rgb(0,0,0,0)'
                }}
            >
                PHWeb ©2023 Created by PH Teams
            </Footer>
        </div>
    );
};

export default Result_page;