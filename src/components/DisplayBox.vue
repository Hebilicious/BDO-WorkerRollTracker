<template>
  <div class="column">
    <div class="box">
      <p>{{ type }} : {{ this.workers.length }}</p>
      <p> {{ this.typePercent }} %</p>
      <ul>
        <li>Giant : {{ this.$parent.workerCount(type, 'Giant') }}</li>
        <li>Human : {{ this.$parent.workerCount(type, 'Human')}}</li>
        <li>Goblin : {{ this.$parent.workerCount(type, 'Goblin')}}</li>
      </ul>
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
