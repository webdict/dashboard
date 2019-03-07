import React, { useContext, useState } from 'react';
import SignForm from '../view/SignForm';
import LogoView from '../view/LogoView';
import { Layout, message } from 'antd';
import Fetch from '../fetch';
import { userContext } from './Context';
export default function Signin() {
  const [loading, setLoading] = useState(false);
  const { onChange } = useContext(userContext);
  function onSubmit(data) {
    setLoading(true);
    Fetch.checkIn(data).then(userflag => {
      setLoading(false);
      if (userflag > 0) {
        return onChange({ userflag, ...data });
      }
      switch (userflag) {
        case 0:
          return message.error('用户名或密码错误');
        default:
          return message.error('登录错误');
      }
    });
  }
  return (
    <Layout style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '320px'
        }}
      >
        <LogoView />
        <SignForm onSubmit={onSubmit} loading={loading} />
      </div>
    </Layout>
  );
}
