import Mock from 'mockjs' 
import "./extends";
import { newBookArr as newArr, newBookObj as newObj } from "./extends";
import moment from 'moment'

let arr = []
 
Mock.mock('book_api/book/bookList/list', 'post', option =>{
  let total = JSON.parse(option.body).page.size;
  let { Type_id } = JSON.parse(option.body);

  if (arr.length===0) { 
    arr = newArr(total);
  }

  if (Type_id) {
    arr = arr.filter(item => Object.is(item.Type_id,Type_id));
  }

    return {
      status: 200,
      ok:true,
      message: '获取商品列表成功！',
      data:{
        total:20,
        records:arr.slice(0,total)
      }
    }
  })

  Mock.mock("book_api/book/bookList/add", "post", function(option) {
    let { $Type_id:Type_id,Book_name, Author, price, Pub_company,PUB_DATE,Total_num,Current_num,Brief } = JSON.parse(
      option.body
    );
  
    var obj = newObj({
      Book_id:arr.length,Type_id,Book_name, Author, price, Pub_company,PUB_DATE,Total_num,Current_num,Brief,
      Buy_date: moment().format("yyyy-MM-dd HH:mm:ss.SSS")
    });
  
    arr.push(obj);
    return {
      status: 200,
      message: "获取列表成功！",
      ok: true
    };
  });


  
Mock.mock("book_api/book/bookList/update", "post", function(option) {
  //console.log(JSON.parse(option.body));
  let { $Type_id:Type_id,Book_id,Book_name, Author, price, Pub_company,PUB_DATE,Total_num,Current_num,Brief
  } = JSON.parse(option.body);
  //console.log(Book_id) 
  //console.log(typeof Book_id);
  Object.assign(arr[Book_id], {
    Type_id,Book_name, Author, price, Pub_company,PUB_DATE,Total_num,Current_num,Brief
  });

  return {
    status: 200,
    message: "获取列表成功！",
    ok: true
  };
});

  Mock.mock(/\/bookList\/delete/, "post", function(option) {
    const res = /\/bookList\/delete\/(\d+)/.exec(option.url);
    console.log("remove id::", res[1]);
    arr.splice(res[1], 1);
    return {
      status: 200,
      message: "获取列表成功！",
      ok: true,
      data:{
        arr
      }
    };
  });