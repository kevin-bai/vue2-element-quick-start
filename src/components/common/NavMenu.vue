<template lang="html">
      <el-menu default-active="1" id="nav-menu" v-show="isShow">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i>导航一</template>
          <el-menu-item index="1-1">
            <router-link to="/page1" class="nav-link">page1</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/page2" class="nav-link">page2</router-link>
          </el-menu-item>
          <el-menu-item index="1-3">
            <router-link to="/page3" class="nav-link">page3</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>导航二</template>
          <el-menu-item index="2-1" @click="toggleMenu">点击隐藏</el-menu-item>
        </el-submenu>
      </el-menu>
</template>
<script type="text/ecmascript-6">
  export default{
    data() {
      return {
        isShow: true,
      };
    },
    methods: {
      toggleMenu() {
        console.log('toggle');
        this.isShow = !this.isShow;
      },
    },
  };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "./css/Config";

  #nav-menu {
    flex: 0;
    width: 200px;
    /*height: calc(100% - 72px);*/
    border-radius: 0;
    background-color: #ffffff;
    box-shadow: 5px 0 20px rgba(0, 0, 0, .3);
    .logo {
      width: 100%;
      /*height: 60px;*/
      text-align: center;
      background-color: $bg_color1;
      img {
        margin-top: 12px;
      }
    }
    .nav-link {
      display: block;
    }
    .el-menu {
      background-color: $bg_color;
    }
    .el-submenu{
      width: 155px;
      color: #ffffff;
      .el-submenu__title{
        color: red;
      }
    }
    .el-menu-item,
    .el-submenu .el-submenu__title {
      height: 44px;
      width: 155px;
      line-height: 44px;
      &:hover {
        background-color: $hover_color;
      }
    }
    .router-link-active {
      color: #03a9f4;
    }
  }
</style>
