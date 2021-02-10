<template>
  <div id="app" class="small-container">
    <img src="./assets/logo.png">

   <employee-form @add="addEmployee" />

    <h1>Employees Table</h1>
    <employee-table :employees="employees" @edit="editEmployee" @delete="deleteEmployee"/>
    <!-- <router-view/> -->
    <!-- <button @click="addEmployee">add</button> -->
  </div>
</template>

<script>
// @用来引用src文件夹
import EmployeeTable from '@/components/EmployeeTable.vue'
import EmployeeForm from '@/components/EmployeeForm.vue'

export default {
  name: 'app',
  components:{
    EmployeeTable,
    EmployeeForm
  },
  //这里的app也只是一个component哦 所以还是用函数， 这里的数据写死 传给form
  data(){
    return{  
      employees: [
              {
                id: 1,
                name: 'Richard Hendricks',
                email: 'richard@piedpiper.com',
              },
              {
                id: 2,
                name: 'Bertram Gilfoyle',
                email: 'gilfoyle@piedpiper.com',
              },
              {
                id: 3,
                name: 'Dinesh Chugtai',
                email: 'dinesh@piedpiper.com',
              },
            ]
      }
  },
  mounted() {
     console.log('now: ',this.employees)
  },
  methods: {
    addEmployee: function(employee) {
      console.log('addEmployee')
      const lastId = this.employees.length > 0 ? this.employees[this.employees.length - 1].id : 0;
      const id = lastId + 1;
      const newEmployee = { ...employee, id };
      this.employees = [...this.employees, employee]
      console.log('adding',newEmployee)
      console.log('done, now: ',this.employees)
    },
    deleteEmployee(id){
      console.log("deleting")
      this.employees = this.employees.filter(
        item => item.id !== id
      )
    },
    editEmployee(id, updatedEmployee) {
      this.employees = this.employees.map(employee =>
        employee.id === id ? updatedEmployee : employee
      )
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
