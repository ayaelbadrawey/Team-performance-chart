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

    <Employees
      :employees="employeesList.employees"
      :filter="filter"
    ></Employees>

    <div class="c-dashboard__footer">
      <button v-if="!load && !noMore" class="c-button" @click="load = true">
        Load More
      </button>
      <button class="btn btn-text m-0" v-else-if="load && !noMore">
        <span
          class="
            spinner-border spinner-border-sm
            align-middle
            ms-2
            text-primary
          "
        ></span>
      </button>
      <span class="text-primary" v-else-if="noMore">No more data</span>
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
      load: false,
      noMore: false,
    };
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    for (const param of params) {
      this.filter = param[1];
    }
  },
  async asyncData({ $axios }) {
    const employeesList = await $axios.$get(
      "https://fe-task.getsandbox.com/employees"
    );
    return { employeesList: employeesList };
  },
  methods: {
    loadMoreEmployees() {
      if (this.load) {
        if (this.employeesList.current_page < this.employeesList.pages) {
          console.log(this.employeesList.pages);
          this.$axios
            .$get("https://fe-task.getsandbox.com/employees", {
              params: { page: this.employeesList.current_page + 1 },
            })
            .then((response) => {
              this.load = false;
              this.employeesList.current_page = response.current_page;
              response.employees.forEach((element) => {
                this.employeesList.employees.push(element);
              });
            })
            .catch((error) => {
              this.load = false;
            });
        } else {
          console.log("hena");
          this.noMore = true;
          this.employeesList.current_page = 1;
          console.log(this.employeesList.current_page);
        }
      }
    },
  },
  watch: {
    load() {
      this.loadMoreEmployees();
    },
  },
};
</script>
