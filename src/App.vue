<script setup lang="ts">
import { onMounted, ref } from "@vue/runtime-core";
import Navbar from "./components/Navbar.vue";
import { useStore } from "vuex";
import "./assets/tailwind.css"
const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchAllTimeZones");
  isLoading.value = false;
});

let isLoading = ref(true);
</script>

<template>
  <div class="container mx-auto font-['Nanum-Gothic']">
    <navbar></navbar>
    <router-view v-if="!isLoading"></router-view>
    <div v-else class="flex items-center justify-center mt-80">
      <div class="lds-hourglass"></div>
    </div>
  </div>
</template>

<style>
.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid var(--semi-color);
  border-color: var(--semi-color) transparent var(--semi-color) transparent;
  animation: lds-hourglass 1.2s infinite;
}

@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  100% {
    transform: rotate(1800deg);
  }
}

:root {
  --main-color: rgb(34, 34, 34);
  --semi-color: #ffffff;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--main-color);
  color: var(--semi-color);
  text-shadow: 0 0 15px rgb(240, 77, 77), 0 0 20px rgba(10, 175, 230, 0);
}
</style>
