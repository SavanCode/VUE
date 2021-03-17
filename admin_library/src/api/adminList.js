import request from '@/config/axios'
/**
 * adminList Api 接口
 */
export const adminListApi = {
    add: (adminitem) => request({
        url: 'adminList_api/admin/adminList/add',
        method: 'post',
        data: adminitem
    }),
    delete: (id) => request({
        url: 'adminList_api/admin/adminList/delete/' + id,
        method: 'post'
    }),
    update: (adminitem) => request({
        url: 'adminList_api/admin/adminList/update',
        method: 'post',
        data: adminitem
    }),
    list: (pageinfo) => request({
        url: 'adminList_api/admin/adminList/list',
        method: 'post',
        data: pageinfo
    })
};