<template>
	<div class="comment">
		<p class="title"><font-awesome-icon class="icon" :icon="['far', 'comment-dots']" />コメントする</p>
		<form class="comment-form-wrapper" @submit.prevent="submitComment">
				<label>ニックネーム</label>
				<input name="author" type="text" class="username-form" v-model="author_name" required />
				<label>コメント</label>
				<textarea name="comments" type="text" class="comment-form" required rows="4" v-model="comment"></textarea>
				<button class="send-button" type="submit"><font-awesome-icon class="icon" icon="paper-plane"/>送信</button>
		</form>
		<p class="title"><font-awesome-icon class="icon" icon="comments"/>コメント</p>
		<div>
			<comment :comment_list="preview_comments"/>
			<comment v-if="is_open" :comment_list="comments"/>
			<button v-if="comments.length > 0" class="comment-list-opener" @click="SwitchCommentList">{{ is_open_icon }}</button>
		</div>
	</div>
</template>

<script>
import CommentCard from './_comment.vue'

export default {
	components: {
		comment: CommentCard,
	},
	props: {
		work_num: {
			type: Number,
			require: true
		},
		comment_list: {
			type: Array,
			require: true
		}
	},
	data() {
		return {
			author_name: "Guest",
			comment: "",
			is_open: false,
			is_open_icon_list: ['∨ もっと見る', '∧ 閉じる'],
			is_open_icon: '∨ もっと見る',
			comments: [],
			preview_comments: []
		}
	},
	mounted() {
		this.comments = this.comment_list;
		this.preview_comments = this.comments.splice(0, 2);
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
			this.$axios.post('/works/' + String(this.work_num) + '/comments/', payload)
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
.icon {
	margin-right: 7px; 
}
label{
	display: block;
}
.title {
	font-size: 20px;
}
.comment-form-wrapper {
	margin-left: 7%;
	margin-bottom: 20px;
}
.username-form {
	width: 35%;
	margin-bottom: 10px;
	height: 25px;
	font-size: 16px;
	border: none;
	outline: none;
	background-color: #EEE;
	border-radius: 3px;
}
.comment-form {
	padding: 5px;
	font-size: 14px;
	resize: none;
	overflow: hidden;
	width: 100%;
	border: none;
	outline: none;
	margin-right: 10px;
	background-color: #EEE;
	border-radius: 3px;
}
.comment-list-opener{
	width: 100%;
	border-radius: 3px;
	border: 0px #c2c2c2 solid;
	background-color: #0000;
	font-weight: bold;
}
.send-button{
	font-size: 15px;
	margin: 10px 0;
	padding: 3px 32px;
	border-radius: 6px;
	background-color: #0000;
	border: 2px #777 solid;
}
</style>
