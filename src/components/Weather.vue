<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue';
import Sidebar from './Sidebar.vue'

const apiKey = 'a622b592914b4189b7f04743222002'
const baseurl = 'https://api.weatherapi.com/v1'
const current_weather = '/current.json'

const date = reactive(new Date());

const weekday = ref(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"])
const monthNames = ref(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
const show = ref(false)

const cityData = ref([])

function getWeather(country) {
  axios
  .get(`${baseurl}${current_weather}?key=${apiKey}&q=${country}&aqi=yes`)
  .then((res)=> {
    cityData.value = res
    console.log(country)
  })

  show.value = true
}



</script>

<template>
  <Sidebar @get-weather="getWeather" :show="show" />
  <div class="weather" v-if="show">
      <h1>{{cityData.data.current.temp_c}}<span>o</span></h1>

      <div class="city-data">
        <div class="city">
          <h3 class="city__name">{{cityData.data.location.name}}</h3>
          
          <span>{{cityData.data.current.last_updated.slice(10)}} - {{weekday[date.getDay()]}},  {{monthNames[date.getMonth()]}}'{{date.getFullYear().toString().substr(-2)}}</span>
        </div>

        <div class="logo">
          <img :src="cityData.data.current.condition.icon" alt="dasdasd"><span>{{cityData.data.current.condition.text}}</span>
        </div>
      </div>
  </div>
</template>

<style scoped>
  .weather { 
    position: absolute;
    bottom: 14rem;
    left: 7rem;

    color: #fff;

    display: flex;
    align-items: center;
  }
  h1{
    position: relative;
    font-size: 8rem;
  }
  .city{
    display: flex;
    flex-direction: column;
    margin-left: 35px;
  }
  .city__name {
    font-size: 3.2rem;
  }
  .city-data{ 
    display: flex;
    align-items: center;
  }
  .logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left:25px ;
  }

  h1 span {
    position: absolute;
    top: 10px;
    font-size: 50px;
  }
</style>
