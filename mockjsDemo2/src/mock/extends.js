// 导入 模拟假数据的包
import { Random } from 'mockjs'

// 创建自定义 Mock 函数
Random.extend({
  // 自定义函数名: function 函数
  fruit: function() {
    const arr = ['榴莲', '波罗蜜', '椰子', '苹果', '菠萝', '释迦']
    return this.pick(arr)
  }
})