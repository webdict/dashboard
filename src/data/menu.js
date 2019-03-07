/*
  # -1 - 等待中
  #  0 - 未注册
  #  1 - 已登录
  #  2 - 开关
  #  4 - 高级
  #  8 - 超级
  # 16 - 管理员
 */
export default () => [
  {
    name: '查词历史',
    icon: 'table',
    path: '/history/1'
  },
  {
    name: '网页笔记',
    icon: 'read',
    path: '/webnote/1'
  }
];
