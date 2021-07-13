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
	margin-left: 7%;
}
.comment-component {
	display: flex;
	width: 100%;
	margin-bottom: 13px;
}
.username-view {
	flex-basis: 15%;
	flex-shrink: 0;
	padding-right: 15px;
	border-right: 1px black solid;
	word-break: break-all;
}
.comment-view {
	padding-left: 15px;
	flex-basis: auto;
	/* width: calc(75vw - 25px); */
}
</style>