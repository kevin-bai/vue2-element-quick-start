<template lang="html">
  <div class="home">
    <TopBar></TopBar>
    <div class="content">
      <NavMenu></NavMenu>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import '../../components/common/css/style.scss';
  import NavMenu from '../../components/common/NavMenu.vue';
//  import Container from '../../components/common/Container.vue';
  import TopBar from '../../components/common/TopBar.vue';

  export default {
    components: {
      NavMenu,TopBar
    },
  };
</script>
<style lang="scss" rel="stylesheet/scss"  scoped>
  .home {
    width: 100%;
    .content{
      display: flex;
      width: 100%;
      min-height: calc(100% - 60px);
      background: none repeat scroll 0 0 #fff;
      position: absolute;
      right: 0;
      top: 60px;
      box-sizing: border-box;
    }
  }
</style>
