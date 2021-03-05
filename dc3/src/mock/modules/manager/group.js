import Mock from "mockjs";
import "../../extends";
import { newArr, newObj } from "../../extends";
import moment from "moment";

let arr = [];

Mock.mock("manager_api/manager/group/list", "post", function(option) {
  let total = JSON.parse(option.body).page.size;
  let { name } = JSON.parse(option.body);

  if (arr.length===0) { 
    arr = newArr(total);
  }

  if (name) {
    arr = arr.filter(item => Object.is(item.name,name)); 
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

Mock.mock("manager_api/manager/group/update", "post", function(option) {
  //console.log(JSON.parse(option.body).description);
  let { name, description, $index: index } = JSON.parse(option.body);

  Object.assign(arr[index], {
    name,
    description,
    updateTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS")
  });

  return {
    status: 200,
    message: "update列表成功！",
    ok: true
  };
});

Mock.mock("manager_api/manager/group/add", "post", function(option) {
  let { name, description } = JSON.parse(option.body);

  var obj = newObj({
    id: arr.length,
    name: name,
    description: description,
    updateTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS"),
    createTime: moment().format("yyyy-MM-dd HH:mm:ss.SSS")
  });

  arr.push(obj);
  return {
    status: 200,
    message: "add列表成功！",
    ok: true
  };
});

Mock.mock(/\/group\/delete/, "post", function(option) {
  const res = /\/group\/delete\/(\d+)/.exec(option.url);
  console.log("remove id::", res[1]);
  arr.splice(res[1], 1);
  return {
    status: 200,
    message: "删除group成功！",
    ok: true
  };
});
