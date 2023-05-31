<template>

        <router-link to="/chart1">Go to Chart1</router-link>
        <br>
        <router-link to="/chart2">Go to Chart2</router-link>
        
        <div>
            <h1>NYC Wi-Fi Hotspot Locations</h1>
            <ul>
                <li v-for="hotspot in wifiHotspots" :key="hotspot.objectid">
                    {{ hotspot.name }}
                </li>
            </ul>
        </div>
        <router-view></router-view>
  </template>
  
  <script>
import axios from "axios";
import { RouterLink } from "vue-router";
  export default {
    name: "Home",
    data() {
        return {
            wifiHotspots: [],
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            // Make API request using NYC open Data
            axios.get("https://data.cityofnewyork.us/resource/jd4g-ks2z.json")
                .then(response => {
                this.wifiHotspots = response.data;
            })
                .catch(error => {
                console.error(error);
            });
        },
    },
    components: { RouterLink }
};
  </script>
  