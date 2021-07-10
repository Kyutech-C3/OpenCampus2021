<template>
	<div class="allWrapper">
		<p class="name">{{ info.name }}</p>
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
	margin: 0 5vw;
}
.name {
	color: var(--base-color);
	background:linear-gradient(transparent 60%, var(--highlight-color) 60%);
	font-size: calc(6.5vw + 10px);
	display: inline-block;
	white-space: nowrap;
	padding-right: 10px;
	margin-bottom: 3vw;
}
.description {
	font-size: calc(1vw + 7px);
	margin: 0 4%;
}
</style>
