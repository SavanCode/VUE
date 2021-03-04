import Mock from "mockjs";
import { newArr, filter, newObj } from "../../extends";
import "../../extends";
import moment from "moment";

let arr = [];

Mock.mock("manager_api/manager/driverInfo/list", "post", function(option) {
  let total = JSON.parse(option.body).page.size;

  let { profileId, driverAttributeId } = JSON.parse(option.body);
  if (total !== arr.length) {
    arr = newArr(total);
  }

  if (profileId) {
    arr = arr.filter(item => item.profileId === profileId);
  }
  if (driverAttributeId) {
    arr = arr.filter(
      item =>
        item.driverAttributeId.localeCompare(driverAttributeId, "zh") === 0
    );
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

Mock.mock("manager_api/manager/driverInfo/update", "post", function(option) {
  //console.log(JSON.parse(option.body));
  let {
    profileId,
    driverAttributeId,
    description,
    value,
    $index: index
  } = JSON.parse(option.body);

  Object.assign(arr[index], {
    profileId,
    driverAttributeId,
    description,
    value,
    updateTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS")
  });
  return {
    status: 200,
    message: "update列表成功！",
    ok: true
  };
});

Mock.mock("manager_api/manager/driverInfo/add", "post", function(option) {
  let { profileId, driverAttributeId, value, description } = JSON.parse(
    option.body
  );

  var obj = newObj({
    id: arr.length,
    profileId: profileId,
    driverAttributeId: driverAttributeId,
    value: value,
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

Mock.mock(/\/driverInfo\/delete/, "post", function(option) {
  const res = /\/driverInfo\/delete\/(\d+)/.exec(option.url);
  console.log("remove id::", res[1]);
  arr.splice(res[1], 1);
  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});
