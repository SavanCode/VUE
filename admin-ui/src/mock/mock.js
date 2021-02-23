import Mock from 'mockjs'

Mock.mock('http://lcoalhost:8080/user',{
    'name':'@name',//随机生成名字
    'email':'@email',//随机生成
    'age|1-10':5
})

Mock.mock('http://lcoalhost:8080/menu',{
    'id':'@increment',//随机生成名字
    'name':'@menu',//随机生成
    'order|10-20':12
})
