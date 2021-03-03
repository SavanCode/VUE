import Mock from "mockjs";
import "../../extends";
import { newArr, filter } from "../../extends";
import moment from "moment";

var arr = [];

Mock.mock("data_api/data/deviceEvent/list", "post", function(option) {
  let { size: total, startTime, endTime } = JSON.parse(option.body).page;

  let { deviceId, pointId } = JSON.parse(option.body);

  if (total !== arr.length) {
    arr = newArr(total);
  }

  //由于这里的type又重新定义 所以重新替换一下数据 'STATUS', 'LIMIT', 'ERROR'
  arr.filter(item => {
    if(item.id<5){
        item.type= 'STATUS'
    }else if(item.id<15 && item.id>=10){
      item.type= 'LIMIT'
    }else if(item.id>=15){
      item.type= 'ERROR'
    } 
    })

  if (deviceId) {
    arr = arr.filter(item => item.deviceId === deviceId);
  }
  if (pointId) {
    arr = arr.filter(item => item.pointId === pointId);
  }
  if (startTime && endTime) {
    
    arr = arr.filter(item =>
      moment(
        moment(Date.parse(item.originTime)).format("YYYY-MM-DD")
      ).isBetween(
        moment(startTime).format("YYYY-MM-DD"),
        moment(endTime).format("YYYY-MM-DD")
      )
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
