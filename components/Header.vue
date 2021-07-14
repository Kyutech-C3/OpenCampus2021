<template>
  <header>
      <Menu class="menu"/>
      <div class="a dai">
        <p class="title">C3 Open Campus</p>
      </div>
      <div class="a"><p class ="toshi">2021</p></div>
  </header>
</template>

<script>
import Menu from './Menu.vue'
export default {
  components: {
		Menu,
	},
}
</script>

<style scoped>
header{
  background-color:  #304B66;
  width: 100%;
}
.a{
  display: inline-block;
  padding-right:  10%;
  padding-left: 3%;
}
.title {
  color: #fff;
    padding-left: 10%;
    font-size: 50px;
    z-index: 4;
}
.dai{
      text-align: center;
}
.toshi {
    color:rgba(255,255,255,0.1);
    font-size: 100px;
    text-align: right;
    z-index: 3;
}
.menu{
 position: absolute;
 z-index: 5;
 
}
</style>