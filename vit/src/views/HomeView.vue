<template>
  <div class="container">
    <PayrollName
      v-for="(firstname, index) in payroll"
      :key="payroll.firstname"
      :id="index + 1"
      :payroll="firstname"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import PayrollName from '../components/paroll.vue'
const payroll = ref('')

async function getPayroll() {
  let res = await fetch('https://data.cityofnewyork.us/resource/k397-673e.json')

  let data = await res.json()
  payroll.values = data.results
}
onMounted(() => {
  getPayroll()
})
</script>

<style scoped>
.conatainer {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
