import Mock from "mockjs";

//mock模拟后台返回数据
Mock.mock("user_api/auth/token/generate", "post", option => {
  let { name: userName } = JSON.parse(option.body);
  if (userName.startsWith("s") || userName.startsWith("S")) {
    return {
      status: 200,
      ok: true,
      data: {
        token: "4344323121398",
        user: {
          isAdmin: false,
          userName
        }
      }
    };
  } else if (userName.startsWith("t") || userName.startsWith("T")) {
    return {
      status: 200,
      ok: true,
      data: {
        token: "4344323121398",
        user: {
          isAdmin: true,
          userName
        }
      }
    };
  } else {
    return {
      status: 404,
      ok: false,
      data: {
        msg: "fail",
        code: 0,
        data: {}
      }
    };
  }
});

//mock模拟后台返回数据
Mock.mock(new RegExp("user_api/auth/token/check"), "post", option => {
  console.log(option);
  return {
    message: "success",
    code: 0,
    ok: true,
    data: {
      //if username存在 token +refresh token 
    }
  };
});

//mock模拟后台返回数据
Mock.mock(new RegExp("user_api/auth/token/cancel"), "get", option => {
  return {
    message: "success",
    code: 0,
    ok: true,
    data: {
      //  返回user
    }
  };
});
