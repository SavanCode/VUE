import Mock from "mockjs";
import { newArr } from "../../extends";
import "../../extends";

let arr = [];

Mock.mock("manager_api/manager/driver/list", "post", function(option) {
  let total = JSON.parse(option.body).page.size;

  let { name, serviceName, port, host } = JSON.parse(option.body);

  if (total !== arr.length) {
    arr = newArr(total);
  } 
  
  if (name) {
    arr = arr.filter(item => item.name === name);
  }
  if (serviceName) {
    arr = arr.filter(item => item.serviceName === serviceName);
  }
  if (port) {
    arr = arr.filter(item => item.port === port);
  }
  if (host) {
    arr = arr.filter(item => item.host.includes(host));
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

Mock.mock("manager_api/manager/driver/status", "post", {
  status: 200,
  message: "获取statuses列表成功！",
  ok: true,
  data: {
    菠萝: true,
    大菠萝: true,
    萝卜: true
  }
});
