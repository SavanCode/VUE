import Mock from 'mockjs'
import { Random } from 'mockjs'

var arr = [];
var max=0;
for(let i = 0 ; i < 10 ; i++){
    let newArticleObject = {
        name: Random.cname(),
        content: Random.csentence(5,10),
        id: i
    }
    max++
    arr.push(newArticleObject);  //将模拟的数据放到数组中
} 

Mock.mock('/getlist', 'get', {
  status: 200,
  message: '获取列表成功！',
  arr
})

Mock.mock('/delitem', 'post', function(option) {
  // 这里的 option 是请求相关的参数
  console.log(option)
  let id = parseInt(JSON.parse(option.body).params.delId); 
  arr = arr.filter(item => item.id!=id); 

   
  return Mock.mock({
    status: 200,
    message: '@cword(2,5)',
    data:arr
  })
})

//addItem
Mock.mock('/addItem', 'post', function(option) {
    // 这里的 option 是请求相关的参数
    console.log(option)
    let inputObj =JSON.parse(option.body).params.obj
    let newItem={
      id:max,
      name:inputObj.name,
      content: inputObj.content,
    }
    arr.push(newItem)
    max++
  
    return Mock.mock({
      status: 200,
      message: '@cword(2,5)',
      data:arr
    })
  })
  //update
  Mock.mock('/updateItem', 'post', function(option) {
    // 这里的 option 是请求相关的参数
    console.log(JSON.parse(option.body).params)
    let updateId=JSON.parse(option.body).params.updateId
    let newObj= {
      id:updateId,
      name: Random.cname(),
      content: Random.csentence(5,10),
    }
    arr= arr.map(item => item.id==updateId? newObj: item)
    return Mock.mock({
      status: 200,
      message: '@cword(2,5)',
      data:arr
    })
  })