<script setup>
import { ref } from 'vue';


const countries = (
    [
        {country: 'Manchester'},
        {country: 'New York'},
        {country: 'Vancouver'},
        {country: 'California'}
    ]
)

const detail = ref([
    {title: 'Cloudy', number: '86%'},
    {title: 'Humidity', number: '62%'},
    {title: 'Wind', number: '8km/h'}
])

const cityName = ref('')

</script>

<template>
    <header>
        <form class="search" @submit.prevent="$emit('getWeather', cityName) ,cityName=''">
            <input type="text" name="q" placeholder="Another location" v-model="cityName" >
            <button><magnify-icon :size="32" /></button>
        </form>


        <div class="container">
            <div class="country">
                <h4 v-for="country in countries" @click="$emit('getWeather', country.country)">{{country.country}}</h4>
            </div>

            <!-- <div class="weather-detail" v-if="show">
                <hr>
                <h3 class="title">Weather Deital</h3>
                <div class="detail">
                    <div class="data">
                        <h4>{{detail[0].title}}</h4>
                        <span>{{detail[0].number}}</span>
                    </div>
                    <div class="data">
                        <h4>{{detail[1].title}}</h4>
                        <span>{{detail[1].number}}</span>
                    </div>
                    <div class="data">
                        <h4>{{detail[2].title}}</h4>
                        <span>{{detail[2].number}}</span>
                    </div>
                </div>
            </div> -->
            <hr>
        </div>
    </header>
</template>

<style scoped> 

    .container {
        margin-right:3rem;
    }

    header {
        height: 100%;
        width: 35%;
        padding-left:5rem;
        padding-top: 3.6rem;
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        overflow: scroll;
        /* transform: translate( 50px, -1000px ); */

        background: rgba( 8, 8, 8, 0.35 );
        backdrop-filter: blur( 19px );
        -webkit-backdrop-filter: blur( 19px );
    }
    .search {
        height: 2rem;
    }
    input {
        border: none;
        background: transparent;
        outline: none;
        border-bottom: 1px solid rgba(255, 255, 255, .4);
        padding-bottom:10px;
        padding-right:130px;
        color: rgba(255, 255, 255, 1);
    }
    input::placeholder {
        color: rgba(255, 255, 255, .4);
        letter-spacing: 1px;
        font-size: 15px;
    }   
    button {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        outline: none;
        padding:1.8rem 2.2rem;
        background: #f09115;
        cursor: pointer;
    }
    button:hover {

    }

    .material-design-icon.icon-2x > .material-design-icon__svg {
        height: 2em;
        width: 2em;
    }

    ::-webkit-scrollbar {
        width: 0;
    }

    hr {
        border:1px solid rgba(255, 255, 255, .4);
    }

    
    .country {
        margin: 3rem 0;
    }

    h4 {
        cursor: pointer;
    }
    h4:not(:first-child) {
        padding-top: 2.2rem; 
    }


        .title {
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
    .weather-detail {
        color:#fff;
        margin-bottom: 3rem;
    }
    .data {
        display: flex;
        justify-content: space-between;
    }
    .data:not(:last-child) h4{
        padding-bottom: 2rem;
    }
</style>
