<template>
<Header/>
  <router-view/>
</template>
<script>
  import Header from './components/layout/Header.vue'
  export default {
    components:{
      Header
    }
  }
</script>
<style>
  body{
    margin: 0px;
    padding: 0px;
  }
</style>
