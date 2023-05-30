<template>
  <div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const inmateid = ref('')

async function getinmateid() {
  let res = await fetch(
    'https://data.cityofnewyork.us/resource/6teu-xtgp.json?$query=SELECT%0A%20%20%60inmateid%60%2C%0A%20%20%60admitted_dt%60%2C%0A%20%20%60discharged_dt%60%2C%0A%20%20%60race%60%2C%0A%20%20%60gender%60%2C%0A%20%20%60inmate_status_code%60%2C%0A%20%20%60top_charge%60'
  )

  let data = await res.json()

  inmateid.values = data.results
}
onMounted(() => {
  getinmateid()
})
</script>

<style scoped></style>
