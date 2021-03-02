// 登录接口
export function salt () {
    return {
      // isOpen: false,
      url: 'user_api/auth/token/salt',
      type: 'get',
      data: {
        'message': 'success',
        'code': 0,
        'ok':true,
        'data': {
          'salt': '4344323121398'
          // 其他数据
        }
      }
    }
  }