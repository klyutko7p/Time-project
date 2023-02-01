<template>
      <div>
            <nav class="
        flex
        items-center
        justify-between
        font-bold
        absolute
        inset-x-0
        bottom-0
        mx-5
      ">
                  <div @click="$router.push('/timer')">
                        <span class="material-icons">timer</span>
                        <li>Timer</li>
                  </div>
                  <div @click="$router.push('/clock')">
                        <span class="material-icons">schedule</span>
                        <li>Clock</li>
                  </div>
                  <div @click="$router.push('/stopwatch')">
                        <span class="material-icons">alarm_add</span>
                        <li>Stopwatch</li>
                  </div>
            </nav>
      </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
li {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
}

nav>div {
      width: 170px;
      transition: 0.3s;
}

nav>div:hover {
      background-color: var(--semi-color);
      color: var(--main-color);
      transition: 0.3s;
      cursor: pointer;
}

div>span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 50px;
      margin-bottom: 10px;
}
</style>
