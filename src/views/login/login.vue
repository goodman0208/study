<template>
    <div>
      <div class="mother">
        <div style="padding-top: 153px;">
            <el-form :model="SForm" ref="SFormRef" :rules="rules" :inline="false" size="medium">
              <el-form-item prop="name">
                  <el-input v-model="SForm.name" placeholder="姓名"></el-input>
              </el-form-item>
              <el-form-item prop="sex">
                  <el-input v-model="SForm.sex" placeholder="性别"></el-input>
              </el-form-item>
              <el-form-item prop="idCard">
                  <el-input v-model="SForm.idCard" placeholder="身份证号"></el-input>
              </el-form-item>
                  <!-- <el-input v-model="SForm.photo1"></el-input>
                  <el-input v-model="SForm.photo2"></el-input> -->
              <el-form-item>
                  <el-button type="success" @click="onSubmit">登录</el-button>
              </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:'login',
    components: {},
    created() {},
    watch: {},
    data() {
      return {
          SForm:{
              name:'',
              sex:'',
              photo1:'',
              photo2:'',
              idCard:'',
          },
          rules:{
              name:[
                  {required:true,message:'请输入姓名',trigger:'blur'},
              ],
              sex:[
                  {required:true,message:'请输入性别',trigger:'blur'},
              ],
              idCard:[
                  {required:true,message:'请输入身份证号',trigger:'blur'},
              ],
          }
      };
    },
    methods: {
      onSubmit(){
          this.$refs.SFormRef.validate((valid)=>{
              if(valid){
                  this.$router.push('/')
              }
          })
      },
    },
    computed: {},
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  };
  </script>
  <style lang="scss" scoped>
  .mother {
    background: url(../../assets/login.png);
    width: 100vw;
    min-height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  ::v-deep .el-form-item{
    margin-bottom: 20px;
    margin-left: 27px;
    width: 321px;
  }
  ::v-deep .el-input--medium .el-input__inner{
    height: 48px;
    line-height: 48px;
  }
  ::v-deep .el-button--medium{
    width: 321px;
    height: 48px;
  }
  ::v-deep .el-button--success{
    background-color: rgb(36, 184, 134);
    border-color: rgb(36, 184, 134);
  }
  </style>
  