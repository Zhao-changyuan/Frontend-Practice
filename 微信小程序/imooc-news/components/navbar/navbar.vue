<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<view :style="{height: statusBarHeight + 'px'}"></view>
			<!-- 导航栏内容 -->
			<view class="navbar-content" :class="{search: isSearch}" @click.stop="open" :style="{height: navBarHeight + 'px', width: windowWidth + 'px'}">
				<view v-if="isSearch" class="navbar-content__search-icons" @click="back">
					<uni-icons type="back" size="22" color="#FFF"></uni-icons>
				</view>
				
				<view v-if="!isSearch" class="navbar-search">
					<!-- 非搜索页显示 -->
					<view class="navbar-search_icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">uni-app vue</view>
				</view>
				<view v-else class="navbar-search">
					<input class="navbar-search_text" type="text" @input="inputChange" v-model="val" placeholder="请输入您要搜索的内容" />
				</view>
			</view>
		</view>
		<view :style="{ height: (statusBarHeight + navBarHeight) + 'px' }"></view>
	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: [String, Number],
				default: ''
			},
			isSearch: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: 375,
				val: ''
			};
		},
		watch: {
			value(newVal) {
				this.val = newVal
			}
		},
		created() {
			const info = uni.getSystemInfoSync()
			this.statusBarHeight = info.statusBarHeight
			this.windowWidth = info.windowWidth
			
			
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// 获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(menuButtonInfo);
			// （胶囊底部高度 - 状态栏的高度） + （胶囊顶部高度 - 状态栏的高度）
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) +
				(menuButtonInfo.top - info.statusBarHeight) + 2;
			this.windowWidth = menuButtonInfo.left;
			// #endif
		},
		methods: {
			back() {
				uni.switchTab({
					url: '/pages/tabbar/index/index'
				})
			},
			open() {
				if (this.isSearch) {
					return
				}
				uni.navigateTo({
					url: '/pages/home-search/home-search'
				})
			},
			inputChange(e) {
				const {value} = e.detail
				this.$emit('input', value)
			}
		}
	}
</script>

<style lang="scss">
	@import "../../common/css/icons.css";
	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			width: 100%;
			background-color: $mk-base-color;
			
			.navbar-content {
				height: 45px;
				padding: 0 15px;
				box-sizing: border-box;
				display: flex;
				justify-content: center;
				align-items: center;
				
				.navbar-search {
					height: 30px;
					background-color: white;
					display: flex;
					align-items: center;
					width: 100%;
					border-radius: 30px;
					padding: 0 10px;
					
					.navbar-search_icon {
						margin-right: 10px;
					}
					
					.navbar-search_text {
						font-size: 12px;
						color: #999;
					}
				}
				
				&.search {
					padding-left: 0;
					
					.navbar-content__search-icons {
						margin-left: 10px;
						margin-right: 10px;
					}
					
					.navbar-search {
						border-radius: 5px;
						
						.navbar-search_text {
							width: 100%;
							font-size: 14px;
						}
					}
				}
			}
		}
	}
</style>
