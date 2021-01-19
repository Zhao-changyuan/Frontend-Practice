<template>
	<view class="icons" @click.stop="likes">
		<uni-icons size="20" color="#F07373" type="heart"></uni-icons>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		likes() {
			console.log('收藏成功')
			this.$emit('likes')
		}
	}
};
</script>

<style lang="scss">
.icons {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 20px;
	height: 20px;
	position: absolute;
	right: 0;
	top: 0;
}
</style>
