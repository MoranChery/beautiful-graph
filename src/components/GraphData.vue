<template>
    <div>
      <b-container>
        <b-row class="border border-dark">
          <b-col class="border border-dark background-col" v-for="col in titelsCom" :key="col">{{ col }}</b-col>
          <b-col class="border border-dark background-col"></b-col>
        </b-row>
        <b-row class="border border-dark" v-for="(row, index) in colsNamesCom" :key="row">
          <b-col class="border border-dark" v-for="col in row" :key="col">{{ col }}</b-col>
          <b-col class="border border-dark">
            <input type="checkbox" :id="index" :value="checkedRows[index]" v-model="checkedRows[index]" @click="check($event)">
          </b-col>
        </b-row>
        <b-row v-if="showPart" class="border border-dark">
          <b-col class="border border-dark" v-for="(titel, index) in titelsCom" :key="titel">
            <b-form-input v-model="text[index]" placeholder="Enter value" aria-describedby="input-live-help input-live-feedback"></b-form-input>
          </b-col>
          <b-col>
            <button type="button" class="btn btn-outline-primary" @click="addVals">Save</button>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'GraphData',
  props: {
    titelsCom: Array,
    colsNamesCom: Array,
    showPart: Boolean,
    checkedRowsData :Array
  },
  data() {
    return {
      text: ['',''],
      disableButton: true,
      checkedRows: [false]
    }
  },
  emits: ['update:colsNamesCom', 'update:checkedRowsData' ],
  methods: {
    addVals(){
      if(this.text[0]!= '' && this.text[1]!= ''){
        let arrVal = this.colsNamesCom
        arrVal.push(this.text);
        this.checkedRows.push(false);
        this.$emit('update:colsNamesCom', arrVal);
        this.$emit('update:checkedRowsData', this.checkedRows);
        this.text = ['','']
      }
    },
    check(){
      this.$emit('update:checkedRowsData', this.checkedRows);
    }
  },
  computed:{
    hasVal(index){
      if(this.text[index]!= ''){
        return true
      }
      return false
    }
  }
}
</script>

<style>
.background-col{
    background-color: #5F9EA0;
}
</style>