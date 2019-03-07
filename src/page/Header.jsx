import React, { useContext, useState } from 'react';
import { userContext } from './Context';
import { Layout, Button } from 'antd';
import Fetch from '../fetch';
import logoUrl from '../asset/images/logo.png';

export default function Header() {
  const { username, onChange } = useContext(userContext);
  const [loading, setLoading] = useState(false);
  function logOut() {
    if (loading) return;
    setLoading(true);
    Fetch.logout().then(
      okay => {
        if (okay) {
          setLoading(false);
          onChange({ userflag: 0, username: '' });
        }
      },
      () => {
        setLoading(false);
      }
    );
  }
  return (
    <Layout.Header
      style={{
        backgroundColor: 'white',
        padding: '0 8px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <img
        alt="Logo"
        src={logoUrl}
        style={{ width: '16px', height: '16px', marginRight: '8px' }}
      />
      {username}
      <div style={{ flex: 'auto' }} />
      <Button onClick={logOut} loading={loading} size="small">
        退出
      </Button>
    </Layout.Header>
  );
}
