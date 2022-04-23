<template>
  <div class="c-dashboard">
    <div class="c-filters__container">[Place filter component here]</div>
    <div class="c-dashboard__header">
      <PerformanceChartComponent />
    </div>
  </div>
</template>

// <script>
import PerformanceChartComponent from "@/components/performance-chart.vue";
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
  },
};
</script>
