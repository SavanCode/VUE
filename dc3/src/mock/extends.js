// 导入 模拟假数据的包
import { Random } from 'mockjs'

// 创建自定义 Mock 函数
Random.extend({ 
  fruit: function() {
    const arr = ['榴莲', '波罗蜜', '椰子', '苹果', '菠萝', '释迦']
    return this.pick(arr)
  }
})

Random.extend({ 
  serviceName: function() {
    const arr = ['菠萝', '小菠萝', '大菠萝', '萝卜', '萝菠']
    return this.pick(arr)
  }
})

Random.extend({ 
  type: function() {
    const arr = [
      {
          label: '字符串(string)',
          value: 'string'
      }, {
          label: '布尔量(boolean)',
          value: 'boolean'
      }, {
          label: '字节(byte)',
          value: 'byte'
      }, {
          label: '短整数(short)',
          value: 'short'
      }, {
          label: '整数(int)',
          value: 'int'
      }, {
          label: '长整数(long)',
          value: 'long'
      }, {
          label: '浮点数(float)',
          value: 'float'
      }, {
          label: '双精度浮点数(double)',
          value: 'double'
      }
  ]
    return this.pick(arr).label
  }
})

//driverId
Random.extend({ 
  driverId: function() {
    const arr = ['ADriver', 'BDriver', 'CDriver', 'DDriver', 'EDriver','FDriver']
    return this.pick(arr)
  }
})
//displayName
Random.extend({ 
  displayName: function() {
    const arr = ['主机', '用户名', '端口', '密码', 'SDEGYS']
    return this.pick(arr)
  }
})
//Driver Attribute
Random.extend({ 
  name: function() {
    const arr = ['host', 'port', 'password', 'username']
    return this.pick(arr)
  }
})
 