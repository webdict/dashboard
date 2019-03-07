import React from 'react';

import { Layout, Spin } from 'antd';

export default function Loading() {
  return (
    <Layout style={{ justifyContent: 'center' }}>
      <Spin />
    </Layout>
  );
}
