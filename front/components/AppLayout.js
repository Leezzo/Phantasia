import React from 'react';
import { Menu, Input } from 'antd';
import Link from 'next/link';

const style = {

}

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode ="horizontal">
                <Menu.Item key="title">PHANTASIA</Menu.Item>
                <Menu.Item key="search">
                    <Input.Search
                    />
                </Menu.Item>
                <Menu.Item key="login"><Link href="/login"><a>로그인</a></Link></Menu.Item>
                <Menu.Item key="signup">회원가입</Menu.Item>
            </Menu>
            {children}
        </div>
    )
}

export default AppLayout;
