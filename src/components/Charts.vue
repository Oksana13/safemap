<template>
  <section class="charts">
    <vue-highcharts :Highcharts="Highcharts" :options="drilldownOptions" ref="drilldownChart"></vue-highcharts>
  </section>
</template>
<script>
  import VueHighcharts from "vue2-highcharts";
  import Drilldown from "highcharts/modules/drilldown.js";
  import * as data from "../assets/data.js";
  import Highcharts from "highcharts";

  Drilldown(Highcharts);
  Highcharts.setOptions({
    lang: {
      drillUpText: "back"
    }
  });
  export default {
    components: {
      VueHighcharts
    },
    data() {
      return {
        Highcharts: Highcharts,
        drilldownOptions: data.DrilldownData
      };
    }
  };
</script>
