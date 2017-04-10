<template>
  <div id="container">
    <TopBar></TopBar>
    <NavMenu></NavMenu>
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
import TopBar from './TopBar.vue';
import NavMenu from './NavMenu.vue'
export default {
  components: {
    TopBar,NavMenu
  },
};

</script>
