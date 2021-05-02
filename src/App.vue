<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <Attrs/>
  <SlotFather/> -->
  <router-view></router-view>
</template>

<script>
import Attrs from './components/Attrs.vue'
// import Father from './components/Father.vue'
import SlotFather from './slotDemo/Father'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorl,
    Attrs,
    SlotFather
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
