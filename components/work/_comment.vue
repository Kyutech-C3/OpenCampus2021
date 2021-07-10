<template>
	<div class="comment-wrapper">
		<div v-for="comment_data in comment_list" v-bind:key="comment_data.id">
			<div class="comment-component">
					<p class="username-view">{{ comment_data.name }}</p>
					<p class="comment-view">{{ comment_data.text }}</p>
			</div>
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
.comment-wrapper {
	margin-right: 10%;
	margin-left: 5%;
}
.comment-component {
	display: flex;
	width: 100%;
	margin-bottom: 13px;
}
.comment-info {
	display: flex;
	flex-direction: column;
}
.username-view {
	width: calc(4vw + 40px);
	padding-right: 15px;
	border-right: 1px black solid;
}
.comment-view {
	padding-left: 15px;
	max-width: calc(60vw - 30px);
}
</style>