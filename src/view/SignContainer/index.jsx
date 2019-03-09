import React from 'react';
import { Layout } from 'antd';
import './style.scss';

export default function SignContainer({ children }) {
  return (
    <Layout className="sign-container-main">
      <div className="sign-container-body">{children}</div>
    </Layout>
  );
}
