import Mock from "mockjs";
import { newArr } from "../../extends";
import "../../extends";

let arr=[]

Mock.mock("manager_api/manager/pointAttribute/list", "post", function(option) {
 
  let total = JSON.parse(option.body).page.size;

  let { displayName, name, type, driverId } = JSON.parse(option.body);

  if (arr.length===0) { 
    arr = newArr(total);
  } 

  if (displayName) {
    arr = arr.filter(item => Object.is(item.displayName,displayName)); 
  }
  if (name) {
    arr = arr.filter(item => Object.is(item.name,name)); 
  }
  if (type) { 
    arr = arr.filter(item => item.type.includes(type));
  }
  if (driverId) { 
    arr = arr.filter(item => Object.is(item.driverId,driverId)); 
  }

  return {
    status: 200,
    message: "获取列表成功！",
    ok: true,
    data: {
      total,
      records: arr.slice(0,total)
    }
  };
});
