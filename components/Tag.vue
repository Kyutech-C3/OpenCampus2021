<template>
	<div
		class="tag"
		:style="small ? smallStyle : style"
		:class="{selected, deletable, small}"
	>
		<div>
			{{ tag.name }}
		</div>
		<font-awesome-icon
			icon="times"
			v-if="deletable"
			class="delete-button"
			@click="$emit('delete', tag)"
		/>
	</div>
</template>
<script>
export default {
	name: 'Tag',
	model: {
		event: 'select',
		prop: 'selected'
	},
	props: {
		tag: {
			type: Object,
			require: true,
			default: () => ({
				id: 1,
				name: 'Hack',
				color: '#FF0000'
			})
		},
		deletable: {
			type: Boolean,
			require: false,
			default: () => (false)
		},
		small: {
			type: Boolean,
			require: false,
			default: () => (false)
		}
	},
	computed: {
		style() {
			return `background-color: ${this.tag.color};`
		},
		smallStyle() {
			return `color: ${this.tag.color}; border: solid 1.5px ${this.tag.color}`
		}
	},
}
</script>
<style scoped>
.tag {
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 5px 10px;
	font-size: 1rem;
	color: #ffffff;
	border-radius: 15.5px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 3px 5px;
}
.small {
	font-size: 12px;
}
.delete-button {
	vertical-align: middle;
	margin-left: 8px;
	font-size: 12px;
	cursor: pointer;
}
.selected {
	opacity: 1;
}
</style>