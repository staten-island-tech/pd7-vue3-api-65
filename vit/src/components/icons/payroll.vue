<template>
  <div class="name">
    <h2>{{ payroll.firstname }}</h2>
    <h3>{{ id }}</h3>
  </div>
</template>

<script setup>
const props = defineProps({
  payroll: Object,
  id: Number
})
</script>

<style scoped></style>
