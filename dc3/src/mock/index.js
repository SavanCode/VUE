import Mock from "mockjs";
import * as login from "./modules/user/login";
import * as salt from "./modules/user/salt";
import * as generateToken from "./modules/user/generateToken";
import * as cancel from "./modules/user/cancel";
import * as check from "./modules/user/check";

Mock.setup({
  timeout: 100, // 设置延迟响应，模拟向后端请求数据
});

// 1. 开启/关闭[业务模块]拦截, 通过调用fnCreate方法[isOpen参数]设置.
// 2. 开启/关闭[业务模块中某个请求]拦截, 通过函数返回对象中的[isOpen属性]设置.
fnCreate(login, true);
fnCreate(salt, true);
fnCreate(generateToken, true);
fnCreate(check, true);
fnCreate(cancel, true);

/**
 * 创建mock模拟数据
 * @param {*} mod
 * @param {*} isOpen
 */
function fnCreate(mod, isOpen = true) {
  if (isOpen) {
    for (var key in mod) {
      (res => {
        if (res.isOpen !== false) {
          Mock.mock(new RegExp(res.url), res.type, opts => {
            opts["data"] = opts.body ? JSON.parse(opts.body) : null;
            delete opts.body;
            console.log("\n");
            //console.log("%cmock拦截, 请求: ", "color:blue", opts);
            //console.log("%cmock拦截, 响应: ", "color:blue", res.data);
            return res.data;
          });
        }
      })(mod[key]() || {});
    }
  }
}
