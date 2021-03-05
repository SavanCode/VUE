// 导入 模拟假数据的包
import Mock from "mockjs";
import { Random } from "mockjs";
import data from "base"

var arr=[];
const baseNum=80

//这里判断生成的mock数据对不对 
//看网页中的模板 或者输出的name 属性 
//是不是["host", "port", "password", "username"];中的一个
//如果输出的是人名就是有问题的 或者说别的函数没有执行

//1.这里的引入是引入不进来正确的data
//console.log("date",data)

//2.这样生成的数据不能使用mock自定义函数
//生成出来不对，但是base里我也一样生成 这样newwarr是可以直接生成正确函数的
arr=newArr()
console.log("extends中生成的arr",newArr())

//由于是export了newArr 所以在Api里面直接call newArr也是可以的 


//然后 我看了官方的export解释 我怀疑是不是本身因为function的export 导致了在当前模块不可用 
//所以我又在文件中创建了下面的
//发现也不对啊~~~~ /(ㄒoㄒ)/~~
console.log("extends中arr1生成的arr",newArr1())

function newObj1(...para) {
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
  if(para){
    Object.assign(newArticleObject, para[0]);
  } 
  return newArticleObject;
}

 function newArr1() {
   let arr=[]
  console.log("newing"); 
  for (let i = 0; i < baseNum; i++) {
    let newArticleObject = newObj1({ id: i });
    arr.push(newArticleObject);
  }  
  return arr;
}


function getter(){ 
  //console.log(arr)
  return arr
}

 function update(index,obj){ 
    Object.assign(arr[index], obj);
}
 function del(index){
  arr= arr.filter(item=>item.id!=index)
}
 function add(obj){
  arr.push(obj)
}

//创建一个带有数据对象，参数为特定的数据
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
  if(para){
    Object.assign(newArticleObject, para[0]);
  } 
  return newArticleObject;
}

//创建数据array
 function newArr() {
   let arr=[]
  console.log("newing"); 
  for (let i = 0; i < baseNum; i++) {
    let newArticleObject = newObj({ id: i });
    console.log(newArticleObject)
    arr.push(newArticleObject);
  }  
  return arr;
}

function filter(array, ...info) {
  console.log(array, info);
}

//下面为Mockjs的自定义数据产生
Random.extend({
  serviceName: function() {
    const arr = ["菠萝", "小菠萝", "大菠萝", "萝卜", "萝菠"];
    return this.pick(arr);
  }
});

Random.extend({
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
  }
});

//driverId
Random.extend({
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
  }
});
//displayName
Random.extend({
  displayName: function() {
    const arr = ["主机", "用户名", "端口", "密码", "SDEGYS"];
    return this.pick(arr);
  }
});
//Driver Attribute 模板
Random.extend({
  name: function() {
    const arr = ["host", "port", "password", "username"];
    return this.pick(arr);
  }
});

//groupId 模板
Random.extend({
  groupId: function() {
    const arr = ["group1", "group2", "group3", "group4", "group5"];
    return this.pick(arr);
  }
});

//deviceId 模板
Random.extend({
  deviceId: function() {
    const arr = ["device1", "device2", "device3", "device4", "device5"];
    return this.pick(arr);
  }
});

//pointId
Random.extend({
  pointId: function() {
    const arr = ["point1", "point2", "point3", "point4", "point5"];
    return this.pick(arr);
  }
});

//pointAttributeId
Random.extend({
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

export { getter, update, del,add,newObj,newArr,filter };
