import Mock from "mockjs";
import { Random } from "mockjs";

let arr = [];
const baseNum = 80;

function newObj(...para) {
  //console.log(para)
  let newArticleObject = Mock.mock({
    "rawValue|1-100.1-10": 1,
    "calculateValue|1-100.1-10": 1,
    serviceName: "@serviceName()",
    status: "15161",
    driverAttributeId: "@displayName()",
    deviceId: "@deviceId()",
    pointId: "@pointId()",
    profileId: "@name()",
    content: Random.csentence(5, 10),
    pointAttributeId: "@pointAttributeId()",
    name: "@name()",
    host: "127.1.2.3",
    port: Random.natural(0, 10000),
    groupId: "@groupId()",
    "confirm|1": [false, true], //['未确定', '已确定'],
    "rw|1": [0, 1, 2], //['只读', '只写','读写'],
    "accrue|1": [false, true], //['累计', '不累计'],
    driverId: "@driverId()",
    "multi|1": [false, true], //["单点数据", "结构数据"],
    //"status|1":['在线','离线','维护','故障'],
    "interval|1-100": 100,
    "base|1-100": 100,
    "multiple|1-100": 100,
    format: "%.3f",
    minimum: -999999,
    maximum: 999999,
    unit: "default",
    displayName: "@displayName()",
    "share|1": [false, true], //['共有', '私有'],
    type: "@type()",
    //type:STATUS,LIMIT,ERROR deviceEvents
    value: "15161",
    description: Random.csentence(5, 10),
    confirmTime: Random.datetime("yyyy-MM-dd HH:mm:ss.SSS"),
    originTime: Random.datetime("yyyy-MM-dd HH:mm:ss.SSS"),
    updateTime: Random.datetime("yyyy-MM-dd HH:mm:ss.SSS"),
    createTime: Random.datetime("yyyy-MM-dd HH:mm:ss.SSS")
  });
  Object.assign(newArticleObject, para[0]);
  return newArticleObject;
}

//创建数据array
function newArr() {
  console.log("newing"); 
  let tempArray=[];
  for (let i = 0; i < baseNum; i++) {
    let newArticleObject = newObj({ id: i });
    tempArray.push(newArticleObject);
  } 
  return tempArray;
}

function filter(array, ...info) {
  console.log(array, info);
}

//下面为Mockjs的自定义数据产生
Random.extend({
  serviceName: function() {
    const arr = ["菠萝", "小菠萝", "大菠萝", "萝卜", "萝菠"];
    return this.pick(arr);
  },
  type: function() {
    const arr = [
      {
        label: "字符串(string)",
        value: "string"
      },
      {
        label: "布尔量(boolean)",
        value: "boolean"
      },
      {
        label: "字节(byte)",
        value: "byte"
      },
      {
        label: "短整数(short)",
        value: "short"
      },
      {
        label: "整数(int)",
        value: "int"
      },
      {
        label: "长整数(long)",
        value: "long"
      },
      {
        label: "浮点数(float)",
        value: "float"
      },
      {
        label: "双精度浮点数(double)",
        value: "double"
      }
    ];
    return this.pick(arr).label;
  },
  driverId: function() {
    const arr = [
      "ADriver",
      "BDriver",
      "CDriver",
      "DDriver",
      "EDriver",
      "FDriver"
    ];
    return this.pick(arr);
  },
  displayName: function() {
    const arr = ["主机", "用户名", "端口", "密码", "SDEGYS"];
    return this.pick(arr);
  },
  name: function() {
    const arr = ["host", "port", "password", "username"];
    return this.pick(arr);
  },
  groupId: function() {
    const arr = ["group1", "group2", "group3", "group4", "group5"];
    return this.pick(arr);
  },
  deviceId: function() {
    const arr = ["device1", "device2", "device3", "device4", "device5"];
    return this.pick(arr);
  },
  pointId: function() {
    const arr = ["point1", "point2", "point3", "point4", "point5"];
    return this.pick(arr);
  },
  pointAttributeId: function() {
    const arr = [
      "pointAttribute1",
      "pointAttribute2",
      "pointAttribute3",
      "pointAttribute4",
      "pointAttribute5"
    ];
    return this.pick(arr);
  }
});


export {newObj, newArr,filter};
 