<template>
  <el-row class="top-bar">
    <div class="top-wrapper">
      <div class="user-area pull-right">
        <div class="user-avatar">
          <span class="avatar-img" :style="{ backgroundImage: 'url(' + avatar_url + ')' }"></span>
          <i class="el-icon-arrow-down"></i>
          <div class="drop-menu">
            <ul>
              <li><i class="iconfont">&#xe603;</i>管理员</li>
              <li @click="signOut"><i class="iconfont">&#xe602;</i>退出</li>
            </ul>
          </div>
        </div>
      </div>
      <el-col :span="8" class="search-area pull-right">
        <el-form>
          <el-form-item>
            <i class="el-icon-search"></i>
            <el-input placeholder="搜索"></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </div>
  </el-row>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        avatar_url: 'http://img0.imgtn.bdimg.com/it/u=1787407765,2524017231&fm=11&gp=0.jpg',
      };
    },
    methods: {
      signOut() {
        console.log('退出登录');
        let self = this;
        self.$router.push('/login');
      },
    },
  };
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "./css/Config";

  .top-bar {
    /*width: 100%;*/
    height: 60px;
    background: $ft_color;
    .top-wrapper {
      margin-right: 64px;
    }
    .search-area {
      padding: 16px 10px;
      height: 100%;
      max-width: 320px;
      .el-form-item {
        margin: 0;
        border-radius: 16px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, .3);
        .el-icon-search {
          top: 0;
          right: 0;
          font-size: 20px;
          position: absolute;
          z-index: 1;
          width: 32px;
          line-height: 32px;
          border-radius: 16px;
          text-align: center;
          background-color: $bg_color1;
        }
      }
      .el-form-item__content {
        line-height: 1;
      }
      .el-input {
        position: relative;
        height: 32px;
        input {
          height: 32px;
          border: none;
          float: right;
          color: #F9FAFC;
          opacity: 1;
          border-radius: 16px;
          background-color: $bg_color1;
          &::-webkit-input-placeholder {
            color: $a_color;
          }
          &::-moz-placeholder {
            color: $a_color;
          }
          &:-ms-input-placeholder {
            color: $a_color;
          }
        }
      }
    }
    .user-area {
      padding: 16px 10px;
      display: inline-block;
      position: relative;
      &:hover {
        background-color: $bg_color1;
        .drop-menu {
          display: block;
        }
      }
      .user-avatar {
        height: 32px;
        .avatar-img {
          display: inline-block;
          width: 32px;
          height: 32px;
          border-radius: 16px;
          margin-right: 10px;
          vertical-align: middle;
          background: center no-repeat;
          background-size: cover;
          background-color: #D8D8D8;
        }
        .el-icon-arrow-down {
          vertical-align: middle;
          font-size: 12px;
          color: $a_color;
        }
      }
    }
    .drop-menu {
      position: absolute;
      right: 0;
      top: 60px;
      display: none;
      width: 140px;
      z-index: 1;
      background-color: $bg_color1;
      box-shadow: 0 5px 20px rgba(0, 0, 0, .3);
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      li {
        padding: 12px 20px;
        cursor: pointer;
        line-height: 1;
        font-size: 14px;
        &:hover {
          background-color: $hover_color;
        }
      }
      .iconfont {
        font-size: 20px;
        margin-right: 10px;
      }
    }
  }
</style>
