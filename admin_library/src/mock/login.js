import Mock from 'mockjs' 

Mock.mock('user_api/auth/token/generate', 'post', {
  status: 200, 
  ok:true,
  data: {
    'msg': 'success',
    'code': 0,
    'data': {
      'token': '4344323121398'
    }
  }
})
 