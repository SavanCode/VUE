import request from '@/config/axios'
/**
 * 申请后台Token
 * @param {*} user 用户信息
 * @returns Token
 */
export const generateToken = (user) => request({
    url: 'user_api/auth/token/generate',
    method: 'post',
    data: user
});

/**
 * 检查token是否有效
 * @param {*} user 用户信息
 * @param {*} token 用户现有token
 * @returns 是否有效
 */
export const checkTokenValid = (user, token) => request({
    url: 'user_api/auth/token/check',
    method: 'post',
    params: {
        user,
        token
    }
});

/**
 * 
 * @param {*} name 用户名
 * @returns 是否成功cleanToken
 */
export const cancelToken = (name) => request({
    url: 'user_api/auth/token/cancel',
    method: 'get',
    params: {
        username: name
    }
});
