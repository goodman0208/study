<template>
    <div>
        <div class="schoolTop">
            <div class="topLeft" @click="backBtn"><i class="el-icon-arrow-left"></i></div>
            <div class="topContent">高等教育</div>
        </div>
        <div class="schoolBanner">
            <h4 class="bannerText">
                <span class="bannerTextA">测测哪种职业更适合自己？</span>
                <span class="bannerTextB">立即前往<i class="el-icon-arrow-right"></i></span>
            </h4>
        </div>
        <div class="info">
            <div class="infoTitle">
                <div class="infoTitleOne">
                    <div class="infoTitleA">
                        <img class="infoTitleImgA" :src="ph1" alt="">
                        <img class="infoTitleImgB" src="../../assets/classPh.png" alt="">
                        <div class="phText"><span>录取照片</span><span class="phTextTwo">学历照片</span></div>
                    </div>
                    <div class="infoTitleB">
                        <h5 class="names">{{ nickName }}</h5>
                        <p class="birthday">{{ sex == 1 ? '男' : '女' }}&nbsp;&nbsp;&nbsp;&nbsp;2001年06月28日</p>
                    </div>
                </div>
                <div class="infoTitleTwo">
                    <div class="schoolText">
                        <div class="schoolTextA">西安建筑科技大学华清学院</div>
                        <div class="schoolTextB">本科</div>
                    </div>
                    <div class="major">
                        <div class="majorText">计算机科学与技术&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;普通全日制</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="infoContent">
            <ul class="infoContentUl">
                <li>
                    <div class="contentLeft">民族</div>
                    <div class="contentRight">汉族</div>
                </li>
                <li>
                    <div class="contentLeft">证件号码</div>
                    <div class="contentRight">{{ idCard }}</div>
                </li>
                <li>
                    <div class="contentLeft">学制</div>
                    <div class="contentRight">4年</div>
                </li>
                <li>
                    <div class="contentLeft">学历类别</div>
                    <div class="contentRight">普通高等教育</div>
                </li>
                <li>
                    <div class="contentLeft">分院</div>
                    <div class="contentRight">机电工程学院</div>
                </li>
                <li>
                    <div class="contentLeft">系所</div>
                    <div class="contentRight"></div>
                </li>
                <li>
                    <div class="contentLeft">班级</div>
                    <div class="contentRight"></div>
                </li>
                <li>
                    <div class="contentLeft">学号</div>
                    <div class="contentRight">202306090141</div>
                </li>
                <li>
                    <div class="contentLeft">入学日期</div>
                    <div class="contentRight">2023年09月01日</div>
                </li>
                <li>
                    <div class="contentLeft">预计毕业日期</div>
                    <div class="contentRight">2027年07月01日</div>
                </li>
                <li>
                    <div class="contentLeft">学籍状态</div>
                    <div class="contentRight">在籍（注册学籍）</div>
                </li>
            </ul>
        </div>
        <div class="footerBtn">
            <div class="footerText">申请验证报告</div>
        </div>
    </div>
</template>

<script>
import "@/utils/flexible"; //移动端适配
export default {
    name: 'shcool',
    components: {},
    created() {},
    watch: {
        
    },
    data() {
        return {
            
        };
    },
    methods: {
        backBtn(){
            localStorage.setItem("nickName1t", '');
            localStorage.setItem("sex1t", '');
            localStorage.setItem("idCard1t", '');
            localStorage.setItem("photo1t",'');
            this.$router.push("/login");
        }
    },
    computed: {
        nickName(){
            return localStorage.getItem("nickName1t");
        },
        sex(){
            return localStorage.getItem("sex1t");
        },
        ph1(){
            return localStorage.getItem("photo1t");
        },
        idCard(){
            return localStorage.getItem("idCard1t");
        },
    },
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="scss" scoped>
.schoolTop{
    background-color: #fff;
    height: 46px;
    display: flex;
    padding-left: 16px;
}
.topLeft{
    font-size: 14px;
    height: 46px;
    line-height: 46px;
}
.topContent{
    width: 314px;
    height: 46px;
    font-size: 16px;
    font-weight: 500;
    line-height: 46px;
}
.bannerText{
    width: 230px;
    margin-left: 10px;
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
}
.bannerTextA{
    font-size: 16px;
    font-weight: 700;
    color: #456cee;
}
.bannerTextB{
    margin-top: 6px;
    font-size: 10px;
    font-weight: 400;
    background:#456cee;
    color: #fff;
    height: 17px;
    line-height: 17px;
    padding: 0 5px 0 5px;
    border-radius: 7%;
}
.schoolBanner{
    height: 62px;
    margin: 12px 16px 0px;
    background: #e7ecff url(../../assets/shcoolBanner.png) no-repeat;
    background-size: 100% 100%;
}
.info{
    margin: 10px 16px 0px 16px;
    height: 193px;
    color: #fff;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(63, 203, 146, .4);
    background: linear-gradient(180deg, #1faf7f, #3fcb92);
}
.infoTitle{
    padding: 20px 16px;
    height: 153px;
}
.infoTitleOne{
    display: flex;
    justify-content: flex-start;
    width: 311px;
    height: 83px;
}
.infoTitleImgA{
    width: 45px;
    height: 58px;
    border-radius: 7px;
}
.infoTitleImgB{
    margin-left: 13px;
    width: 50px;
    height: 65px;
}
.phText{
    font-size: 10px;
    text-align: left;
    margin-left: 2.6px;
}
.phTextTwo{
    margin-left: 18px;
}
.infoTitleB{
    margin-left: 13px;
}
.names{
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
    text-align: left;
}
.birthday{
    margin-top: 5px;
    font-size: 12px;
}
.infoTitleTwo{
    margin-top: 18px;
}
.schoolText{
    display: flex;
}
.schoolTextA{
    font-size: 18px;
    line-height:25px;
    font-weight: 500;
    text-align: left;
}
.schoolTextB{
    margin-top: 4px;
    margin-left: auto;
    padding: 0 8px;
    font-size: 12px;
    line-height: 20px;
    height: 20px;
    text-align: center;
    border-radius: 10px;
    background: #1da36e
}
.major{
    margin-top: 9px;
    font-size: 13px;
    text-align: left;
}
.infoContent{
    margin: 20px 16px 20px 16px;
    height: 375px;
    // color: #fff;
}
.infoContentUl{
    font-size: 14px;
    line-height: 20px;
    word-break: break-all;
    list-style: none;
    li{
        display: flex;
        padding: 7px 0;
        vertical-align: top;
        list-style: none;
    }
    .contentLeft{
        width: 37.5%;
        text-align: right;
        color: #999;
    }
    .contentRight{
        width: 62.5%;
        text-align: left;
        padding-left: 20px;
    }
}
.footerBtn{
    margin: 0px 16px 20px;
}
.footerText{
    color: #fff;
    background-color: #26b887;
    border: 1px solid #26b887;
    height: 46px;
    line-height: 46px;
    font-size: 16px;
    width: 100%;
    border-radius: 3px;
}
</style>