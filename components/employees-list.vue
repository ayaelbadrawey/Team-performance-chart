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
          <div :id="'employee-col' + index">{{ employee.profile.name }}</div>
        </div>
      </div>
      <div>{{ employee.email }}</div>
      <div :id="'address-col' + index">{{ employee.profile.address }}</div>
      <div>
        {{ new Date(employee.start_date).toLocaleString() }}
      </div>
      <div>{{ employee.performance_index }}</div>
      <div :id="'about-col' + index">{{ employee.profile.about }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeesList",
  props: ["employees", "filter"],
  watch: {
    filter() {
      for (let i = 0; i < this.employees.length; i++) {
        let employee = document.getElementById("employee-col" + i);
        let about = document.getElementById("about-col" + i);
        let address = document.getElementById("address-col" + i);
        const regex = new RegExp(this.filter, "gi");
        if (this.filter !== "") {
          let text1 = employee.innerHTML;
          let text2 = about.innerHTML;
          let text3 = address.innerHTML;
          text1 = text1.replace(/(<mark class="highlight">|<\/mark>)/gim, "");
          text2 = text2.replace(/(<mark class="highlight">|<\/mark>)/gim, "");
          text3 = text3.replace(/(<mark class="highlight">|<\/mark>)/gim, "");
          const newText1 = text1.replace(
            regex,
            '<mark class="highlight">$&</mark>'
          );
          const newText2 = text2.replace(
            regex,
            '<mark class="highlight">$&</mark>'
          );
          const newText3 = text3.replace(
            regex,
            '<mark class="highlight">$&</mark>'
          );
          employee.innerHTML = newText1;
          about.innerHTML = newText2;
          address.innerHTML = newText3;
          this.$router.push({ path: "/", query: { filter: this.filter } });
        } else {
          employee.innerHTML = this.employees[i].profile.name;
          about.innerHTML = this.employees[i].profile.about;
          address.innerHTML = this.employees[i].profile.address;
          this.$router.push({ path: "/" });
        }
      }
    },
  },
};
</script>
