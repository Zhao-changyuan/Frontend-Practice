<template>
	<view class="scroll">
		<scroll-view scroll-y="true" class="list-scroll" @scrolltolower="loadmore">
			<!-- 滚动内容再包一层，可以避免无法滚动或样式的问题 -->
			<view><slot></slot></view>
		</scroll-view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		loadmore() {
			this.$emit('loadmore')
		}
	}
};
</script>

<style lang="scss">
.scroll {
	flex: 1;
	overflow: hidden;
	box-sizing: border-box;

	.list-scroll {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
}
</style>
