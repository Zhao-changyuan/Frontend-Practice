<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x="true" >
			<view class="tab-scroll__box">
				<view 
					@click="clickTab(item, index)" 
					v-for="(item, index) in list" 
					:key="item._id" 
					class="tab-scroll__item"
					:class="{ active: activeIndex === index }"
				>{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default() {
					return []
				}
			},
			tabIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				activeIndex: 0
			};
		},
		// 可以监听props或data中值的变化
		watch: {
			tabIndex(newVal, oldVal) {
				this.activeIndex = newVal
			}
		},
		methods: {
			clickTab(item, index) {
				this.activeIndex = index
				
				// 自定义事件
				this.$emit('tab', {
					data: item,
					index
				})
			}
		},
	}
</script>

<style lang="scss">
	.tab {
		display: flex;
		background-color: #FFF;
		border-bottom: 1px solid #f5f5f5;
		width: 100%;
		box-sizing: border-box;
		
		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.tab-scroll__box {
				display: flex;
				height: 45px;
				align-items: center;
				flex-wrap: nowrap;
				box-sizing: border-box;
				
				.tab-scroll__item {
					flex-shrink: 0;
					padding: 0 10px;
					color: #333;
					font-size: 14px;
					
					&.active {
						color: $mk-base-color;
					}
				}
			}
		}
		
		.tab-icons {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;
			
			&::after {
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #DDD;
			}
		}
	}
</style>
