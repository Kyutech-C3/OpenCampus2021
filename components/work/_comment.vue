<template>
	<div class="comment-list-wrapper">
		<div v-for="comment in comment_list" v-bind:key="comment.id" class="comment-wrapper">
			<p class="comment-name">{{ comment.name }}</p>
			<p class="comment-text">{{ comment.text }}</p>
			<p class="comment-date">{{ getDate(comment.created_at) }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		comment_list: {
			default: []
		}
	},
	methods: {
		getDate(datetime) {
			let formatted_datetime = new Date(datetime);
			return `${formatted_datetime.getFullYear()}/${this.zeroPadding(formatted_datetime.getMonth()+1, 2)}/${this.zeroPadding(formatted_datetime.getDate(), 2)} ${this.zeroPadding(formatted_datetime.getHours(), 2)}:${this.zeroPadding(formatted_datetime.getMinutes(), 2)}:${this.zeroPadding(formatted_datetime.getSeconds(), 2)}`
		},
		zeroPadding(num,length) {
			return ('0000000000' + num).slice(-length);
		}
	}
}
</script>

<style lang="css" scoped>
.comment-list-wrapper {
	margin-left: 7%;
}
.comment-wrapper {
	margin-bottom: 10px;
	background-color: #EEE5;
	border-radius: 5px;
}
.comment-name {
	font-weight: bold;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	padding: 5px 5px 0 5px;
}
.comment-text {
	padding: 0 5px;
	word-break: break-all;
}
.comment-text::selection, .comment-name::selection {
	background: #4565863d;
}

.comment-date {
	font-size: 11px;
	text-align: right;
	padding: 5px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
</style>
