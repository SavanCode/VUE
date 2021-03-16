import Mock from 'mockjs' 
import "./extends";
import { newAdminArr as newArr, newAdminObj as newObj } from "./extends";

let arr = []
 
Mock.mock('adminList_api/admin/adminList/list', 'post', option =>{
  let {size:total,current} = JSON.parse(option.body).page;
    let { Admin_name,Admin_id } = JSON.parse(option.body);

  if (arr.length===0|| current) { 
    arr = newArr(total);
  }

  if (Admin_name) {
    arr = arr.filter(item =>  item.Admin_name.includes(Admin_name));
  }
  if( Admin_id ){
    arr = arr.filter(item =>  Object.is(item.Admin_id+"",Admin_id));
  }

    return {
      status: 200,
      ok:true,
      message: '获取商品列表成功！',
      data:{
        total:arr.length,
        records:arr.slice(0,total)
      }
    }
  })

  Mock.mock("adminList_api/admin/adminList/add", "post", function(option) {
    let { Admin_name,Admin_password } = JSON.parse( option.body);
  
    var obj = newObj({Admin_id: arr.length ,Admin_name,Admin_password });
  
    arr.push(obj);
    return {
      status: 200,
      message: "获取列表成功！",
      ok: true,
      arr,
    };
  });


  
Mock.mock("adminList_api/admin/adminList/update", "post", function(option) {
  console.log(JSON.parse(option.body));
  let {Admin_id,Admin_name,Admin_password} = JSON.parse(option.body); 
  Object.assign(arr[Admin_id], {Admin_name,Admin_password});

  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});

Mock.mock(/\/adminList\/delete/, "post", function(option) {
    const res = /\/adminList\/delete\/(\d+)/.exec(option.url);
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