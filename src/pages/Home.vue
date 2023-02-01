<template>
    <div>
        <Credits :title="title"></Credits>
    </div>
</template>

<script setup lang="ts">
import Credits from '@/components/Credits.vue';
import { ref } from 'vue';
let title = ref("Time project`")
</script>
