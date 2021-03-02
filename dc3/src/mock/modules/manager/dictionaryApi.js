import Mock from 'mockjs'
import { Random } from 'mockjs'
import '../../extends'

Mock.mock('manager_api/manager/dictionary/driver', 'get',{ 
    status: 200,
    message: '获取列表成功！',
    ok:true, 
    data: [{label:'ADriver'}, {label:'BDriver'}, {label:'CDriver'}, {label:'DDriver'}, {label:'EDriver'},{label:'FDriver'}]
  })

// Mock.mock('manager_api/manager/driver/status', 'post', {
//     status: 200,
//     message: '获取statuses列表成功！',
//     ok:true, 
//     data:{
//         '菠萝':true,
//         '大菠萝':true,
//         '萝卜':true
//     }
//   })