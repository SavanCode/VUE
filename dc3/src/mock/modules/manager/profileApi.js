import Mock from "mockjs";
import { newArr, newObj } from "../../extends";
import "../../extends";
import moment from "moment";

let arr = [];

Mock.mock("manager_api/manager/profile/list", "post", function(option) {
  let total = JSON.parse(option.body).page.size;

  let { share, name, driverId } = JSON.parse(option.body);

  if (total !== arr.length) {
    arr = newArr(total);
  }

  //filter 不是很好
  if (name) {
    arr = arr.filter(item => item.name === name);
  }
  if (share != null) {
    arr = arr.filter(item => item.share === share);
  }
  if (driverId) {
    arr = arr.filter(item => item.driverId === driverId);
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

Mock.mock("manager_api/manager/profile/update", "post", function(option) {
  //console.log(JSON.parse(option.body).description);
  let { name, share, driverId, description, $index: index } = JSON.parse(
    option.body
  );

  Object.assign(arr[index], {
    name,
    share,
    driverId,
    description,
    updateTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS")
  });
  return {
    status: 200,
    message: "update列表成功！",
    ok: true
  };
});

Mock.mock("manager_api/manager/profile/add", "post", function(option) {
  //console.log(JSON.parse(option.body));
  let { name, share, driverId, description } = JSON.parse(option.body);
  let obj = newObj({
    id: arr.length,
    name: name,
    share: share,
    driverId: driverId,
    description: description,
    createTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS"),
    updateTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS")
  });

  arr.push(obj);
  return {
    status: 200,
    message: "add列表成功！",
    ok: true
  };
});

Mock.mock(/\/profile\/delete/, "post", function(option) {
  const res = /\/profile\/delete\/(\d+)/.exec(option.url);
  //console.log("remove id::", res[1]);
  arr.splice(res[1], 1);
  return {
    status: 200,
    message: "delete列表成功！",
    ok: true
  };
});
