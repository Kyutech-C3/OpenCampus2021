<template>
  <div>
    <div class="box1">
      <h1>
        Message
      </h1>
      <p style="text-align: left">皆さんこんにちは。うんぬんかんぬんああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ万歳！まんせーまんせー！！！うぇ～～～～～～～～～～～～～～～～～～～～～～～～～～～＾い！！みんな見てる～～～～～～～～～？？？？？？？？？？？？？？？？？？？？？？？？？？？wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sample: {
      type: String,
      required: true,
      default: 'not found'
    }
  }
}
</script>

<style scoped>
  .box1 {
    padding: 0.5em 1em;
    margin: 2em 0;
    font-weight: bold;
  }
  .box1 p {
    padding-top: 50px;
    font-size: 90%;
    width:95%;
    height:600px;
    padding-left: 25%;
    padding-right: 8%;
  }
  .box1 h1 {
    border-bottom: solid 35px #fcff5d;
    color: #2f4875;
    font-size: 500%;
    height:100px;
    width:420px;
    padding-left: 5%;
  }
</style>