<template>
  <div style="width: 1000px; height: 500px"><VueEharts :option="option" /></div>
  <!-- <script src="https://cdn.jsdelivr.net/npm/d3-array@3"></script> -->
</template>
<script>
import "echarts";
import VueEharts from "vue-echarts";

import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

// 引入json数据
const FeHelper = require("./FeHelper.json");
import * as d3 from "d3-array";
import * as geo from "d3-array";

echarts.use([GridComponent, BarChart, CanvasRenderer]);
export default {
  components: {
    VueEharts,
  },
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
        ],
      },
    };
  },
  mounted() {
    console.log(d3, geo, "pppp");
  },
};
</script>

<style></style>
