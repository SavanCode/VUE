import request from '@/config/axios'
/**
 * studentList Api 接口
 */
export const studentListApi = {
    add: (studentitem) => request({
        url: 'student_api/student/studentList/add',
        method: 'post',
        data: studentitem
    }),
    delete: (id) => request({
        url: 'student_api/student/studentList/delete/' + id,
        method: 'post'
    }),
    update: (studentitem) => request({
        url: 'student_api/student/studentList/update',
        method: 'post',
        data: studentitem
    }),
    list: (pageinfo) => request({
        url: 'student_api/student/studentList/list',
        method: 'post',
        data: pageinfo
    })
};