import Mock from "mockjs";
import "./extends";
import { newStudentArr as newArr, newStudentObj as newObj } from "./extends";
import moment from "moment";

let arr = [];

//mock模拟后台返回数据
Mock.mock("student_api/student/studentList/list", "post", option => {
  let { size: total, current } = JSON.parse(option.body).page;
  let { Sex, isActive, Username } = JSON.parse(option.body);

  if (arr.length === 0 || current) {
    arr = newArr(total);
  }

  if (Sex != null) {
    Sex = Object.is(Sex, "false") ? false : true;
    arr = arr.filter(item => Object.is(item.Sex, Sex));
  }
  if (isActive != null) {
    arr = arr.filter(item => Object.is(item.isActive + "", isActive));
  }
  if (Username) {
    arr = arr.filter(item => item.Username.includes(Username));
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
Mock.mock("student_api/student/studentList/add", "post", function(option) {
  let {
    Username,
    Password,
    Sex,
    Tele,
    Email,
    Lended_num,
    Balance,
    isActive,
    Penalty_record
  } = JSON.parse(option.body);

  var obj = newObj({
    User_id: arr.length,
    Username,
    Password,
    Sex,
    Tele,
    Email,
    Lended_num: 0,
    Balance,
    isActive,
    Penalty_record: [],
    Create_date: moment().format("yyyy-MM-dd HH:mm:ss")
  });

  arr.push(obj);
  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});

//mock模拟后台返回数据
Mock.mock("student_api/student/studentList/update", "post", function(option) {
  console.log(JSON.parse(option.body));
  let {
    User_id,
    Username,
    Password,
    Sex,
    Tele,
    Email,
    Balance,
    isActive
  } = JSON.parse(option.body);
  Object.assign(arr[User_id], {
    Username,
    Password,
    Sex,
    Tele,
    Email,
    Balance,
    isActive
  });

  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});

//mock模拟后台返回数据
Mock.mock(/\/studentList\/delete/, "post", function(option) {
  const res = /\/studentList\/delete\/(\d+)/.exec(option.url);
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
