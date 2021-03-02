// 登录接口
export function cancel () {
    return {
      // isOpen: false,
      url: 'user_api/auth/token/cancel',
      type: 'get',
      data: {
        'message': 'success',
        'code': 0,
        'ok':true,
        'data': { 
          // 其他数据
        }
      }
    }
  }