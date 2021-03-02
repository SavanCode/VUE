import Mock from 'mockjs'
import { Random } from 'mockjs'
import '../../extends'


function newArr(length){
    let arr=[];
    for(let i = 0 ; i < length ; i++){
        let newArticleObject = Mock.mock({
            name: Random.cname(), 
            serviceName:'@serviceName()',
            status:'15161',
            host: "127.1.2.3",
            port:Random.natural(0, 10000),
            description:Random.csentence(5,10),
            updateTime:Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            createTime:Random.datetime('yyyy-MM-dd A HH:mm:ss')
        })
        arr.push(newArticleObject);  
    } 
    return arr
}
  

Mock.mock('manager_api/manager/driver/list', 'post', function(option) {
   // console.log(JSON.parse(option.body).page)
    let total=JSON.parse(option.body).page.size; 

    let name=JSON.parse(option.body).name;
    let serviceName=JSON.parse(option.body).serviceName;
    let port=JSON.parse(option.body).port;
    let host=JSON.parse(option.body).host; 

    let arr = newArr(total)
    if(name){
        arr= arr.filter(item=> item.name===name)
    }else if(serviceName){
        arr= arr.filter(item=> item.serviceName===serviceName)
    }else if(port){
        arr= arr.filter(item=> item.port===port)
    }else if(host){
        arr= arr.filter(item=> item.host.includes(host))
    }

    return {
          status: 200,
          message: '获取列表成功！',
          ok:true, 
          data:{
              total,
              records:arr
          }
        }
  })

Mock.mock('manager_api/manager/driver/status', 'post', {
    status: 200,
    message: '获取statuses列表成功！',
    ok:true, 
    data:{
        '菠萝':true,
        '大菠萝':true,
        '萝卜':true
    }
  })