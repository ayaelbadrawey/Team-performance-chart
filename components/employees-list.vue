<template>
  <div class="c-users-list">
    <div class="c-users-list__header">
      <div>Employee</div>
      <div>Email</div>
      <div>Adress</div>
      <div>Start Date</div>
      <div>Performance Index</div>
      <div>About</div>
    </div>
    <div
      class="c-users-list__body"
      v-for="(employee, index) in employees"
      :key="index"
    >
      <div>
        <div class="c-users-list__main-info">
          <img class="c-users-list__avatar" :src="employee.profile.avatar" />
          <div>{{ employee.profile.name }}</div>
        </div>
      </div>
      <div>{{ employee.email }}</div>
      <div>{{ employee.profile.address }}</div>
      <div>{{ employee.start_date }}</div>
      <div>{{ employee.performance_index }}</div>
      <div>{{ employee.profile.about }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeesList",
  props: ["employees"],
};
</script>