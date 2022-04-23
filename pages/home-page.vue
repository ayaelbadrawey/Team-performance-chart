<template>
  <div class="c-dashboard">
    <div class="navigation">
      <nuxt-link style="margin-right: 10px" to="/home-page">Home</nuxt-link>
      <nuxt-link to="/performance-page">Team performance chart page</nuxt-link>
    </div>
    <div class="c-filters__container">
      <div class="search-form">
        <label style="font-weight: bold">Search:</label>
        <input class="search-input" type="text" />
      </div>
    </div>

    <Employees :employees="employeesList"></Employees>

    <div class="c-dashboard__footer">
      <button class="c-button">Load More</button>
    </div>
  </div>
</template>

<script>
import Employees from "../components/employees-list";
export default {
  name: "HomePage",
  components: { Employees },
  data() {
    return {};
  },
  async asyncData({ $axios }) {
    const employeesList = await $axios.$get(
      "https://fe-task.getsandbox.com/employees"
    );
    return { employeesList: employeesList.employees };
  },
};
</script>
