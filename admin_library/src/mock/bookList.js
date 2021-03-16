import Mock from 'mockjs' 
import "./extends";
import { newBookArr as newArr, newBookObj as newObj } from "./extends";
import moment from 'moment'

let arr = []
 
Mock.mock('book_api/book/bookList/list', 'post', option =>{
  let {size:total,current} = JSON.parse(option.body).page;
  //console.log("ooooooooooption",option) 
  let { Type_id,Book_id,Book_name,Author } = JSON.parse(option.body);

  //搜索清空之后不会刷新 主要原因是这里的获取
  if (arr.length===0 || current) { 
    arr = newArr(total);
  }

  if (Type_id) {
    arr = arr.filter(item => Object.is(item.Type_id,Type_id));
  }
  if (Book_id) {
    arr = arr.filter(item => Object.is(item.Book_id+"",Book_id)||(item.Book_id+"").includes(Book_id));
  }
  if (Book_name) {
    arr = arr.filter(item => item.Book_name.includes(Book_name));
  }
  if (Author) {
    arr = arr.filter(item => item.Author.includes(Author));
  }

    return {
      status: 200,
      ok:true,
      message: '获取商品列表成功！',
      data:{
        total:arr.length,
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