<template>
  <div id="app">
    <vue-page-transition name="fade">
      <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Rubik+Mono+One);

body {
  font-family: 'Rubik Mono One', sans-serif;
  margin: 0;
}

#app {
  margin: 0;
  padding: 0;
}

@media only screen and (min-width: 600px)  {

}
</style>
