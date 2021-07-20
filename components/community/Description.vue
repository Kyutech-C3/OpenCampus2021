<template>
	<div class="allWrapper">
		<p class="name bold">{{ info.name }}</p>
		<p class="description">{{ info.description }}</p>
	</div>
</template>

<script>
export default {
props: {
	info: {
			type: Object,
			required: true,
			default: {
				name: "default",
				description: "default"
			}
		}
	}
}
</script>

<style lang="css" scoped>
div{
	--base-color: #495D7E;
	--highlight-color: #FCFB6B;
}
.allWrapper {
	margin: 0;
	width: 100%;
}
.name {
	color: var(--base-color);
	background:linear-gradient(transparent 60%, var(--highlight-color) 60%);
	font-size: calc(6.5vw + 10px);
	display: inline-block;
	white-space: nowrap;
	padding-right: 10px;
	margin-bottom: 3vw;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
.description {
	font-size: calc(0.5vw + 14px);
	margin-left: 4%;
	text-align: justify;
	text-justify: auto;
}
.description::selection{
	background: #4565863d;
}
</style>
