<template>
    <div id="employee-table">
    <p v-if="employees.length < 1" class="empty-table">No employees</p>
    <table v-else>
      <thead>
        <tr>
          <th>Employee name</th>
          <th>Employee email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(employee,index) in employees" :key="employee.id">
          <td v-if="editing === employee.id">
            <input type="text" v-model="employee.name" />
          </td>
          <td v-else>{{ employee.name }}</td>
          <td v-if="editing === employee.id">
            <input type="text" v-model="employee.email" />
          </td>
          <td v-else>{{ employee.email }}</td>
          <td v-if="editing === employee.id">
                <button @click="editEmployee(employee)">Save</button>
                <button class="muted-button" @click="editing = null">Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(employee.id)">Edit</button>
            <button @click="$emit('delete', employee.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name:'employee-table',
    //props是说接受上面的数据的要求，如果上面没有给，就显示这个默认数据
    props:{
        employees: {
          type: Array,
          default: [{
          id: 1,
          name: 'default name',
          email: 'defaultEmail@email.com',
        }],
          required: true //在使用组件必传值
          }
    },
    data(){
      return{
        editing:null
      }
    },
    methods: {
      editMode(id) {
        this.editing = id
      },
      editEmployee(employee) {
        if (employee.name === '' || employee.email === '') return
        this.$emit('edit', employee.id, employee)
        this.editing = null
      }
    }
}

</script>
<style scoped>
</style>