<template>
  <div id="employee-form">
      <form @submit.prevent="handleSubmit"> 
            <label>Employee name</label>
            <input type="text" placeholder="please enter a new name" v-model="employee.name" /> 
            <label>Employee Email</label>
            <input type="email" placeholder="please enter a vaild email" v-model="employee.email" />
            <button type="submit">Add Employee</button>
      </form>
  </div>
</template>

<script>  
export default {
    name:'employee-form',
    data() {
      return {
          //这里可以后面再包装
        employee: {
          name: '',
          email: '',
        },
      }
    },
    methods:{
        handleSubmit(){ 
            console.log("submit")
            this.$emit('add',this.employee)
            this.employee = {
                name: "",
                email: ""
            };
        }
    }
}

</script>
<style scoped>
form {
    margin-bottom: 2rem;
  }
</style>