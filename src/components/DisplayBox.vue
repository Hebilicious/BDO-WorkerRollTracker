<template>
  <div class="column">
    <div class="box">
      <p>{{ type }} <span class="is-pulled-right tag is-info">{{ this.workers.length }}</span></p>
      <p class="has-text-centered"> <span class="tag is-black">{{ this.typePercent }} %</span></p>
      <progress class="progress is-info" :value=typePercent max="100">{{ typePercent }}%</progress>
        <p>Giant <span class="is-pulled-right tag is-light">{{ $parent.workerCount(type, 'Giant') }}</span></p>
        <p>Human  <span class="is-pulled-right tag is-light">{{ $parent.workerCount(type, 'Human') }}</span></p>
        <p>Goblin  <span class="is-pulled-right tag is-light">{{ $parent.workerCount(type, 'Goblin') }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DisplayBox',
  props: ['type', 'workers', 'count'],
  data () {
    return {
      msg: 'Displaybox'
    }
  },
  computed: {
    typePercent () {
      return (this.workers.length / this.count * 100).toFixed(2)
    }
  },
  methods: {
  }
}
</script>
