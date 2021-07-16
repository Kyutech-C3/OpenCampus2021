<template>
  <header>
      <Menu class="menu_bar"/>
      <div class="header_content1">
        <div class="title">C3 Open Campus</div>
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
  z-index: 1;
}
.menu_bar{
  z-index: 5;
}
.header_content1 {
  display: inline-block;
  margin-top: 20px;
  padding-right: 40%;
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
}
.year {
  color:rgba(255,255,255,0.1);
  font-size: 135px;
}
@media screen and (max-width: 1200px) {
  .header_content1 {
    padding-right: 0;
  }
}
@media screen and (max-width: 700px) {
  .title {
    color: #fff;
    font-size: 40px;
  }
  .header_content1 {
    margin-top: 40px;
  }
}
@media screen and (max-width: 481px) {
  .title {
    color: #fff;
    font-size: 30px;
  }
  .header_content1 {
    margin-top: 40px;
  }
  .year {
    font-size: 100px;
  }
  .header_content2 {
    text-align: center;
    top: 0px;
    right: 0x;
    padding-right: 5%;
  }
}
</style>
