'use strict';

// 获取数据可的引用
const db = uniCloud.database();

exports.main = async (event, context) => {
	// 接收分类
	const {
		name,
		page = 1,
		pageSize = 10
	} = event
	
	let matchObj = {}
	if (name !== '全部') {
		matchObj = {
			classify: name
		}
	}
	
	// 聚合，更精细化的去处理数据 求和、分组、指定哪些字段
	const list = await db.collection('article').aggregate()
		.match(matchObj)
		.project({
			content: false,
		})
		.skip(pageSize * (page - 1)) // 每次跳过多少数据
		.limit(pageSize) // 每次输出多少条
		.end();
	
	/* const list  = await db.collection('article')
	.field({
		// true表示返回这个字段
		content: false,
	})
	.get() */
	
	
	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: list
	}
};
