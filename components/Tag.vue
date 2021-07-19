<template>
	<div
		class="tag"
		:style="outline ? outlineStyle : style"
		:class="{ selected, deletable, small, 'extra-small': extraSmall }"
	>
		<div class="bold">
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
		},
		extraSmall: {
			type: Boolean,
			require: false,
			default: () => (false)
		},
		outline: {
			type: Boolean,
			require: false,
			default: () => (false)
		}
	},
	computed: {
		style() {
			return `background-color: ${this.tag.color};`
		},
		outlineStyle() {
			return `color: ${this.tag.color}; border: solid 1.5px ${this.tag.color}`
		}
	},
}
</script>
<style scoped>
.tag {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	white-space: nowrap;
	align-items: center;
	padding: 5px 15px;
	font-size: 1rem;
	color: #ffffff;
	border-radius: 15.5px;
}
.small {
	font-size: 12px;
}
.extra-small {
	font-size: 12px;
	padding: 3px 12px;
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
