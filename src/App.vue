<template>
  <div id="app">
    <ToolBar></ToolBar>
    <img id="mainIcon" alt="Vue logo" src="./assets/diagram.png" width="120" height="120">
    <HelloWorld msg="Welcome to Beautiful Graph"/>
    <div>
      <b-container>
        <b-row>
          <b-col>
            <GraphData class="graphData" :colsNamesCom=colsNames :showPart=showForHere :titelsCom=titels :checkedRowsData=checkedRows></GraphData>
          </b-col>
          <b-col>
            <GraphShow class="graphData" :colsNamesGraphShow="colsNames" :titelsGraphShow="titels" :checkedRowsShow="checkedRows"></GraphShow>
          </b-col>
        </b-row>
      </b-container>
    </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToolBar from './components/ToolBar.vue'
import GraphData from './components/GraphData.vue'
import GraphShow from './components/GraphShow.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ToolBar,
    GraphData,
    GraphShow
  },
  data() {
    return {
      colsNames: [['Moran', '5']],
      showForHere: true,
      titels: ['Name', 'Age'], 
      checkedRows: [false]
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#mainIcon {
  margin-top: 30px;
}
.graphData {
  margin-top: 30px;
}
</style>
