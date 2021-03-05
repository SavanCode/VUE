import Mock from "mockjs";
import "../../extends";
import { newArr, newObj } from "../../extends";
import moment from "moment";

let arr = [];

Mock.mock("manager_api/manager/device/list", "post", function(option) {
  let total = JSON.parse(option.body).page.size;
  let { profileId, name, groupId } = JSON.parse(option.body);

  if (arr.length===0) { 
    arr = newArr(total);
  }

  if (profileId) {
    arr = arr.filter(item => Object.is(item.profileId,profileId));
  }
  if (name) {
    arr = arr.filter(item => Object.is(item.name,name));
  }
  if (groupId) {
    arr = arr.filter(item => Object.is(item.groupId,groupId));
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

Mock.mock("manager_api/manager/device/status", "post", {
  status: 200,
  message: "获取列表成功！",
  ok: true,
  data: {
    0: "MAINTAIN",
    1: "ONLINE",
    2: "FAULT",
    3: "MAINTAIN",
    4: "ONLINE",
    5: "FAULT",
    6: "MAINTAIN",
    7: "ONLINE",
    8: "FAULT",
    9: "MAINTAIN",
    10: "ONLINE",
    11: "FAULT"
  }
});

Mock.mock("manager_api/manager/device/update", "post", function(option) {
  console.log(JSON.parse(option.body).description);
  let {
    profileId,
    name,
    groupId,
    multi,
    description,
    $index: index
  } = JSON.parse(option.body);

  Object.assign(arr[index], {
    profileId,
    name,
    groupId,
    multi,
    description,
    updateTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS")
  });

  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});

Mock.mock("manager_api/manager/device/add", "post", function(option) {
  let { profileId, name, groupId, multi, description } = JSON.parse(
    option.body
  );

  var obj = newObj({
    id: arr.length,
    profileId: profileId,
    name: name,
    groupId: groupId,
    multi: multi,
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

Mock.mock(/\/device\/delete/, "post", function(option) {
  const res = /\/device\/delete\/(\d+)/.exec(option.url);
  console.log("remove id::", res[1]);
  arr.splice(res[1], 1);
  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});
