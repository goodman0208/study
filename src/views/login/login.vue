<template>
  <div>
    <div class="mother">
      <div class="loginBanner"></div>
      <div style="padding-top: 13px">
        <el-form
          :model="SForm"
          ref="SFormRef"
          :rules="rules"
          :inline="false"
          size="medium"
        >
          <el-form-item prop="name">
            <el-input v-model="SForm.name" placeholder="姓名" clearable></el-input>
          </el-form-item>
          <el-form-item prop="sex">
            <el-select v-model="SForm.sex" placeholder="性别" style="width: 100%;" clearable>
                <el-option label="男" :value="1" />
                <el-option label="女" :value="2" />
            </el-select>
          </el-form-item>
          <el-form-item prop="idCard">
            <el-input v-model="SForm.idCard" type="number" placeholder="身份证号" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
        <!-- <div class="footText"><span>找回密码</span><span v-show="SForm.photo1 && SForm.photo2">已上传照片</span><span @click="phRegister">注册</span></div> -->
        <div class="footText"><span>找回密码</span><span v-show="SForm.photo1">已上传照片</span><span @click="phRegister">注册</span></div>
        <el-dialog :visible.sync="phVisible" width="300px" :before-close="phClose" >
          <!-- <div class="phtext"><span>录取照片</span><span>学历照片</span></div> -->
          <div class="phtext"><span>录取照片</span></div>
          <div class="photo">
            <el-upload
              action="#"
              list-type="picture-card"
              :on-change="fileChange"
              :on-remove="handleRemove"
              :on-preview="previewChange"
              :auto-upload="false"
              :limit="1"
              :class="{ hide_box: listLengthTag === 1 }"
              :ref="'upload1'"
            >
              <i class="el-icon-plus"> </i>
            </el-upload>
            <!-- <el-upload
              action="#"
              list-type="picture-card"
              :on-change="fileChange2"
              :on-remove="handleRemove2"
              :on-preview="previewChange"
              :auto-upload="false"
              :limit="1"
              :class="{ hide_box: listLengthTag2 === 1 }"
              :ref="'upload2'"
            >
              <i class="el-icon-plus"> </i>
            </el-upload> -->
          </div>
          <div slot="footer">
            <el-button size="mini" @click="phClose">返回</el-button>
          </div>
        </el-dialog>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </div>
    </div>
    <div class="footer">
      <div class="footerA">
        <span @click="backBtn">首页</span>
        <span>帮助中心</span>
        <span>学信机器人</span>
        <span>联系我们</span>
      </div>
      <div class="footerB">
        <span>Copyright © 2003-2024 学信网 All Rights Reserved</span>
      </div>
    </div>
  </div>
</template>

<script>
import "@/utils/flexible"; //移动端适配
export default {
  name: "login",
  components: {},
  created() {},
  watch: {},
  data() {
    return {
      SForm: {
        name: "",
        sex: "",
        photo1: "",
        // photo2: "",
        idCard: "",
      },
      phVisible: false,
      dialogImageUrl: "",
      dialogVisible: false,
      listLengthTag: 0,
      listLengthTag2: 0,
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        sex: [{ required: true, message: "请输入性别", trigger: "change" }],
        idCard: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    backBtn(){
      localStorage.setItem("nickName1t", '');
      localStorage.setItem("sex1t", '');
      localStorage.setItem("idCard1t", '');
      localStorage.setItem("photo1t",'');
      this.SForm = {
        name: "",
        sex: "",
        photo1: "",
        idCard: "",
      },
      this.$router.push("/");
    },
    phRegister(){
      this.phVisible = true;
    },
    onSubmit() {
      // if(this.SForm.photo1 && this.SForm.photo2){
      if(this.SForm.photo1){
        this.$refs.SFormRef.validate((valid) => {
          if (valid) {
            localStorage.setItem("nickName1t", this.SForm.name);
            localStorage.setItem("sex1t", this.SForm.sex);
            localStorage.setItem("idCard1t", this.SForm.idCard);
            this.$router.push("/shcool");
          }
        });
      }else{
        this.$message.error("请点击右下角注册并上传照片");
      }
    },
    phClose(){
      this.phVisible = false;
    },
    fileChange(response, file, fileList) {
	    this.SForm.photo1 = URL.createObjectURL(response.raw);
      this.listLengthTag = 1;
      localStorage.setItem("photo1t", this.SForm.photo1);
    },
    handleRemove(file, fileList) {
      this.SForm.photo1 = '';
      this.listLengthTag = 0;
      localStorage.removeItem("photo1t");
    },
    // fileChange2(response, file, fileList) {
    //   this.SForm.photo2 = URL.createObjectURL(response.raw);
    //   this.listLengthTag2 = 1;
    //   localStorage.setItem("photo2", this.SForm.photo2);
    // },
    // handleRemove2(file, fileList) {
    //   this.SForm.photo2 = '';
    //   this.listLengthTag2 = 0;
    //   localStorage.removeItem("photo2");
    // },
    previewChange(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
  width: 100vw;
  min-height: 90vh;
}
.loginBanner{
  width: 100%;
  height: 140px;
  background: url(../../assets/loginBanner.png) no-repeat;
  background-size: 100% 100%;
}
::v-deep .el-form-item {
  margin-bottom: 20px;
  margin-left: 27px;
  width: 321px;
}
::v-deep .el-input--medium .el-input__inner {
  height: 48px;
  line-height: 48px;
}
::v-deep .el-button--medium {
  width: 321px;
  height: 48px;
}
::v-deep .el-button--success {
  background-color: rgb(36, 184, 134);
  border-color: rgb(36, 184, 134);
}
.hide_box {
  ::v-deep .el-upload--picture-card {
    display: none;
  }
}
.phtext {
  // display: flex;
  // justify-content: space-around;
  color: rgb(121, 121, 121);
  margin-bottom: 20px;
}
.footText{
  margin: -18px 27px 0 27px;
  display: flex;
  justify-content: space-between;
  color: rgb(131, 131, 131);
  font-size: 14px;
}
// .photo {
//   display: flex;
//   justify-content: space-evenly;
// }
.footerA {
  min-height: 5vh;
  display: flex;
  justify-content: space-between;
  margin: 0 45px;
  color: rgb(131, 131, 131);
  font-size: 14px;
}
.footerB {
  background-color: rgb(247, 248, 250);
  min-height: 5vh;
  color: rgb(142, 147, 153);
  font-size: 13px;
  line-height: 5vh;
}
</style>
<style>
.el-message {
  min-width: 300px !important;
}
</style>