<template>
  <div>
      <form action="" @submit.prevent="handleAdd">
            <input type="text" name="" class="todoInput" v-model="newItem.content" placeholder="Enter what You need to do "/>
            <button type="submit" class="submitBtn">add</button>
      </form>
    
  </div>
</template>

<script>
export default {
    name:'todo-enter',
    data() {
        return {
            newItem:{
                content:'',
                finish:false
            }
        }
    },
    methods: {
        handleAdd:function(){
            if(this.newItem.content.trim()==='') return
            this.$emit('add',this.newItem)
            this.newItem.content=''
        }
    },
}

</script>

<style scoped>
.todoInput{
    width:50%; 
    font-size: larger;
    padding: 10px;
    text-align: center;
}
.submitBtn{
    font-size: larger;
    padding: 10px;
    color: white;
    background-color: #2cc28a;
    border: none
}
</style>