<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="workerAdd">
      <div class="bloc">
        <a @click='addWorker("Naive","Giant")' class="button">Naive Worker</a>
      </div>
      <div class="bloc">
        <a @click='addWorker("Basic","Giant")' class="button">Basic Giant</a>
        <a @click='addWorker("Basic","Human")' class="button">Basic Human</a>
        <a @click='addWorker("Basic","Goblin")' class="button">Basic Goblin</a>
      </div>
      <div class="bloc">
        <a @click='addWorker("Skilled","Giant")' class="button">Skilled Giant</a>
        <a @click='addWorker("Skilled","Human")' class="button">Skilled Human</a>
        <a @click='addWorker("Skilled","Goblin")' class="button">Skilled Goblin</a>
      </div>
      <div class="bloc">
        <a @click='addWorker("Professional","Giant")' class="button">Professional Giant</a>
        <a @click='addWorker("Professional","Human")' class="button">Professional Human</a>
        <a @click='addWorker("Professional","Goblin")' class="button">Professional Goblin</a>
      </div>
      <div class="bloc">
        <a @click='addWorker("Artisan","Giant")' class="button">Artisan Giant</a>
        <a @click='addWorker("Artisan","Human")' class="button">Artisan Human</a>
        <a @click='addWorker("Artisan","Goblin")' class="button">Artisan Goblin</a>
      </div>
    </div>
    <hr>
    <div class="box">
      <p>Number of roll : {{ rollCount }}</p>
      <p>Energy spent : {{ rollCount * 5 }}</p>
    </div>

    <div v-if="rollCount > 0" class="workerDisplay columns">

      <div class="column">
        <div class="box">
          <p>Naive : {{ workerCount('Naive', 'Giant') }} </p>
          <p>{{ (workerCount('Naive', 'Giant')/rollCount * 100).toFixed(2) }} %</p>
        </div>
      </div>

      <display-box :count="rollCount" :workers="sortWorkers('Basic')" type="Basic"></display-box>
      <display-box :count="rollCount" :workers="sortWorkers('Skilled')" type="Skilled"></display-box>
      <display-box :count="rollCount" :workers="sortWorkers('Professional')" type="Professional"></display-box>
      <display-box :count="rollCount" :workers="sortWorkers('Artisan')" type="Artisan"></display-box>

    </div>
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
  </div>
</template>

<script>
import DisplayBox from '@/components/DisplayBox'
export default {
  name: 'Roller',
  data () {
    return {
      msg: 'Roll simulator',
      rollCount: 0,
      workerList: []
    }
  },
  computed: {
    last () {
      return this.workerList.length - 1
    },
    undeletedWorkers () {
      let workers = []
      this.workerList.forEach(function (worker) {
        if (workers) { workers.push(worker) }
      })
      return workers
    },
    workerListReverse () {
      return this.workerList.reverse()
    }
  },
  components: {
    DisplayBox
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
          rollNumber: this.rollCount,
          deleted: false
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
