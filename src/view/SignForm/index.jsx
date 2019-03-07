/**
 * 李鸿章<lihz@hugeinfo.com.cn>
 * 2019年2月3日 15:53
 *
 */

import React, { useState, useEffect } from 'react';
import Fetch from '../../fetch';
import './style.scss';

import { Form, Icon, Input, Button, Row, Col, message } from 'antd';

export default function SignForm({ onSubmit, loading }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameValidateStatus, setUsernameValidateStatus] = useState(
    'validating'
  );
  const [passwordValidateStatus, setPasswordValidateStatus] = useState(
    'validating'
  );
  const [countdown, setCountdown] = useState(0);
  const [label, setLabel] = useState(-1);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (countdown) {
      const id = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(id);
    }
  }, [countdown]);
  useEffect(() => {
    if (counter) {
      let valid = true;
      Fetch.checkUsername(username).then(status => {
        if (valid && status > -1) {
          setLabel(status);
          setCountdown(64);
          message.success(`请在${username}查收登录密码`);
        }
      });
      return () => (valid = false);
    }
  }, [counter]);
  function onHandleSubmit(event) {
    event.preventDefault();
    if (testUsername() && testPassword()) {
      onSubmit({ username, password });
    }
  }
  function onUsernameChange({ target: { value } }) {
    setUsername(value.toLowerCase());
    setUsernameValidateStatus('validating');
    setLabel(-2);
  }
  function testUsername() {
    return /^[-._a-z0-9]+@(?:[-a-z0-9]+\.)+[a-z]+$/i.test(username);
  }
  function checkUsername() {
    if (!username) {
      setUsernameValidateStatus('validating');
      return false;
    }
    if (label !== -2) {
      return usernameValidateStatus === 'success';
    }
    if (testUsername()) {
      setUsernameValidateStatus('success');
      setLabel(-1);
      return true;
    } else {
      setUsernameValidateStatus('error');
      return false;
    }
  }
  function onPasswordChange({ target: { value } }) {
    setPassword(value);
    setPasswordValidateStatus('validating');
  }
  function testPassword() {
    return /^[-_a-z0-9]{12}$/i.test(password);
  }
  function checkPassword() {
    if (!password) {
      setPasswordValidateStatus('validating');
      return false;
    }
    if (testPassword()) {
      setPasswordValidateStatus('success');
      return true;
    } else {
      setPasswordValidateStatus('error');
      return false;
    }
  }
  function getPassword() {
    if (testUsername()) {
      setCounter(counter + 1);
    }
  }
  return (
    <Form onSubmit={onHandleSubmit} className="login-form">
      <Form.Item validateStatus={usernameValidateStatus}>
        <Input
          value={username}
          onChange={onUsernameChange}
          onBlur={checkUsername}
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="请输入电子邮箱登录或注册"
        />
      </Form.Item>
      <Form.Item validateStatus={passwordValidateStatus}>
        <Row gutter={4}>
          <Col span={17}>
            <Input
              value={password}
              onChange={onPasswordChange}
              onBlur={checkPassword}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请在电子邮箱查收登录密码"
            />
          </Col>
          <Col span={7}>
            <Button
              onClick={getPassword}
              style={{ width: '100%' }}
              type="primary"
              disabled={countdown > 0 || !testUsername()}
            >
              {countdown > 0 ? `获取(${countdown})` : '获取'}
            </Button>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item>
        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          className="login-form-button"
          disabled={!testPassword() || !testUsername()}
        >
          {label === 1 ? '登录' : label === 0 ? '注册' : '登录｜注册'}
        </Button>
      </Form.Item>
    </Form>
  );
}
