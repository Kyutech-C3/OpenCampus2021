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
			<button class="comment-list-opener" @click="SwitchCommentList">{{ is_open_icon }}</button>
			<comment v-if="is_open" :comment_list="comments"/>
		</div>
  </div>
</template>

<script>
import CommentCard from './_comment.vue'
import axios from 'axios'

export default {
	components: {
		comment: CommentCard,
	},
	props: {
		work_num: {
			type: Number,
			require: true
		}
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
	mounted() {
		this.$nextTick(function () {
			console.log(this.work_num);
			axios.get('https://shared-vps.compositecomputer.club/api/v1/works/' + String(this.work_num) + '/comments/')
			.then((res) => {
				this.comments = res.data;
			})
			.catch((err) => {
				alert(err);
				console.error(err);
			})
		})
	},
	methods: {
		SwitchCommentList(){
			this.is_open = !this.is_open;
			this.is_open_icon = this.is_open_icon_list[this.is_open ? 1 : 0];
		},
		submitComment() {
			console.log(this.author_name, this.comment);
			let payload = {
				name: this.author_name,
				text: this.comment
			}
			axios.post('https://shared-vps.compositecomputer.club/api/v1/works/' + String(this.work_num) + '/comments/', payload)
			.then((res) => {
				this.comments = [
					...this.comments,
					res.data,
				];
			})
			.catch((err) => {
				alert(err);
				console.error(err);
			})
			this.comment = ''
			if(!this.is_open)
				this.SwitchCommentList()
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
