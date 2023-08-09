import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import withRouter from '../withRouter'
import './style.css';

const logoPath = "https://www.transsion.com/images/20230207/202302071429397522.png"

function TopMenu({ location }) {
  const pathname = location.pathname === '/' ? '/home' : location.pathname;
  return (
    <div className="top-menu">
      <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
        <Menu.Item key="/">
          <Link to="/">首页</Link>
        </Menu.Item>
        {/* <Menu.Item key="/advance">
          <Link to="/advance">自定义业务</Link>
        </Menu.Item> */}
        <Menu.Item key="/advance_ratio">
          <Link to="/advance_ratio">自定义表单</Link>
        </Menu.Item>
        {/* <Menu.Item key="/login">
          <Link to="/login">退出</Link>
        </Menu.Item> */}
      </Menu>
      <img className="logo" src={logoPath} alt="logo" />
    </div>
  );
}

TopMenu.propTypes = {
  location: PropTypes.object.isRequired,
};

// widthRouter 为组件提供路由相关参数 location,history,match
export default withRouter(TopMenu);