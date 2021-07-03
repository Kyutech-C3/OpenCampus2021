<template>
  <div class="comment">
    <h3 class="title">コメント</h3>
    <form @submit.prevent="submitComment">
			<label>name</label>
			<input name="author" type="text" class="username_form" v-model="author_name" />
			<label>comment</label>
			<div class="send">
				<textarea name="comments" type="text" class="comment-form" required rows="4" v-model="comment"></textarea>
				<input type="image" src="/send.png" height="20px" width="20px"/>
			</div>
    </form>
  </div>
</template>

<script>
export default {
	data() {
		return {
			author_name: "Guest",
			comment: "",
			comments: [
				{
					author_name: "hoge",
					comment: "すごいですね"
				},
				{
					author_name: "fuga",
					comment: "8888"
				}
			]
		}
	},
	methods: {
		submitComment() {
			console.log(this.author_name, this.comment);

		}
	},
}
</script>

<style lang="css" scoped>
label{
	display: block;
}
.comment {
  width: 80%;
	max-width: 650px;
  margin: auto;
}
.username_form{
	width: 40%;
	margin-bottom: 10px;
  height: 80%;
  border: none;
  outline: none;
	border-bottom: 1px solid #c2c2c2;
}
.send{
	display: flex;
	align-items: flex-end;
}
.comment-form {
	resize: none;
	overflow: hidden;
  width: 95%;
  border: none;
  outline: none;
	border-bottom: 1px solid #c2c2c2;
	margin-right: 10px;
}
</style>
