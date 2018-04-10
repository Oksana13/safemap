<template>
  <section class="charts">
    <vue-highcharts :Highcharts="Highcharts" :options="drilldownOptions" ref="drilldownChart"></vue-highcharts>
    <p>{{drilldownOptions}}</p>
    <button @click="load">load</button>
    <button @click="reload">reload</button>
  </section>
</template>
<script>
  import VueHighcharts from "vue2-highcharts";
  import Drilldown from "highcharts/modules/drilldown.js";
  import * as data from "../assets/data.js";
  import * as data2 from "../assets/data2.js";
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
    },
    methods: {
      load: function () {
          this.drilldownOptions = {};
          this.drilldownOptions = data2.DrilldownData;
      },
      reload: function () {
        this.drilldownOptions = {};
        this.drilldownOptions = data.DrilldownData;
      }
    }
  };
</script>
