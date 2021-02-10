<template>
    <div id="employee-table">
    <table>
      <thead>
        <tr>
          <th>Employee name</th>
          <th>Employee email</th>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(employee,index) in employees" :key="employee.id">
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
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
    }
}

</script>
<style scoped>
</style>