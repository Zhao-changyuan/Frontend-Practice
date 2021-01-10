import MyObject from './MyObject.mjs'

var logger = {
    get: function(target, key) {
        console.log('[INFO] - ' + target._id, 'access key name:', key);
        return Reflect.get(target, key);
    }
};

var uuid = 0;
export default new Proxy(MyObject, {
    construct: function(...args) {
        var newInstance = Reflect.construct(...args)
        return new Proxy(Object.assign(newInstance, {_id: ++uuid}), logger);
    }
});