// 登录接口
export function check () {
    return {
      // isOpen: false,
      url: 'user_api/auth/token/check',
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