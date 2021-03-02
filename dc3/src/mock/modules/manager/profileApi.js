import Mock from 'mockjs'
import { Random } from 'mockjs'
import '../../extends'


function newArr(length){
    let arr=[];
    for(let i = 0 ; i < length ; i++){
        let newArticleObject = Mock.mock({ 
            name:'@name()',
            driverId:'@driverId()',
            displayName: '@displayName()', 
            'share|1':['共有', '私有'],
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
  

Mock.mock('manager_api/manager/profile/list', 'post', function(option){
   let total=JSON.parse(option.body).page.size; 
    //console.log('私有'.localeCompare('私有', 'zh'))
    //console.log('私有'.localeCompare('公有', 'zh'))
    let {share,name}=JSON.parse(option.body); 
    // let driverId=JSON.parse(option.body).driverId; 
     
    let arr = newArr(total)
    //filter 不是很好
    if(name){
        arr= arr.filter(item=> item.name===name)
    }else if(share){  
        arr= arr.filter(item=> item.share.localeCompare('私有', 'zh')===0)
    }
    // else if(driverId){//这里的driver ID不会filter因为不是param
    //     arr= arr.filter(item=> item.driverId===driverId)
    // }
 
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
 
  Mock.mock('manager_api/manager/profile/update', 'post', function(option){
    let total=JSON.parse(option.body).profile;   
       
  
     return { 
             status: 200,
             message: '获取列表成功！',
             ok:true,  
         }
   })