// 登录接口
export function generateToken () {
    return {
      // isOpen: false,
      url: 'user_api/auth/token/generate',
      type: 'post',
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