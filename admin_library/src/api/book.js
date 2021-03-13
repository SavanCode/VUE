import request from '@/config/axios'

export const bookListApi = {
    add: (bookitem) => request({
        url: 'book_api/book/bookList/add',
        method: 'post',
        data: bookitem
    }),
    delete: (id) => request({
        url: 'book_api/book/bookList/delete/' + id,
        method: 'post'
    }),
    update: (bookitem) => request({
        url: 'book_api/book/bookList/update',
        method: 'post',
        data: bookitem
    }),
    list: (pageinfo) => request({
        url: 'book_api/book/bookList/list',
        method: 'post',
        data: pageinfo
    })
};