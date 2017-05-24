<template>
  <div class="tile is-ancestor" :class="type">
    <div class="tile is-parent">
      <article @click='$parent.addWorker(type,"Giant")' class="button is-large tile is-child box">
        <span class="icon "><i class="fa" :class="fa"></i></span>
        <span>{{ type }} Giant</span>
      </article>
    </div>
    <div class="tile is-parent">
      <article @click='$parent.addWorker(type,"Human")' class="button is-large tile is-child box">
        <span class="icon "><i class="fa" :class="fa"></i></span>
        <span>{{ type }} Human</span>
      </article>
    </div>
    <div class="tile is-parent">
      <article @click='$parent.addWorker(type,"Goblin")' class="button is-large tile is-child box">
        <span class="icon "><i class="fa" :class="fa"></i></span>
        <span>{{ type }} Goblin</span>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: ['type', 'fa']
}
</script>
