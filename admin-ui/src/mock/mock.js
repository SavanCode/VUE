//mock 封装之前用的
import Mock from 'mockjs'

//前面的link可以不写
Mock.mock('http://localhost:8080/login',{
    data:{
        'token':'123159753456789'
        //其他数据
    }
})

Mock.mock('http://localhost:8080/user',{
    'name':'@name',//随机生成名字
    'email':'@email',//随机生成
    'age|1-10':5
})

Mock.mock('http://localhost:8080/menu',{
    'id':'@increment',//随机生成名字
    'name':'@menu',//随机生成
    'order|10-20':12
}) 