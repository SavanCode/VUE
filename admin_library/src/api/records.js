import request from '@/config/axios'

export const recordsApi = {
    add: (record) => request({
        url: 'records_api/records/add',
        method: 'post',
        data: record
    }),
    delete: (id) => request({
        url: 'records_api/records/delete/' + id,
        method: 'post'
    }),
    update: (record) => request({
        url: 'records_api/records/update',
        method: 'post',
        data: record
    }),
    list: (pageinfo) => request({
        url: 'records_api/records/list',
        method: 'post',
        data: pageinfo
    })
};