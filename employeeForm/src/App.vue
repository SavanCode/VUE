<template>
  <div id="app" class="small-container">
    <img src="./assets/logo.png">

   <employee-form @add="addEmployee" />
    <search-bar @search="setKeyword"></search-bar>
    <h1>Employees Table</h1>
    <employee-table :employees="filteredResult" @edit="editEmployee" @delete="deleteEmployee"/>
    <!-- <router-view/> -->
    <!-- <button @click="addEmployee">add</button> -->
  </div>
</template>

<script>
// @用来引用src文件夹
import EmployeeTable from '@/components/EmployeeTable.vue'
import EmployeeForm from '@/components/EmployeeForm.vue'
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'app',
  components:{
    EmployeeTable,
    EmployeeForm,
    SearchBar
  },
  //这里的app也只是一个component哦 所以还是用函数， 这里的数据写死 传给form
  data(){
    return{  
      employees: [
              // { 默认数据
              //   id: 1,
              //   name: 'Richard Hendricks',
              //   email: 'richard@piedpiper.com',
              // },
              // {
              //   id: 2,
              //   name: 'Bertram Gilfoyle',
              //   email: 'gilfoyle@piedpiper.com',
              // },
              // {
              //   id: 3,
              //   name: 'Dinesh Chugtai',
              //   email: 'dinesh@piedpiper.com',
              // },
            ],
      keyword:''
      }
  },
  created(){
     console.log('now: ',this.employees)
     this.getEmployees()
  }
  , 
  computed:{
    filteredResult: function() { 
      //console.log('now keyword',this.keyword)
      if(this.keyword===''){
        return this.employees
      }else{
        return this.employees.filter(employee => {  
          return  employee.name.toLowerCase().includes(this.keyword.toLowerCase())==true });
      }
    }
  }
  ,
  methods: {
    // addEmployee: function(employee) {
    //   console.log('addEmployee')
    //   const lastId = this.employees.length > 0 ? this.employees[this.employees.length - 1].id : 0;
    //   const id = lastId + 1;
    //   const newEmployee = { ...employee, id };
    //   this.employees = [...this.employees, employee]
    //   console.log('adding',newEmployee)
    //   console.log('done, now: ',this.employees)
    // },
    // deleteEmployee(id){
    //   console.log("deleting")
    //   this.employees = this.employees.filter(
    //     item => item.id !== id
    //   )
    // },
    // editEmployee(id, updatedEmployee) {
    //   this.employees = this.employees.map(employee =>
    //     employee.id === id ? updatedEmployee : employee
    //   )
    // },
    async getEmployees() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log("getting data : "+ data)
        this.employees = data
      } catch (error) {
        console.error(error)
      }
    },
    async addEmployee(employee) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          body: JSON.stringify(employee),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        const data = await response.json()
        this.employees = [...this.employees, data]
      } catch (error) {
        console.error(error)
      }
    },
    async editEmployee(id, updatedEmployee) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'PUT',
          body: JSON.stringify(updatedEmployee),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        const data = await response.json()
        console.log(data)
        this.employees = this.employees.map(employee => (employee.id === id ? data : employee))
      } catch (error) {
        console.error(error)
      }
    },
    async deleteEmployee(id) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: "DELETE"
        });
        this.employees = this.employees.filter(employee => employee.id !== id);
      } catch (error) {
        console.error(error);
      }
    },
    setKeyword:function(keyword){
      console.log("searching",keyword)
      this.keyword=keyword
    }
  }
}
</script>

<style>
button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 680px;
  } 
</style>
