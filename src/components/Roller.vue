<template>
  <div class="main-ui">
    <h1>{{ title }}</h1>

    <!-- Input groups -->
    <div class="tile is-ancestor Naive">
      <div class="tile is-parent">
        <article @click='addWorker("Naive","Giant")' class="button is-large tile is-child box">
          <span class="icon "><i class="fa fa-wheelchair"></i></span>
          <span>Naive Worker</span>
        </article>
      </div>
    </div>

    <button-group type="Basic" fa="fa-wheelchair-alt"></button-group>
    <button-group type="Skilled" fa="fa-bicycle"></button-group>
    <button-group type="Professional" fa="fa-car"></button-group>
    <button-group type="Artisan" fa="fa-rocket"></button-group>

    <!-- Cancel Last One -->
    <div v-if="rollCount > 0">
      <!-- <div class="notification is-info" v-for='worker in workerListReverse'>
        <button class="delete"></button>
        {{worker.type}} {{worker.race}}, roll # {{ worker.rollNumber}}
      </div> -->
      <div class="notification is-info">
        <button @click="removeLast" class="delete"></button>
        {{workerList[last].type}} {{workerList[last].race}}, roll # {{ workerList[last].rollNumber}}
      </div>
    </div>
    <hr>

    <!-- Short Stats -->
    <div class="box">
      <p>Number of roll : {{ rollCount }}</p>
      <p>Energy spent : {{ rollCount * 5 }} </p>
      <p>Silver spent (using wine) : {{ (rollCount * 5 * 33000).toLocaleString() }} <span class="icon"><i class="fa fa-money"></i></span></p>
    </div>

    <!-- Display Boxes -->
    <div v-if="rollCount > 0" class="workerDisplay columns">

      <div class="column">
        <div class="box">
          <p>Naive <span class="is-pulled-right tag is-info">{{ workerCount('Naive', 'Giant') }}</span></p>
          <p>{{ naivePercent }} %</p>
          <progress class="progress is-info" :value=naivePercent max="100">{{ naivePercent }}%</progress>
        </div>
      </div>

      <display-box :count="rollCount" :workers="sortWorkers('Basic')" type="Basic"></display-box>
      <display-box :count="rollCount" :workers="sortWorkers('Skilled')" type="Skilled"></display-box>
      <display-box :count="rollCount" :workers="sortWorkers('Professional')" type="Professional"></display-box>
      <display-box :count="rollCount" :workers="sortWorkers('Artisan')" type="Artisan"></display-box>

    </div>
  </div>
</template>

<script>
import DisplayBox from '@/components/DisplayBox'
import ButtonGroup from '@/components/ButtonGroup'
export default {
  name: 'Roller',
  data () {
    return {
      title: "Heb's Worker Roll Simulator",
      rollCount: 0,
      workerList: []
    }
  },
  computed: {
    last () {
      return this.workerList.length - 1
    },
    naivePercent () {
      return (this.workerCount('Naive', 'Giant') / this.rollCount * 100).toFixed(2)
    }
  },
  components: {
    DisplayBox,
    ButtonGroup
  },
  methods: {
    sortWorkers (Type) {
      let workers = []
      this.workerList.forEach(function (worker) {
        if (worker.type === Type) { workers.push(worker) }
      })
      return workers
    },
    workerCount (Type, Race) {
      let count = 0
      this.workerList.forEach(function (worker) {
        if (worker.race === Race) {
          if (worker.type === Type) { count++ }
        }
      })
      return count
    },
    addWorker (Type, Race) {
      this.rollCount++
      this.workerList.push(
        {
          type: Type,
          race: Race,
          rollNumber: this.rollCount
        })
      console.log(`Added ${Type} ${Race}`)
    },
    removeLast () {
      this.workerList.pop()
      this.rollCount --
    }
  }
}
</script>
<style>
.main-ui{
  padding: 10px;
}
.main-ui .tile.is-parent{
  padding: 2px;
}
.Naive article{
  color: white;
  background-color: gray
}
.Basic article{
  color: white;
  background-color: #72BA3F
}

.Skilled article{
  color: white;
  background-color: #499B8D
}

.Professional article{
  color: white;
  background-color: #D3CD47
}

.Artisan article{
  color: white;
  background-color: #D39147
}
</style>
