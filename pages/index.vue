<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <div class="d-flex justify-content-center">
        <div class="search-form">
          <div class="d-flex flex-row align-items-center">
            <input
              class="form-control form-control-sm mx-2"
              type="text"
              placeholder="Search"
              v-model="filter"
            />
            <button class="btn btn-primary btn-sm" @click="filter = ''">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>

    <Employees :employees="employeesList" :filter="filter"></Employees>

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
    return {
      filter: "",
    };
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    for (const param of params) {
      this.filter = param[1];
    } // this.filter = this.$route.params.filter;
  },
  async asyncData({ $axios }) {
    const employeesList = await $axios.$get(
      "https://fe-task.getsandbox.com/employees"
    );
    return { employeesList: employeesList.employees };
  },
  methods: {},
};
</script>
