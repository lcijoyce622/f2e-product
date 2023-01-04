<template lang="pug">
#app
  //- HelloWorld
  //- TypeAnimation
  MainArea
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TypeAnimation from './components/TypeAnimation.vue'
import MainArea from './components/MainArea.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TypeAnimation,
    MainArea
  }
}
</script>

<style lang="scss">
#app {
  overflow-x: hidden;
  width: 100%;
  /* height: 200vh; */
  font-family: Noto Sans CJK TC;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  margin: 0;
  padding: 0;

}
</style>
