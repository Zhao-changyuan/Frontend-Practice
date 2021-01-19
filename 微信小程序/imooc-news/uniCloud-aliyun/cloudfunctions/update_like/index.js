'use strict';

const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	// 接收参数
	const { user_id, article_id } = event
	
	const userInfo = await db.collection('user').doc(user_id).get()
	const article_id_ids = userInfo.data[0].article_likes_ids
	
	let dbCmdFunc = null
	if (article_id_ids.includes(article_id)) {
		dbCmdFunc = dbCmd.pull(article_id)
	} else {
		dbCmdFunc = dbCmd.addToSet(article_id)
	}
	
	// 更新
	await db.collection('user').doc(user_id).update({
		article_likes_ids: dbCmdFunc
	});
	
	//返回数据给客户端
	return {
		code: 200,
		msg: '更新成功',
		data: userInfo.data[0]
	}
};
