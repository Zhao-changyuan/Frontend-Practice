<template>
	<view class="icons" @click.stop="likes">
		<uni-icons size="20" color="#F07373" :type="like ? 'heart-filled' : 'heart'"></uni-icons>
	</view>
</template>

<script>
export default {
	props:{
		item: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	data() {
		return {
			like: false
		};
	},
	watch: {
		item(newVal, oldVal) {
			this.like = newVal.is_like
		}
	},
	created() {
		this.like = this.item.is_like
	},
	methods: {
		likes() {
			this.like = !this.like
			this.updateLikes()
		},
		updateLikes() {
			uni.showLoading()
			this.$api.update_like({
				user_id: '600639df770c790001d03abc',
				article_id: this.item._id
			}).then(res => {
				uni.hideLoading()
				uni.showToast({
					title: this.like ? '收藏成功' : '取消收藏',
					icon: null
				})
				console.log(res);
			}).catch(() => {
				uni.hideLoading();
			});
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
