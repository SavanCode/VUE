<template>
  <div id="app">
    <img src="./assets/logo.png">
     <todo-enter @add="addItem"></todo-enter>
     <filters class="filterBtns" @clearDone="clearDoneItem" @clearAll="clearAllItem"></filters>
     <item-list  :todoList="todoList" @delete="deleteItem" @changeStatus="handleFinish"></item-list> 
     
  </div>
</template>

<script>
import todoEnter from '@/components/todoEnter.vue'
import itemList from '@/components/itemList.vue'
import filters from '@/components/Filters.vue'
export default {
  name: 'App',
  components: {
     todoEnter,
     itemList,
     filters
  },
  data() {
    return {
      todoList:[
                {
                    id:1,
                    content:'this is 1 thing to do',
                    finish:false
                },
                {
                    id:2,
                    content:'this is 2 thing to do',
                    finish:false
                }
            ]
    }
  },
  mounted() {
    
    if(localStorage.getItem('todoList')) {
      try {
        this.todoList = JSON.parse(localStorage.getItem('todoList'));
      } catch(e) {
        console.log(e)
        //localStorage.removeItem('todoList');
      }
    }
  },
  methods:{
    addItem:function(newItem){
      console.log('adding')
      const lastId = this.todoList.length > 0 ? this.todoList[this.todoList.length - 1].id : 0;
      const id = lastId + 1;
      const newTodo = { ...newItem, id };
      this.todoList = [...this.todoList, newTodo]
      //console.log('adding',newTodo)
      console.log('done, now: ',this.todoList)
      let parsed = JSON.stringify(this.todoList);
      localStorage.setItem('todoList', parsed);
    },
    deleteItem:function(id){
      console.log("deleting")
      this.todoList = this.todoList.filter(
        item => item.id !== id
      )
      let parsed = JSON.stringify(this.todoList);
      localStorage.setItem('todoList', parsed);
    },
    handleFinish:function(id){
      console.log("finish")
      this.todoList.filter(
        item=>{
          if(item.id === id){item.finish=!item.finish}
        }
      )
      let parsed = JSON.stringify(this.todoList);
      localStorage.setItem('todoList', parsed);
    },
    clearDoneItem:function(){
      this.todoList=this.todoList.filter(item => item.finish!== true)
      let parsed = JSON.stringify(this.todoList);
      localStorage.setItem('todoList', parsed);
    },
    clearAllItem:function(){
      this.todoList=[]
      let parsed = JSON.stringify(this.todoList);
      localStorage.setItem('todoList', parsed);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  width: 100px;
}
.filterBtns{
  margin:20px 0
}
.filterBtns > button{
    padding: 0 20px;
    margin: 0 50px;
}
</style>
