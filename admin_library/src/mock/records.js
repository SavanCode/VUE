import Mock from "mockjs";
import "./extends";
import { newRecordArr as newArr, newRecordObj as newObj } from "./extends";
import moment from "moment";

let arr = [];

//mock模拟后台返回数据
Mock.mock("records_api/records/list", "post", option => {
  let { size: total, current } = JSON.parse(option.body).page;
  let { Book_id, Book_name, User_id } = JSON.parse(option.body);

  if (arr.length === 0 || current) {
    arr = newArr(total);
  }

  if (Book_id) {
    arr = arr.filter(
      item =>
        (item.Book_id + "").includes(Book_id) ||
        Object.is(item.Book_id, Book_id)
    );
  }
  if (Book_name) {
    arr = arr.filter(item => item.Book_name.includes(Book_name));
  }
  if (User_id) {
    arr = arr.filter(
      item =>
        (item.User_id + "").includes(User_id) ||
        Object.is(item.User_id, User_id)
    );
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
Mock.mock("records_api/records/add", "post", function(option) {
  let today = moment().format("yyyy-MM-DD");
  let { Book_id, Book_name, Author, User_id, Penalty } = JSON.parse(
    option.body
  );

  var obj = newObj({
    Book_id,
    Book_name,
    Author,
    User_id,
    Penalty,
    Borrow_date: today,
    Exp_return_date: moment(today)
      .add(30, "day")
      .format("YYYY-MM-DD"),
    Act_return_date: ""
  });

  //console.log(today,obj)
  arr.push(obj);
  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});

//mock模拟后台返回数据
Mock.mock("records_api/records/update", "post", function(option) {
  //console.log(JSON.parse(option.body));
  let { Record_id, Book_name, Author, User_id, Penalty } = JSON.parse(
    option.body
  );

  Object.assign(arr[Record_id], {
    Book_name,
    Author,
    User_id,
    Penalty
  });

  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});

//mock模拟后台返回数据
Mock.mock(/\/records\/delete/, "post", function(option) {
  const res = /\/records\/delete\/(\d+)/.exec(option.url);
  //console.log("remove id::", res[1]);
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
