import Mock from "mockjs";
import "./extends";
import { newBookTypeArr as newArr, newBookTypeObj as newObj } from "./extends";

let arr = [];
//mock模拟后台返回数据
Mock.mock("book_api/book/bookType/list", "post", option => {
  let { size: total, current } = JSON.parse(option.body).page;
  let { Type_name } = JSON.parse(option.body);

  if (arr.length === 0 || current) {
    arr = newArr(total);
  }

  if (Type_name) {
    arr = arr.filter(item => item.Type_name.includes(Type_name));
  }

  return {
    status: 200,
    ok: true,
    message: "获取商品列表成功！",
    data: {
      total: arr.length,
      records: arr.slice(0, total)
    }
  };
});

//mock模拟后台返回数据
Mock.mock("book_api/book/bookType/add", "post", function(option) {
  let { Type_name } = JSON.parse(option.body);

  var obj = newObj({ Type_id: arr.length, Type_name });

  arr.push(obj);
  return {
    status: 200,
    message: "获取列表成功！",
    ok: true,
    arr
  };
});

//mock模拟后台返回数据
Mock.mock("book_api/book/bookType/update", "post", function(option) {
  console.log(JSON.parse(option.body));
  let { Type_id, Type_name } = JSON.parse(option.body);
  //console.log(Book_id)
  //console.log(typeof Book_id);
  Object.assign(arr[Type_id], { Type_name });

  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});

//mock模拟后台返回数据
Mock.mock(/\/bookType\/delete/, "post", function(option) {
  const res = /\/bookType\/delete\/(\d+)/.exec(option.url);
  console.log("remove id::", res[1]);
  arr.splice(res[1], 1);
  return {
    status: 200,
    message: "获取列表成功！",
    ok: true,
    data: {
      arr
    }
  };
});
