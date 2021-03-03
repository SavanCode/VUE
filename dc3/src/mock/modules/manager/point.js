import Mock from "mockjs";
import "../../extends";
import { newArr,filter} from "../../extends";
import moment from "moment";
var arr = [];

Mock.mock("manager_api/manager/point/list", "post", function(option) {
  let total = JSON.parse(option.body).page.size;

  let { profileId, name, type, rw, accrue } = JSON.parse(option.body);

  if (total !== arr.length) {
    arr = newArr(total);
  } 

  if (profileId) {
    arr = arr.filter(item => item.profileId === profileId);
  }
  if (name) {
    arr = arr.filter(item => item.name === name);
  }
  if (type) {
    arr = arr.filter(item => item.type.includes(type));
  }
  if (rw != null) {
    //  0-只读 1-只写 2-读写
    arr = arr.filter(item => item.rw === rw);
  }
  if (accrue != null) {
    //true-累计 false-不累计
    arr = arr.filter(item => item.accrue === accrue);
  }
  return {
    status: 200,
    message: "获取列表成功！",
    ok: true,
    data: {
      total,
      records: arr
    }
  };
});

Mock.mock("manager_api/manager/point/update", "post", function(option) {
  console.log(JSON.parse(option.body).description);
  let {
    profileId,
    name,
    type,
    rw,
    accrue,
    base,
    multiple,
    format,
    minimum,
    maximum,
    unit,
    description,
    $index: index
  } = JSON.parse(option.body);

Object.assign(arr[index], {
    profileId,
    name,
    type,
    rw,
    accrue,
    base,
    multiple,
    format,
    minimum,
    maximum,
    unit,
    description,
    updateTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS")
  });

  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});

Mock.mock("manager_api/manager/point/add", "post", function(option) {
  let {
    profileId,
    name,
    type,
    rw,
    accrue,
    base,
    multiple,
    format,
    minimum,
    maximum,
    unit,
    description
  } = JSON.parse(option.body);
  
  var obj = {
    profileId,
    name,
    type,
    rw,
    accrue,
    base,
    multiple,
    format,
    minimum,
    maximum,
    unit,
    description,
    updateTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS"),
    createTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS")
  };

  arr.push(obj);
  return {
    status: 200,
    message: "add列表成功！",
    ok: true
  };
});

Mock.mock(/\/point\/delete/, "post", function(option) {
  const res = /\/point\/delete\/(\d+)/.exec(option.url);
  console.log("remove id::", res[1]);
  arr.splice(res[1], 1);
  return {
    status: 200,
    message: "delete列表成功！",
    ok: true
  };
});
