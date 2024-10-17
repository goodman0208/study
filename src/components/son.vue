<template>
  <div>
    <span v-if="!haha">if</span>
    <span v-show="haha">show</span>
  </div>
</template>

<script>
export default {
  components: {},
  created() {},
  name: "son",
  watch: {},
  data() {
    return {
        haha:true
    };
  },
  methods: {},
  created() {
    console.log("子created");
  },
  beforeCreate() {
    console.log("子created前");
  },
  mounted() {
    console.log("子mounted");
  },
  beforeMount() {
    console.log("子mounted前");
  },
  beforeDestroy() {
    console.log("子beforeDestroy");
  },
  destroyed() {
    console.log("子destroyed");
  },
};
</script>
<style lang="scss" scoped></style>
