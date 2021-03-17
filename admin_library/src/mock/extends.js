import Mock from "mockjs"; 

let arr = [];
const baseNum = 80;

//mock创建数据
export function newBookObj(...para) {
  //console.log(para)
  let newArticleObject = Mock.mock({    
    Book_name: '@cword(2, 8)',  
    Author:'@name',
    //Type_id:'@cword(2, 5)',
    Type_id: "@pick(['ATpye', 'BTpye', 'CTpye', 'DTpye', 'ETpye','FTpye'])",
    price: '@natural(2, 10)', 
    Pub_company:'@cword(2, 8)',
    PUB_DATE:'@date',
    Total_num:'@natural(2, 15)',
    Current_num:'@natural(2, 15)', 
    Buy_date:'@date',
    Brief:'@cword(2, 10)'
  });
  Object.assign(newArticleObject, para[0]);
  return newArticleObject;
}
 
//mock创建数据
export function newBookArr() {
  console.log("newing"); 
  let tempArray=[];
  for (let i = 0; i < baseNum; i++) {
    let newArticleObject = newBookObj({ Book_id: i });
    tempArray.push(newArticleObject);
  } 
  return tempArray;
}


//mock创建数据
export function newStudentObj(...para) {
  //console.log(para)
  let newStudentObject = Mock.mock({     
    Username:'@name',
    Password:'@word(2, 5)', 
    //'Sex|1': ["男", "女"],
    Sex:'@boolean',
    Tele: '@natural(2, 10)', // 自然数
    Email:'@email', 
    Lended_num:'@natural(0,5)',
    Balance:'@natural(2, 100)', 
    Create_date:'@date', 
    Penalty_record: '@integer(0,3)',
    isActive:'@integer(0,2)',
  });
  Object.assign(newStudentObject, para[0]);
  //console.log(newStudentObject)
  return newStudentObject;
}
 
//mock创建数据
export function newStudentArr() {
  console.log("newing"); 
  let tempArray=[];
  for (let i = 0; i < baseNum; i++) {
    let newArticleObject = newStudentObj({ User_id: i });
    tempArray.push(newArticleObject);
  } 
  return tempArray;
}

//mock创建数据
export function newRecordObj(...para) {
  //console.log(para)
  let newObject = Mock.mock({     
    Book_name: '@cword(2, 8)', 
    Author:'@name',
    Penalty:'@natural(2, 100)', 
    Borrow_date:'@date', 
    Exp_return_date:'@date', 
    Act_return_date:'@date'
  });
  Object.assign(newObject, para[0]);
  //console.log(newObject)
  return newObject;
}
 
//mock创建数据
export function newRecordArr() {
  console.log("newing"); 
  let tempArray=[];
  for (let i = 0; i < baseNum; i++) {
    let newArticleObject = newRecordObj({ Record_id: i,Book_id: i+200 ,User_id: i+1 });
    tempArray.push(newArticleObject);
  } 
  return tempArray;
}


//mock创建数据
export function newAdminObj(...para) {
  //console.log(para)
  let newObject = Mock.mock({   
    Admin_name:'@name', 
    Admin_password:'@cword(2, 10)'
  });
  Object.assign(newObject, para[0]); 
  return newObject;
}

//mock创建数据
export function newAdminArr() {
  console.log("newing"); 
  let tempArray=[];
  for (let i = 0; i < baseNum; i++) {
    let newArticleObject = newAdminObj({ Admin_id: i });
    tempArray.push(newArticleObject);
  } 
  return tempArray;
}

//mock创建数据
export function newBookTypeObj(...para) {
  //console.log(para)
  let newObject = Mock.mock({   
    Type_name:'@cword(2, 7)',  
  });
  Object.assign(newObject, para[0]); 
  return newObject;
}
 
//mock创建数据
export function newBookTypeArr() {
  console.log("newing"); 
  let tempArray=[];
  for (let i = 0; i < 5; i++) {
    let newArticleObject = newBookTypeObj({ Type_id: i });
    tempArray.push(newArticleObject);
  } 
  return tempArray;
}
 