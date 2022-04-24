<template>
  <div class="c-chart__container">
    <v-chart ref="chart" :option.sync="chartOptions" />
  </div>
</template>

/<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);
export default {
  name: "PerformanceChartComponent",
  props: ["date"],
  components: {
    VChart,
  },
  created() {
    this.$store.dispatch("getData");
  },
  data() {
    return {
      filtered: null,
    };
  },
  updated() {
    this.$emit(
      "dateLimits",
      this.chartData[0],
      this.chartData[this.chartData.length - 1]
    );
  },

  computed: {
    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },
    chartData() {
      return this.$store.state.chartData;
    },

    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          transitionDuration: 0,
          confine: false,
          hideDelay: 0,
          padding: 0,
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        series: [
          {
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
          },
        ],
      };
    },

    xAxisData() {
      return this.chartData.map((item) => this.formatDate(item.date_ms));
    },

    yAxisData() {
      return this.chartData.map((item) => +item.performance * 100);
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
    filterData(date) {
      this.filtered = this.chartData.map((obj) => ({ ...obj }));
      if (date.start || date.end) {
        let filterStartDate = this.formatDate(date.start);
        let filterEndDate = this.formatDate(date.end);
        for (let i = 0; i < this.filtered.length; i++) {
          let date = this.formatDate(this.filtered[i].date_ms);
          if (filterStartDate === date) {
            let index = this.filtered.indexOf(this.filtered[i]);
            this.filtered[0].date_ms = filterStartDate;
            this.filtered[0].performance = this.filtered[i].performance;
            this.filtered.splice(0, index);
          }
          if (filterEndDate === date) {
            let index = this.filtered.indexOf(this.filtered[i]);
            this.filtered[this.filtered.length - 1].date_ms = filterEndDate;
            this.filtered[this.filtered.length - 1].performance =
              this.filtered[i].performance;
            this.filtered.splice(index + 1, this.filtered.length);
          }
        }
        this.$store.commit("setChartData", this.filtered);
      } else {
        this.$store.dispatch("getData");
      }
    },
  },
  watch: {
    date: {
      deep: true,
      handler(date) {
        this.filterData(date);
      },
    },
  },
};
</script>
