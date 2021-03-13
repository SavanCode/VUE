import Mock from "mockjs"; 

let arr = [];
const baseNum = 80;

function newBookObj(...para) {
  //console.log(para)
  let newArticleObject = Mock.mock({    
    Book_name: '@cword(2, 8)', // 随机生成中文字符串
    Author:'@name',
    //Type_id:'@cword(2, 5)',
    Type_id: "@pick(['ATpye', 'BTpye', 'CTpye', 'DTpye', 'ETpye','FTpye'])", //随机选择一个字母 
    price: '@natural(2, 10)', // 自然数
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

//创建数据array
function newBookArr() {
  console.log("newing"); 
  let tempArray=[];
  for (let i = 0; i < baseNum; i++) {
    let newArticleObject = newBookObj({ Book_id: i });
    tempArray.push(newArticleObject);
  } 
  return tempArray;
}


function newStudentObj(...para) {
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
  console.log(newStudentObject)
  return newStudentObject;
}

//创建数据array
function newStudentArr() {
  console.log("newing"); 
  let tempArray=[];
  for (let i = 0; i < baseNum; i++) {
    let newArticleObject = newStudentObj({ User_id: i+1 });
    tempArray.push(newArticleObject);
  } 
  return tempArray;
}
export {newBookArr, newBookObj,newStudentObj,newStudentArr}