<template>
  <div class="comment">
    <h3 class="title">コメント</h3>
    <form class="comment-form-wrapper" @submit.prevent="submitComment">
			<label>name</label>
			<input name="author" type="text" class="username-form" v-model="author_name" />
			<label>comment</label>
			<div class="send">
				<textarea name="comments" type="text" class="comment-form" required rows="4" v-model="comment"></textarea>
				<input type="image" src="/send.png" height="20px" width="20px"/>
			</div>
    </form>
		<div>
			<button class="comment-list-opener" @click="test">{{ is_open_icon }}</button>
			<comment v-if="is_open" :comment_list="comments"/>
		</div>
  </div>
</template>

<script>
import CommentCard from './_comment.vue'

export default {
	components: {
		comment: CommentCard,
	},
	data() {
		return {
			author_name: "Guest",
			comment: "",
			is_open: false,
			is_open_icon_list: ['∨', '∧'],
			is_open_icon: '∨',
			comments: []
		}
	},
	methods: {
		test(){
			this.is_open = !this.is_open;
			this.is_open_icon = this.is_open_icon_list[this.is_open ? 1 : 0];
		},
		submitComment() {
			console.log(this.author_name, this.comment);
			this.comments = 
			[
				...this.comments,
				{
					id: this.comments.length,
					author_name: this.author_name,
					comment: this.comment,
					created_at: "2021/07/03"
				}
			]
			this.comment = ''

		}
	},
}
</script>

<style lang="css" scoped>
label{
	display: block;
}
.comment-form-wrapper {
	margin-bottom: 20px;
}
.comment {
  width: 80%;
	max-width: 650px;
  margin: auto;
}
.username-form {
	width: 40%;
	margin-bottom: 10px;
  height: 80%;
  border: none;
  outline: none;
	border-bottom: 1px solid #c2c2c2;
}
.send {
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
.comment-list-opener{
	width: 100%;
	border-radius: 3px;
	border: 1px #c2c2c2 solid;
	background-color: #0000;
	font-weight: bold;
}
</style>
