import Mock from "mockjs";

Mock.mock("dictionary_api/dictionary/booktype", "get", {
  status: 200,
  message: "获取列表成功！",
  ok: true, 
  data: [
    { label: "ATpye", value: "ATpye" },
    { label: "BTpye", value: "BTpye" },
    { label: "CTpye", value: "CTpye" },
    { label: "DTpye", value: "DTpye" },
    { label: "ETpye", value: "ETpye" },
    { label: "FTpye", value: "FTpye" }
  ]
});

Mock.mock("dictionary_api/dictionary/sex", "get", {
  status: 200,
  message: "获取sex列表成功！",
  ok: true,
  data: [
    { label: "男", value: "true" },
    { label: "女", value: "false" },
  ]
});

Mock.mock("dictionary_api/dictionary/isActive", "get", {
  status: 200,
  message: "获取driverAttribute列表成功！",
  ok: true,
  data: [
    { label: "在线", value: 0 },
    { label: "离线", value: 1 },
    { label: "注销", value: 2 }
  ]
});

Mock.mock("dictionary_api/manager/dictionary/group", "get", {
  status: 200,
  message: "获取group列表成功！",
  ok: true,
  data: [
    { label: "group1", value: "group1" },
    { label: "group2", value: "group2" },
    { label: "group3", value: "group3" },
    { label: "group4", value: "group4" },
    { label: "group5", value: "group5" }
  ]
});

Mock.mock("dictionary_api/manager/dictionary/pointAttribute", "get", {
  status: 200,
  message: "获取pointAttribute列表成功！",
  ok: true,
  data: [
    { label: "pointAttribute1", value: "pointAttribute1" },
    { label: "pointAttribute2", value: "pointAttribute2" },
    { label: "pointAttribute3", value: "pointAttribute3" },
    { label: "pointAttribute4", value: "pointAttribute4" },
    { label: "pointAttribute5", value: "pointAttributezz5" }
  ]
});


//'manager_api/manager/dictionary/device/'
Mock.mock(/\/dictionary\/device/, "get", option => {
  return {
    status: 200,
    message: "获取device列表成功！",
    ok: true,
    data: [
      { label: "device1", value: "device1" },
      { label: "device2", value: "device2" },
      { label: "device3", value: "device3" },
      { label: "device4", value: "device4" },
      { label: "device5", value: "device5" }
    ]
  };
});
//'manager_api/manager/dictionary/point/'
Mock.mock(/\/dictionary\/point/, "get", option => {
  return {
    status: 200,
    message: "获取point列表成功！",
    ok: true,
    data: [
      { label: "point1", value: "point1" },
      { label: "point2", value: "point2" },
      { label: "point3", value: "point3" },
      { label: "point4", value: "point4" },
      { label: "point5", value: "point5" }
    ]
  };
});
