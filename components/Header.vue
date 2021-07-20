<template>
  <header>
      <Menu class="menu_bar"/>
      <div class="header_content1">
        <a href="/" class="title" title="HOME">C3 Open Campus</a>
      </div>
      <div class="header_content2">
        <div class="year">2021</div>
      </div>
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
  position: fixed;
  background-color:  #304B66;
  width: 100%;
  height: 120px;
  text-align: center;
  z-index: 20;
  -webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
  overflow: hidden;
}
.menu_bar{
  z-index: 99;
}
.header_content1 {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
.header_content2 {
  display: inline-block;
  position: absolute;
  top: -10px;
  right: 50px;
}
.title {
  color: #fff;
  font-size: 65px;
  cursor: pointer;
  /* color: inherit; */
  text-decoration: none;
}
.year {
  color:rgba(255,255,255,0.1);
  font-size: 135px;
}
@media screen and (min-width: 1300px) {
  .header_content1 {
    left: 30%;
  }
}
@media screen and (max-width: 700px) {
  .title {
    color: #fff;
    font-size: 40px;
  }
}
@media screen and (max-width: 481px) {
  header{
    height: 65px;
  }
  .title {
    color: #fff;
    font-size: 25px;
  }
  .year {
    font-size: 70px;
  }
  .header_content2 {
    text-align: center;
    top: -2px;
    right: 0x;
    padding-right: 15%;
  }
}
</style>
