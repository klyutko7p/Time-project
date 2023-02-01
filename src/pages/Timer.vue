<template>
    <div class="text-center mt-28">
        <div class="flex items-center justify-center">
            <div class="mr-24 grid grid-rows-4">
                <h1 class="text-7xl cursor-pointer hover:opacity-70 ease-out duration-100" @click="increment(1)">+</h1>
                <h1 class="text-9xl">{{ days }}</h1>
                <div class="font-bold text-xl">Days</div>
                <h1 class="text-7xl cursor-pointer hover:opacity-70 ease-out duration-100" @click="decrement(1)"
                    v-if="days">-
                </h1>
            </div>
            <div class="mr-24 grid grid-rows-4">
                <h1 class="text-7xl cursor-pointer hover:opacity-70 ease-out duration-100" @click="increment(2)">+</h1>
                <h1 class="text-9xl">{{ hours }}</h1>
                <div class="font-bold text-xl">Hours</div>
                <h1 class="text-7xl cursor-pointer hover:opacity-70 ease-out duration-100" @click="decrement(2)"
                    v-if="hours">-
                </h1>
            </div>
            <div class="mr-24 grid grid-rows-4">
                <h1 class="text-7xl cursor-pointer hover:opacity-70 ease-out duration-100" @click="increment(3)">+</h1>
                <h1 class="text-9xl">{{ minutes }}</h1>
                <div class="font-bold text-xl">Minutes</div>
                <h1 class="text-7xl cursor-pointer hover:opacity-70 ease-out duration-100" @click="decrement(3)"
                    v-if="minutes">
                    -</h1>
            </div>
            <div class="grid grid-rows-4">
                <h1 class="text-7xl cursor-pointer hover:opacity-70 ease-out duration-100" @click="increment(4)">+</h1>
                <h1 class="text-9xl">{{ seconds }}</h1>
                <div class="font-bold text-xl">Seconds</div>
                <h1 class="text-7xl cursor-pointer hover:opacity-70 ease-out duration-100" @click="decrement(4)"
                    v-if="seconds">
                    -</h1>
            </div>
        </div>
        <div class="flex items-center justify-center">
            <MyButton class="mr-10" @click="timer(true)">Start</MyButton>
            <MyButton @click="timer(false)">Reset</MyButton>
        </div>

    </div>
</template>

<script setup lang="ts">
import MyButton from '@/components/UI/MyButton.vue';
import { ref } from 'vue';

let days = ref(0)
let hours = ref(0)
let minutes = ref(0)
let seconds = ref(0)


function increment(number: number) {
    switch (number) {
        case 1:
            days.value++;
            break;
        case 2:
            hours.value++;
            break;
        case 3:
            minutes.value++;
            break;
        case 4:
            seconds.value++;
            break;
        default:
            break;
    }
}

function decrement(number: number) {
    switch (number) {
        case 1:
            days.value--;
            break;
        case 2:
            hours.value--;
            break;
        case 3:
            minutes.value--;
            break;
        case 4:
            seconds.value--;
            break;
        default:
            break;
    }
}

function makeIteration() {
    if (seconds.value > 0) {
        setTimeout(makeIteration, 1000);
    }

    if (seconds.value === 0 && minutes.value > 0) {
        minutes.value -= 1;
        seconds.value = 60;
        setTimeout(makeIteration, 1000);
    }

    if (minutes.value === 0 && seconds.value === 0 && hours.value > 0) {
        hours.value -= 1;
        minutes.value = 59;
        seconds.value = 60;
        setTimeout(makeIteration, 1000);
    }

    if (minutes.value === 0 && seconds.value === 0 && hours.value === 0 && days.value > 0) {
        days.value -= 1;
        hours.value = 23;
        minutes.value = 59;
        seconds.value = 60;
        setTimeout(makeIteration, 1000);
    }

    if (seconds.value === 0) {
        return;
    } else {
        seconds.value -= 1;
    }
}

function timer(flag: Boolean) {
    if (flag) {
        setTimeout(makeIteration, 1000)
    } else {
        seconds.value = 0;
        minutes.value = 0;
        hours.value = 0;
        days.value = 0;
    }
}

</script>

