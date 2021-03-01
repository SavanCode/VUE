import request from '@/config/axios'

export const pointValueApi = {
    list: (pointValue) => request({
        url: 'data_api/data/pointValue/list',
        method: 'post',
        data: pointValue
    })
};

export const deviceEventApi = {
    list: (event) => request({
        url: 'data_api/data/deviceEvent/list',
        method: 'post',
        data: event
    })
};
