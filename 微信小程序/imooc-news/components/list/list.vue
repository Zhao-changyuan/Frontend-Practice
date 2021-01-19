<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item v-for="(item, index) in tab" :key="index" class="swiper-item">
			<list-item :list="listCacheData[index]" :load="load[index]" @loadmore="loadmore"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import ListItem from './list-item.vue'
	export default {
		components: {ListItem},
		props: {
			tab: {
				type: Array,
				default() {
					return []
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				list: [],
				listCacheData: {},
				load: {},
				pageSize: 10,
			};
		},
		watch: {
			tab(newVal, oldVal) {
				if (newVal.length === 0) {
					return
				}
				
				
				this.getList(this.activeIndex)
			}
		},
		// 组件中只能用created
		created() {
		},
		methods: {
			change(e) {
				const { current } = e.detail
				
				// 当数据不存在或长度为0时才加载数据
				if (!this.listCacheData[current] || this.listCacheData[current].length === 0) {
					this.getList(current)
				}
				
				this.$emit('change', current)
			},
			getList(current) {
				if (!this.load[current]) {
					this.load[current] = {
						loading: 'loading',
						page: 1
					}
				}
				
				if(this.load[current].loading === 'noMore') {
					return
				}
				
				this.$api.get_list({
					name: this.tab[current].name,
					page:this.load[current].page,
					pageSize: this.pageSize
				}).then(res => {
					const {data} = res
					if (data.data.length === 0) {
						console.log('触发noMore')
						let oldLoad = {
							loading: 'noMore',
							page: this.load[current].page
						}
						this.$set(this.load, current, oldLoad)
						this.$forceUpdate()
						return
					}
					
					let oldList = this.listCacheData[current] || []
					oldList.push(...data.data)
					// 懒加载
					this.$set(this.listCacheData, current, oldList)
				})
			},
			loadmore() {
				this.load[this.activeIndex].page++
				this.getList(this.activeIndex)
			}
		}
	}
</script>

<style lang="scss">
.home-swiper {
	height: 100%;
	
	.swiper-item {
		height: 100%;
		overflow: hidden;
		
		.list-scroll {
			height: 100%;
		}
	}
}
</style>
