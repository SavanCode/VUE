// 登录接口
export function login () {
    return {
      // isOpen: false,
      url: 'user_api/auth/token/salt',
      type: 'get',
      data: {
        'msg': 'success',
        'code': 0,
        'data': {
          'salt': '4344323121398'
          // 其他数据
        }
      }
    }
  }