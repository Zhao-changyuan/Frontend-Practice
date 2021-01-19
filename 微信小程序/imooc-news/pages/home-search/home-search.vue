<template>
	<view class="home">
		<navbar :isSearch="true" v-model="value" @input="change"></navbar>
		<view class="home-list">
			<view v-if="is_history" class="label-box">
				<view class="label-header">
					<view class="label-title">搜索历史</view>
					<view @click="clear" class="label-clear">清空</view>
				</view>
				<view v-if="historyLists.length > 0" class="label-content">
					<view @click="openHistory(item)" class="label-content__item" v-for="(item, index) in historyLists" :key="index">{{item.name}}</view>
				</view>
				<view v-else class="no-data">
					没有搜索历史
				</view>
			</view>
			
			<!-- 搜索结果 -->
			<list-scroll v-else class="list-scroll" @loadmore="loadmore">
				<uni-load-more v-if="loading" type="snow" status="loading"></uni-load-more>
				<view v-if="searchList.length > 0">
				<list-card @click="setHistory" :item="item" v-for="item in searchList" :key="item._id" mode="base"></list-card>
				</view>
				<view v-if="searchList.length === 0 && !loading" class="no-data">
					没有搜索到相关数据
				</view>
			</list-scroll>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		data() {
			return {
				searchList: [],
				is_history: false,
				value: '',
				loading: false,
			}
		},
		computed: {
			...mapState(['historyLists'])
		},
		onLoad() {
			// this.getSearch()
		},
		methods: {
			clear() {
				this.$store.dispatch('clearHistory')
			},
			openHistory(item) {
				this.value = item.name
				this.getSearch(this.value)
			},
			setHistory(item) {
				this.$store.dispatch('set_history', {
					name: this.value
				})
			},
			change(value) {
				if (!value) {
					clearTimeout(this.timer)
					this.mark = false
					this.getSearch(value)
					return
				}
				
				this.is_history = false
				// 做标记
				if(!this.mark) {
					this.mark = true
					this.timer = setTimeout(() => {
						this.mark = false
						this.getSearch(value)
					}, 1000)
				}
			},
			getSearch(value) {
				if (!value) {
					this.searchList = []
					this.is_history = true
					return
				}
				
				this.is_history = false
				this.loading = true
				this.$api.get_search({
					value
				}).then(res => {
					const {data} = res
					
					this.loading = false
					this.searchList = data.data
					console.log(this.searchList);
				}).catch((err) => {
					this.loading = false;
				})
			},
		}
	}
</script>

<style lang="scss">
page {
	height: 100%;
	display: flex;
	background-color: #f5f5f5;;
	
	.home {
		display: flex;
		flex-direction: column;
		flex: 1;
		
		.label-box {
			background-color: #FFFFFF;
			margin-bottom: 10px;
			
			.label-header {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #666;
				padding: 10px 15px;
				border-bottom: 1px #f5f5f5 solid;
				
				.label-title {
					color: $mk-base-color;
				}
				
				.label-clear {
					color: #30b33a;
					font-weight: bold;
				}
			}
			
			.label-content {
				display: flex;
				flex-wrap: wrap;
				padding: 15px;
				padding-top: 0;
				.label-content__item {
					padding: 2px 10px;
					margin-top: 12px;
					margin-right: 10px;
					border-radius: 5px;
					border: 1px solid #666;
					font-size: 14px;
					color: #666;
				}
			}
		}
	}
	
	.no-data {
		height: 200px;
		line-height: 200px;
		width: 100%;
		text-align: center;
		font-size: 12px;
		color: #666;
	}
}
</style>
