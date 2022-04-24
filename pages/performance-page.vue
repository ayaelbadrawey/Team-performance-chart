<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-row align-items-center mx-1">
          <label class="mx-1">Start date:</label>
          <Datepicker
            v-if="!date.start"
            lang="en"
            v-model="date.start"
            :disabledStartDate="disabledStartDate"
          />
          <span class="fw-bold" v-else>{{ formatDate(date.start) }}</span>
        </div>
        <div class="d-flex flex-row align-items-center mx-1">
          <label class="mx-1">End date:</label>
          <Datepicker
            v-if="!date.end"
            lang="en"
            v-model="date.end"
            :disabledStartDate="{
              to: date.start,
              from: new Date('01.16.2022'),
            }"
          />
          <span class="fw-bold" v-else>{{ formatDate(date.end) }}</span>
        </div>
        <button class="btn btn-primary btn-sm mx-2" @click="clearFilters">
          Clear
        </button>
      </div>
      <div class="d-flex justify-content-center mt-1">
        <p class="fw-light text-muted mb-0">
          (Note: Return back to Jan to choose dates)
        </p>
      </div>
    </div>
    <div class="c-dashboard__header">
      <PerformanceChartComponent :date="date" @dateLimits="getDateLimits" />
    </div>
  </div>
</template>

// <script>
import moment from "moment";

import PerformanceChartComponent from "@/components/performance-chart.vue";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
  },
  data() {
    return {
      date: {
        start: "",
        end: "",
      },
      limits: {
        start: "",
        end: "",
      },
    };
  },
  computed: {
    disabledStartDate() {
      return { to: this.limits.start, from: this.limits.end };
    },
  },
  methods: {
    clearFilters() {
      this.date.start = "";
      this.date.end = "";
    },
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
    getDateLimits(start, end) {
      this.limits.start = this.formatDate(start.date_ms);
      this.limits.end = this.formatDate(end.date_ms);
    },
  },
};
</script>
