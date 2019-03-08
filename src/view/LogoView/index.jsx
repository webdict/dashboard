/**
 * 李鸿章<lihz@hugeinfo.com.cn>
 * 2019年2月3日 17:50
 *
 */

import React from 'react';
import logoUrl from '../../asset/images/logo.png';
import './style.scss';

export default function LogoView() {
  return (
    <div className="logo-view-main">
      <img src={logoUrl} alt="Logo" />
    </div>
  );
}
