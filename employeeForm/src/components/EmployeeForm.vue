<!-- 这里有一个clear msg的功能 -->
<template>
  <div id="employee-form">
        <p v-if="error && submitting" class="error-message">
            !Please fill out all required fields
        </p>
         <p v-if="success" class="success-message"> Employee successfully added</p>
      <form @submit.prevent="handleSubmit"> 
            <label>Employee name</label>
            <input type="text" placeholder="please enter a new name" v-model="employee.name" ref="start" /> 
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
        submitting:false,
        error:false,
        success:false,
        //这里可以后面再包装
        employee: {
          name: '',
          email: '',
        },
      }
    },  
    computed: {
        invalidName() {
            return this.employee.name === ''
        },  
        invalidEmail() {
            return this.employee.email === ''
        },
    },
    methods:{
        handleSubmit(){ 
            //submitting
            this.submitting=true;
            this.clearStatus()
            if(this.invalidName || this.invalidEmail){
                console.log("invaild Name Or invaild Email")
                this.error=true;
                return
            }

            this.$emit('add',this.employee)
            this.success = true
            this.$refs.start.focus()

            //after submitting
            this.employee = {
                name: "",
                email: ""
            };
            this.error = false
            this.success = true
            this.submitting = false
        },
        clearStatus() {
            console.log('clear status')
            this.error = false
            this.success = false
        }
    }
}

</script>
<style scoped>
form {
    margin-bottom: 2rem;
  }
.error-message{
    font-size: x-large;
    text-align: center;
    color: coral;
  }
  .success-message{
    font-size: x-large;
    text-align: center;
    color: #29de7d;
  }
</style>