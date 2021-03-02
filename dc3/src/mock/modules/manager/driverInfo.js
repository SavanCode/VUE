import Mock from 'mockjs'
import { Random } from 'mockjs'
import '../../extends'

var arr=[];
function newArr(length){
    console.log("newing")
    arr=[]
    for(let i = 0 ; i < length ; i++){
        let newArticleObject = Mock.mock({ 
            id:i,
            profileId:'@name()',
            driverAttributeId:'@displayName()',
            value:'15161',  
            description:Random.csentence(5,10),
            updateTime:Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            createTime:Random.datetime('yyyy-MM-dd A HH:mm:ss')
        })
        arr.push(newArticleObject);  
    } 
    console.log(arr)
    return arr
}
  

Mock.mock('manager_api/manager/driverInfo/list', 'post', function(option){
    let total=JSON.parse(option.body).page.size; 
    //console.log('私有'.localeCompare('私有', 'zh'))
    //console.log('私有'.localeCompare('公有', 'zh'))
    // let {share,name}=JSON.parse(option.body);  
    if(total!==arr.length){
        arr = newArr(total)
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
 
  Mock.mock('manager_api/manager/driverInfo/update', 'post', function(option){
    console.log(JSON.parse(option.body))  
    let {profileId:newprofileId,driverAttributeId:newDAId}=JSON.parse(option.body);
    
     
    //console.log(arr)
     return { 
             status: 200,
             message: '获取列表成功！',
             ok:true,  
         }
   }) 