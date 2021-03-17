import Mock from "mockjs";

//mock模拟后台返回数据
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

//mock模拟后台返回数据
Mock.mock("dictionary_api/dictionary/sex", "get", {
  status: 200,
  message: "获取sex列表成功！",
  ok: true,
  data: [
    { label: "男", value: "true" },
    { label: "女", value: "false" }
  ]
});

//mock模拟后台返回数据
Mock.mock("dictionary_api/dictionary/isActive", "get", {
  status: 200,
  message: "获取isActive列表成功！",
  ok: true,
  data: [
    { label: "在线", value: "0" }, //这里不要用数字 会发生点击迟缓
    { label: "挂失", value: "1" },
    { label: "注销", value: "2" }
  ]
});
