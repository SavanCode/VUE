import Mock from 'mockjs'
import { Random } from 'mockjs'
import '../../extends'


function newArr(length){
    let arr=[];
    for(let i = 0 ; i < length ; i++){
        let newArticleObject = Mock.mock({
            driverId:'@driverId()',
            name:'@name()',
            displayName: '@displayName()', 
            type:'@type()',
            value:'15161',  
            description:Random.csentence(5,10),
            updateTime:Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            createTime:Random.datetime('yyyy-MM-dd A HH:mm:ss')
        })
        arr.push(newArticleObject);  
    } 
    return arr
}
  

Mock.mock('manager_api/manager/driverAttribute/list', 'post', function(option){
   //console.log(JSON.parconsole.log('')se(option.body))
   let total=JSON.parse(option.body).page.size; 

    let displayName=JSON.parse(option.body).displayName;
    let name=JSON.parse(option.body).name;
    let type=JSON.parse(option.body).type;
    let driverId=JSON.parse(option.body).driverId; 

    let arr = newArr(total)
    //filter 不是很好
    if(displayName){
        arr= arr.filter(item=> item.displayName===displayName)
    }else if(name){
        arr= arr.filter(item=> item.name===name)
    }else if(type){
        console.log(type)
        arr= arr.filter(item=> item.type.includes(type))
    }else if(driverId){//这里的driver ID不会filter因为不是param
        arr= arr.filter(item=> item.driverId)
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
 