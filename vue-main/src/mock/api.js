import Mock from 'mockjs'
Mock.mock('/api/user/login',{
  "status": 0,
  "data": {
    "id|10001-11000": 0,
    "username": "@cname",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000,
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
  }]
  }
});