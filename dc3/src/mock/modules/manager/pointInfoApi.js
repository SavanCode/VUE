import Mock from "mockjs";
import "../../extends";
import { newArr, newObj } from "../../extends";
import moment from "moment";

let arr = [];

Mock.mock("manager_api/manager/pointInfo/list", "post", function(option) {
  let total = JSON.parse(option.body).page.size;

  let { deviceId, pointId, pointAttributeId } = JSON.parse(option.body);

  if (arr.length===0) { 
    arr = newArr(total);
  }

  if (deviceId) {
    arr = arr.filter(item => Object.is(item.deviceId,deviceId)); 
  }
  if (pointId) {
    arr = arr.filter(item => Object.is(item.pointId,pointId)); 
  }
  if (pointAttributeId) {
    arr = arr.filter(item => Object.is(item.pointAttributeId,pointAttributeId)); 
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

Mock.mock("manager_api/manager/pointInfo/update", "post", function(option) {
  let {
    deviceId,
    pointId,
    value,
    pointAttributeId,
    description,
    $index: index
  } = JSON.parse(option.body);

  Object.assign(arr[index], {
    deviceId: deviceId,
    pointId: pointId,
    value: value,
    pointAttributeId: pointAttributeId,
    description: description,
    updateTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS")
  });
  
  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});

Mock.mock("manager_api/manager/pointInfo/add", "post", function(option) {
  let { deviceId, pointId, value, pointAttributeId, description } = JSON.parse(
    option.body
  );

  let obj = newObj({
    id: arr.length,
    deviceId: deviceId,
    pointId: pointId,
    value: value,
    pointAttributeId: pointAttributeId,
    description: description,
    updateTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS"),
    createTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS")
  });

  arr.push(obj);
  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});

Mock.mock(/\/pointInfo\/delete/, "post", function(option) {
  const res = /\/pointInfo\/delete\/(\d+)/.exec(option.url);
  console.log("remove id::", res[1]);
  arr.splice(res[1], 1);
  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});
