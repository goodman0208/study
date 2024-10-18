<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to 10086" /> -->
    <div class="nav">
      <img src="../assets/nav.png" alt="" />
    </div>
    <div class="mother">
      <div class="logo" @click="logoClick"></div>
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name:'HomeView',
  components:{
    HelloWorld,
  },
  methods:{
    logoClick() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang=scss>
.mother {
  background:url(../assets/home.png);
  width:100vw;
  min-height:100vh;
  background-size:100% 100%;
  background-repeat:no-repeat;
  .logo {
    position:absolute;
    top:162px;
    left:20px;
    width:157px;
    height:45px;
  }
}
.nav {
  img {
    width:100%;
    height:100%;
  }
}
</style>