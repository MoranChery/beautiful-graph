<template>
    <div>
        <div class="dropdown-graph">
            <b-form-select class="w-50" v-model="selected" :options="options"></b-form-select>
        </div>
        <div>
          <div v-if="selected === 'Bar chart'">
            <BarChart></BarChart>
          </div>
          <div v-else-if="selected === 'Line graph'"> Line graph </div>
          <div v-else-if="selected === 'Pie chart'"> Pie chart </div>
          <div v-else> Not A/B/C </div>
        </div>
    </div>
</template>

<script>
import BarChart from './BarChart.vue'

export default {
  name: 'GraphShow',
  props: {
    titelsGraphShow: Array,
    colsNamesGraphShow: Array,
    checkedRowsShow :Array
  },
  components: {
    BarChart
  },
  data() {
    return {
        options: ['Bar chart','Line graph', 'Pie chart'],
        selected: "Bar chart"
    }
  },
  emits: ['update:colsNamesGraphShow'],
  methods: {
  },
  computed:{
  }
}
</script>