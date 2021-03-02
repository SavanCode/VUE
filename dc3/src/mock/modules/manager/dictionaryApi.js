import Mock from 'mockjs'
import { Random } from 'mockjs'
import '../../extends'

Mock.mock('manager_api/manager/dictionary/driver', 'get',{ 
    status: 200,
    message: '获取列表成功！',
    ok:true, 
    //貌似加value
    data: [{label:'ADriver',value:'ADriver'}, {label:'BDriver',value:'BDriver'}, {label:'CDriver',value:'CDriver'}, {label:'DDriver',value:'DDriver'}, {label:'EDriver',value:'EDriver'},{label:'FDriver',value:'FDriver'}]
  })

Mock.mock('manager_api/manager/dictionary/profile', 'get', {
    status: 200,
    message: '获取profile列表成功！',
    ok:true, 
    data: [{label:'host',value:'host'}, {label:'port',value:'port'}, {label:'password',value:'password'}, {label:'username',value:'username'}]
  })

  Mock.mock('manager_api/manager/dictionary/driverAttribute', 'get', {
    status: 200,
    message: '获取driverAttribute列表成功！',
    ok:true, 
    data:[{label:'主机',value:'主机'}, {label:'用户名',value:'用户名'}, {label:'端口',value:'端口'},{label: '密码',value:'密码'}, {label:'SDEGYS',value:'SDEGYS'}]
  })