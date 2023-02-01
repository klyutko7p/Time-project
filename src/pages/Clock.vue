<template>
    <div>
        <div class="mt-32">
            <div class=" py-2 flex items-center justify-center">
                <input list="city"
                    class="appearance-none bg-transparent w-2/4  border-b text-3xl font-bold mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="search" placeholder="Enter your region/city" v-model="zone" />
                <datalist id="city">
                    <option :value="zone.zoneName" v-for="zone in allTimeZones" :key="zone">
                        {{ zone.zoneName }}
                    </option>
                </datalist>
            </div>
            <MyButton @click="fetchCity" class="text-center mt-10">Show Time!</MyButton>
        </div>

        <div v-if="Object.keys(city).length !== 0 && city.status !== 'FAILED'" class="flex items-center justify-center">
            <div class="bg-red-900 overflow-hidden shadow-xl sm:rounded-lg mt-20 p-5 w-1/2">
                <div id="clock">
                    <p class="date">
                        {{ Object.keys(city).length !== 0 ? getDate(city) : date }}
                    </p>
                    <p class="time">
                        {{ Object.keys(city).length !== 0 ? getTime(city) : time }}
                    </p>
                </div>
                <div class="flex items-center justify-center">
                    <img alt="Flag" class="w-24 h-24 mr-5" :src="linkToImg + city.countryCode + '.svg'" />
                    <div class="text-2xl">
                        <h1>{{ city.zoneName.split("/")[1] }}, {{ city.countryName }}</h1>
                    </div>
                </div>
            </div>
        </div>

        <div v-else-if="city.status" class="flex items-center justify-center">
            <div class="bg-red-900 overflow-hidden shadow-xl sm:rounded-lg mt-20 p-5 w-1/2">
                <div id="clock">
                    <p class="date">
                        Sorry!
                    </p>
                    <p class="time">
                        Choose region/city from the LIST
                    </p>
                </div>
            </div>
        </div>

        <div v-else class="flex items-center justify-center">
            <div class="bg-red-900 overflow-hidden shadow-xl sm:rounded-lg mt-20 p-5 w-1/2">
                <div id="clock">
                    <p class="date">
                        {{ date }}
                    </p>
                    <p class="time">
                        {{ time }}
                    </p>
                    <h1 class="text-3xl font-bold">Your date-time!</h1>
                </div>
            </div>
        </div>

    </div>
</template>


<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import City from "@/types/City";
import MyButton from "@/components/UI/MyButton.vue";

const store = useStore();
let allTimeZones = ref(<any>[]);
let city = ref(<City>{});
let zone = ref("");
let date = ref('');
let time = ref('');
const linkToImg = ref(
    "http://purecatamphetamine.github.io/country-flag-icons/3x2/"
);

async function fetchCity() {
    console.log(city.value);
    if (zone.value !== "") {
        await store.dispatch("fetchCity", zone.value);
        city.value = store.getters.getZone;
    }
    return;
}

let intervalID = setInterval(() => {
    updateTime();
}, 1000);

updateTime();

function updateTime() {
    let timeNow = new Date();
    time.value =
        zeroPadding(timeNow.getHours(), 2) +
        ":" +
        zeroPadding(timeNow.getMinutes(), 2) +
        ":" +
        zeroPadding(timeNow.getSeconds(), 2);
    date.value =
        zeroPadding(timeNow.getDate(), 2) +
        "." +
        zeroPadding(timeNow.getMonth() + 1, 2) +
        "." +
        zeroPadding(timeNow.getFullYear(), 4) +
        " ";
}

function zeroPadding(num: number, digit: number) {
    let zero = "";
    for (let i = 0; i < digit; i++) {
        zero += "0";
    }
    return (zero + num).slice(-digit);
}

function getDate(city: City) {
    let date = new Date(city.formatted);
    return date.toLocaleDateString(`${city.countryCode}`);
}

function getTime(city: City) {
    let time = new Date(city.formatted);
    return time.toLocaleTimeString(`${city.countryCode}`, {
        hour: "2-digit",
        minute: "2-digit",
    });
}

onMounted(() => {
    allTimeZones.value = store.getters.getAllTimeZones;
});
</script>

<style scoped>
#clock {
    font-family: "Share Tech Mono", monospace;
    color: #ffffff;
    text-align: center;
    color: var(--semi-color);
    text-shadow: 0 0 20px rgb(173, 30, 30), 0 0 20px rgba(10, 175, 230, 0);
}

.time {
    letter-spacing: 0.05em;
    font-size: 80px;
    padding: 5px 0;
}

.date {
    letter-spacing: 0.1em;
    font-size: 24px;
}

.text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
}
</style>