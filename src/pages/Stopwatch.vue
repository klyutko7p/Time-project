<template>
    <div class="flex items-center justify-around">
        <div class="mt-56">
            <div class="text-center">
                <h1 class="text-3xl mb-10" v-if="seconds">
                    {{ minutes }}:{{
                        seconds
                    }}:<vue3-autocounter ref='counter' v-if="seconds > 0" :startAmount='0' decimalSeparator='.'
                        :decimals='2' :endAmount='seconds' :duration='seconds' :autoinit='true' />
                </h1>
                <h1 v-else class="text-3xl mb-10">0:0:0.00</h1>
                <div class="flex items-center justify-center ">
                    <CircleProgress :percent="seconds" :border-width="12" :transition="1" :is-gradient="true" :gradient="{
                        angle: 90,
                        startColor: '#FF0B0B',
                        stopColor: '#9E57FB'
                    }"></CircleProgress>
                </div>
            </div>
            <div class="text-center flex items-center justify-center mt-10">
                <MyButton class="mr-10" @click="timer(true)">Start</MyButton>
                <MyButton class="mr-10" @click="timer(false)">Reset</MyButton>
                <MyButton @click="getCircle(minutes, seconds)">Doing a circle</MyButton>
            </div>
        </div>
        <div class="mt-56 text-3xl" v-if="arrayOfCircles.length > 0">
            <h1>List of circles</h1>
            <div v-for="(circle, index) in arrayOfCircles" :key="index" class="text-2xl">
                {{ index + 1 }}) {{ circle.minutes }} Minute + {{ + circle.seconds }} Seconds
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
import { ref } from 'vue';
import MyButton from "@/components/UI/MyButton.vue";

let arrayOfCircles: any[] = []
let minutes = ref(0)
let seconds = ref(0)

function timer(boolean: Boolean) {
    if (boolean) {
        seconds.value = 1;
        setInterval(() => {
            if (seconds.value === 0) {
                return clearInterval;
            } else {
                seconds.value++;
            }
            if (seconds.value === 60) {
                minutes.value++;
                seconds.value = 1;
            }
        }, 1000)
    }
    if (!boolean) {
        seconds.value = 1;
        minutes.value = 0;
        arrayOfCircles.length = 0;
    }
}

function getCircle(minutes: number, seconds: number) {
    arrayOfCircles.push({ minutes, seconds });
}
</script>
