import React, { Component } from 'react';
import { Layout, Menu, Avatar, Breadcrumb, Select } from 'antd';
import './Home.css'
import {
    DesktopOutlined,
    PieChartOutlined,
    // FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {
    Route, //每个路由组件都需要此组件
    Redirect, // 重定向
    Switch, // 匹配到第一个符合条件路径的组件， 就停止
} from 'react-router-dom'
import { withRouter } from 'react-router' //路由
import IndexHome from './../Index/Index'
import Banner from './../bannermanage/Banner'
import Goods from './../goodsmanage/Goods'
import GoodsClass from './../goodsmanage/GoodsClass'
import Order from './../ordermanage/Order'
import List from './../rolemanage/List'
import UserRole from './../rolemanage/UserRole'
import User from './../usermanage/User'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
class Home extends Component {
    state = {
        collapsed: false,
        title:'首页'
    }
    onCollapse = collapsed => {
        // console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        let pathname = this.props.location.pathname
        let SelectedKeys = [pathname]
        let OpenKeys = ["/"+pathname.split("/")[1]]
        console.log(pathname.split("/"))
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>

                    <Menu theme="dark" mode="inline" onClick={this.handleClick} selectedKeys = {SelectedKeys} defaultOpenKeys={OpenKeys}>
                        <Menu.Item key="/uu" style={{height:"60px"}}>
                            <div className="logo" />
                            <div style={{ display: "flex"}}>
                                <div style={{marginTop:"10px"}}><Avatar size={40} icon={<UserOutlined />} /></div>
                                <div style={{margin:"15px",}}>
                                    <h3 style={{ color: "skyblue",font:"500 16px/1 ''" }}>超级管理员</h3>
                                    <p style={{ color: "white",font:"500 12px/1 ''" }}>欢迎登录！</p>
                                </div>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="/indexhome">
                            <PieChartOutlined />
                            <span>首页</span>
                        </Menu.Item>
                        <Menu.Item key="/user">
                            <UserOutlined />
                            <span>用户管理</span>
                        </Menu.Item>
                        <SubMenu
                            key="/role-manage"
                            title={
                                <span>
                                    <UserOutlined />
                                    <span>权限管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="/role-manage/list">角色列表</Menu.Item>
                            <Menu.Item key="/role-manage/userRole">用户权限</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="/goods-manage"
                            title={
                                <span>
                                    <TeamOutlined />
                                    <span>商品管理</span>
                                </span>
                            }
                        >
                            <Menu.Item key="/goods-manage/goodsClass">商品分类</Menu.Item>
                            <Menu.Item key="/goods-manage/goods">商品管理</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="/order">
                            <DesktopOutlined />
                            <span>订单管理</span>
                        </Menu.Item>
                        <Menu.Item key="/banner">
                            <DesktopOutlined />
                            <span>轮播图管理</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>{this.state.title.push?this.state.title[1].props.children:this.state.title}</Breadcrumb.Item>
                            {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                        </Breadcrumb>
                            <Switch>
                                <Route path="/indexhome" component={IndexHome}/>
                                <Route path="/user" component={User}/>
                                <Route path="/role-manage/userRole" component={UserRole}/>
                                <Route path="/role-manage/list" component= {List}/>
                                <Route path= "/goods-manage/goods" component={Goods}/>
                                <Route path="/goods-manage/goodsClass" component={GoodsClass}/>
                                <Route path="/order" component={Order}/>
                                <Route path="/banner" component={Banner}/>
                                <Redirect from="/" to="/indexhome" exact />
                            </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
    handleClick=(obj)=>{
        // console.log(obj.item.props.children)
     
        this.setState({
            title:obj.item.props.children
        })
        this.props.history.push(obj.key)

    }
}
export default withRouter(Home);