import Mock from 'mockjs' 
import "./extends";
import { newStudentArr as newArr, newStudentObj as newObj } from "./extends";
import moment from 'moment'

let arr = []
 
Mock.mock('student_api/student/studentList/list', 'post', option =>{

  let total = JSON.parse(option.body).page.size;
  let { Sex , isActive } = JSON.parse(option.body);

  if (arr.length===0) { 
    arr = newArr(total);
  }  
 


if (Sex != null) { 
    Sex = Object.is(Sex,"false") ? false :true;
    arr = arr.filter(item => Object.is(item.Sex,Sex));  
  }
  if (isActive != null) { 
    arr = arr.filter(item => Object.is(item.isActive,isActive));  
  }

    return {
      status: 200,
      ok:true,
      message: '获取商品列表成功！',
      data:{
        total:20,
        records:arr.slice(0,total)
      }
    }
  })

  Mock.mock("student_api/student/studentList/add", "post", function(option) {
    //"{"$Sex":"男","$isActive":"在线","User_id":"","Username":"dddd","Password":"44444","Sex":"true","Tele":"4444444","Email":"ddddd","Lended_num":"","Balance":"444","isActive":0,"Penalty_record":"","Create_date":""}"
    let { Username, Password, Sex, Tele,Email,Lended_num,Balance,isActive,Penalty_record } = JSON.parse(
      option.body
    );
  
    var obj = newObj({
        User_id:arr.length,Username, Password, Sex, Tele,Email,Lended_num:0,Balance,isActive,Penalty_record:[],
      Create_date: moment().format("yyyy-MM-dd HH:mm:ss")
    });
  
    arr.push(obj);
    return {
      status: 200,
      message: "获取列表成功！",
      ok: true
    };
  });


  
Mock.mock("student_api/student/studentList/update", "post", function(option) {
  console.log(JSON.parse(option.body));
  let { User_id,Username, Password, Sex, Tele,Email,Balance,isActive} = JSON.parse(option.body);
  Object.assign(arr[User_id], {
    Username, Password, Sex, Tele,Email,Balance,isActive
  });

  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});

  Mock.mock(/\/studentList\/delete/, "post", function(option) {
    const res = /\/studentList\/delete\/(\d+)/.exec(option.url);
    console.log("remove id::", res[1]);
    arr.splice(res[1], 1);
    return {
      status: 200,
      message: "获取列表成功！",
      ok: true,
      data:{
        arr
      }
    };
  });