<template>
  <div id="app">
    <NavBar />
    <nuxt /> <!-- vue의 <router-view>역할-->
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}

</script>

<style>
body{
  display: flex;
  justify-content: center;
}
#app{
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
