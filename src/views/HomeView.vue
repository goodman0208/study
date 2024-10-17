<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to 10086"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  created(){
    console.log('爷created')
  },
  beforeCreate(){
    console.log('爷created前')
  },
  mounted(){
    console.log('爷mounted')
  },
  beforeMount(){
    console.log('爷mounted前')
  },
  beforeDestroy(){
    console.log('爷beforeDestroy')
  },
  destroyed(){
    console.log('爷destroyed')
  }
}
</script>
