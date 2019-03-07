import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Modal } from 'antd-mobile';
import { Input, Icon, Button } from 'antd';
// import chunk from 'lodash/chunk';
// import tree from 'hife/tree';

import './style.scss';

export default function WordInfo({ word, info, onSubmit }) {
  const [editable, setEditable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [_info, setInfo] = useState(info);
  function onClick() {
    if (_info !== info) {
      setLoading(true);
      onSubmit(_info).then(okey => {
        if (okey) {
          setEditable(false);
          setLoading(false);
        }
      });
    } else {
      setEditable(false);
    }
  }
  if (editable) {
    return (
      <div className="word-info-edit">
        <Input
          onChange={({ target: { value } }) => setInfo(value)}
          placeholder={`备注 ${word}`}
          className="word-info-input"
          onPressEnter={onClick}
          value={_info}
          size="small"
        />
        <Button onClick={onClick} loading={loading} type="dashed" size="small">
          完成
        </Button>
      </div>
    );
  }
  return (
    <div className="word-info-view">
      {word}
      <span className="word-info-info">
        {' '}
        {_info}{' '}
        <Icon
          onClick={() => setEditable(true)}
          className="word-info-icon"
          type="edit"
        />
      </span>
    </div>
  );
}
