<template>
  <div> 
      <transition-group class="todotable" tag="ul" name="list"> 
          <li v-for="todo in todoList" :key="todo.id" @click="$emit('changeStatus', todo.id)">
              <div class="list"> 
             <span :class="{finishStyle:todo.finish}">  {{todo.content}} </span> <span> <button  @click="$emit('delete', todo.id)" >X</button> </span>
            </div>
          </li>
      </transition-group>
  </div>
</template>

<script>
export default {
    name:'item-list',
    props:{
        todoList: {
          type: Array,
          default: [{
          id: 1,
          content: 'default name',
          finish: 'false',
        }],
          required: true //在使用组件必传值
          }
    },
    mounted() {
        console.log(this.todoList)
    }, 
}

</script>
<style scoped>
.todotable{
    list-style: none;
    line-height: 50px;
    height: 50px;  
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}
.list{
    display: flex;
    justify-content: space-evenly;
}
/* 列表过渡 */
.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}

/* 元素改变定位的缓动效果 */
.list-move{
    transition: all 0.3s ease;
} 
.finishStyle{
    text-decoration: line-through
}
button{
    color: #e77348;
    background-color: #2cc28a00;
    border: none;
    font-size: larger;
    padding: 5px;
}

li:hover {
	 background-color: rgba(0, 0, 0, 0.25);
     color:white
}
 
</style>