import Mock from 'mockjs' 

Mock.mock('user_api/auth/token/generate', 'post',option => { 
   let {name:userName}=JSON.parse(option.body); 
  if(userName.startsWith("s")||userName.startsWith("S")){
      return {
        status: 200, 
        ok:true,
        data: {
          // 'msg': 'success',
          // 'code': 0,
          // 'data': {
            'token': '4344323121398',
            //'isAdmin':false
            "user":{
              isAdmin:false,
              userName
            }
          // }
        }
  }
  }else if(userName.startsWith("t")||userName.startsWith("T")){
    return {
      status: 200, 
      ok:true,
      data: {
        // 'msg': 'success',
        // 'code': 0,
        // 'data': {
          'token': '4344323121398',
          "user":{
            isAdmin:true,
            userName
          }
        //}
      }
  }
 }else{
   //console.log("username",userName,userName.startsWith("t"),userName.startsWith("T"))
  return {
      status: 404, 
      ok:false,
      data: {
        'msg': 'fail',
        'code': 0,
        'data': { }
      }
  }
 }
})
 