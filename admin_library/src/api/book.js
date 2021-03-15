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

export const bookTypeApi = {
    add: (bookTypeitem) => request({
        url: 'book_api/book/bookTypeitem/add',
        method: 'post',
        data: bookTypeitem
    }),
    delete: (id) => request({
        url: 'book_api/book/bookTypeitem/delete/' + id,
        method: 'post'
    }),
    update: (bookTypeitem) => request({
        url: 'book_api/book/bookTypeitem/update',
        method: 'post',
        data: bookTypeitem
    }),
    list: (pageinfo) => request({
        url: 'book_api/book/bookTypeitem/list',
        method: 'post',
        data: pageinfo
    })
};