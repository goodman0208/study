<template>
  <div class="hello">
    <son />
    <h1>{{ msg }}</h1>
    <h1 style="background-color: aquamarine" @click="test">map！！</h1>
    <h1 style="background-color: aquamarine" @click="test1">forEach！！</h1>
    <h1 style="background-color: aquamarine" @click="test2">some！！</h1>
    <h1 style="background-color: aquamarine" @click="test3">filter！！</h1>
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
import son from "./son.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components:{
    son,
  },
  data() {
    return {
      atry: 123,
    };
  },
  methods: {
    test() {
      let arr = [5,7,1,3];
      console.log(arr)
      let result = arr.map(item => {
        return item * 10
        // console.log(this, "this");
      },123);
      console.log(result,'resultMap')
    },
    test1(){
      let arr = ["a", "b", "c", "d"];
      let result = arr.forEach((item, index, arr) => {
        console.log(item, "item");
        return item
        // console.log(this, "this");
      }, 123);
      console.log(result,'resultForEach')
    },
    test2(){
      let arr = [1,4,5,7,10];
      let result = arr.some((item, index, arr) => {
        return item > 4
        // console.log(this,'this');
      }, 123);
      console.log(result,'resultSome')
    },
    test3(){
      let arr = [5,1,3,7,2];
      let result = arr.filter((item, index, arr) => 
        item > 3
        // console.log(this, "this");
      );
      console.log(result,'resultFilter')
    },
  },
  created(){
    console.log('父created')
  },
  beforeCreate(){
    console.log('父created前')
  },
  mounted(){
    console.log('父mounted')
  },
  beforeMount(){
    console.log('父mounted前')
  },
  beforeDestroy(){
    console.log('父beforeDestroy')
  },
  destroyed(){
    console.log('父destroyed')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
