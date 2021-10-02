

// shallowReactive 与 reactive
console.log('shallowReactive 和 reactive')

// 定义一个reactiveHandler处理对象
const reactiveHandler = {
  // 获取属性值
  get(target, prop) {
    if (prop === '_is_reactive') return true;

    const result = Reflect.get(target, prop)
    console.log('拦截了读取数据', prop, result)

    return result;
  },
  set(target, prop, value) {
    const result = Reflect.set(target, prop, value)
    console.log('拦截了修改数据或者是添加属性', prop, value)
    return result
   },
  deleteProperty(target, prop) {
    const result = Reflect.deleteProperty(target, prop)
    console.log('拦截了删除属性', prop)
    return result;
  }
}

// 定义个shallowReactive函数，传入一个目标对象
function shallowReactive(target) {
  // 判断当前的目标对象是不是object类型（对象/数组）
  if (target && typeof target === 'object') {
    return new Proxy(target, reactiveHandler);
  }

  // 如果传如的数据是基本类型的数据，那么就直接返回
  return target
}

function reactive(target) {
  // 判断当前的目标对象是不是object类型（对象/数组）
  if (target && typeof target === 'object') {
    // 对数组或者是对象中所有的数据进行reactive的递归处理
    // 先判断当前的数据是不是数组
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = reactive(item)
      })
    } else {
      Object.keys(target).forEach(key => {
        target[key] = reactive(target[key])
      })
    }

    return new Proxy(target, reactiveHandler);
  }

  // 如果传如的数据是基本类型的数据，那么就直接返回
  return target
}
// ==========================================

// 定义了一个readonlyHandler函数处理器
const readonlyHandler = {
  get(target, prop) {
    if (prop === '_is_readonly') return true;

    const result = Reflect.get(target, prop);
    console.log('拦截了读取数据', prop, result)
    return result;
  },
  set(target, prop, value) {
    console.warn('只能读取数据，不能修改数据或者添加数据', prop, name)
    return true;
  },
  deleteProperty(target, prop) {
    console.warn('只能读取数据，不能删除数据', prop)
    return true;
  }
}

// 定义一个shallowReadonly处理函数
function shallowReadonly(target) {
  // 需要判断当前的数据是不是对象
  if (target && typeof target === 'object') {
    return new Proxy(target, readonlyHandler);
  }
  
  return target
}

function readonly(target) {
  // 需要判断当前的数据是不是对象
  if (target && typeof target === 'object') {
    if (Array.isArray(target)) {
      target.forEach((item, index) => {
        target[index] = readonly(item)
      })
    } else {
      Object.keys(target).forEach(key => {
        target[key] = readonly(target[key])
      })
    }
    return new Proxy(target, readonlyHandler);
  }
  
  return target
}

// 定义一个shallowRef
function shallowRef(target) {
  return {
    _is_ref: true,
    _value: target,
    get value() {
      console.log('劫持到了读取数据')
      return this._value;
    },
    set value(val) {
      console.log('劫持到了修改数据，准备更新界面', val)
      this._value = val
    }
  }
}

// 定义一个ref函数
function ref(target) {
  target = reactive(target);

  return {
    _is_ref: true,
    _value: target,
    get value() {
      console.log('劫持到了读取数据')
      return this._value;
    },
    set value(val) {
      console.log('劫持到了修改数据，准备更新界面', val)
      this._value = val
    }
  }
}

// isRef
function isRef(obj) {
  return obj && obj._is_ref;
}

// isReactive
function isReactive(obj) {
  return obj && obj._is_reactive;
}

// isReadonly
function isReadonly(obj) {
  return obj && obj._is_readonly;
}

// isProxy
function isProxy(obj) {
  return isReactive(obj) || isReadonly(obj);
}

console.log(isRef(ref({})))
console.log(isReactive(reactive({})))
console.log(isReadonly(readonly({})))
console.log(isProxy(reactive({})))
console.log(isProxy(readonly({})))

// const ref1 = shallowRef({
//   name: '小明',
//   car: {
//     color: 'red'
//   }
// })

// console.log(ref1.value)
// ref1.value = '=='
// ref1.value.car = '=='

// const ref2 = ref({
//   name: '小明',
//   car: {
//     color: 'red'
//   }
// })

// console.log(ref2.value)
// ref2.value = '==='
// ref2.value.car = ']]]'

// =====================
// 测试shallowReadonly和readonly
// const proxyUser3 = shallowReadonly({
//   name: '小明',
//   cars: ['奔驰', '宝马']
// })
// proxyUser3.name += "==="
// delete proxyUser3.name
// proxyUser3.cars[0] = '奥迪'
// delete proxyUser3.cars[0]

// const proxyUser4 = readonly({
//   name: '小明',
//   cars: ['奔驰', '宝马']
// })

// console.log(proxyUser4.name)
// console.log(proxyUser4.cars[0])
// proxyUser4.name = '哈哈'
// proxyUser4.cars[0] = '哈哈'
// delete proxyUser4.cars[0]
// delete proxyUser4.name




// 定义一个readonly函数

// const proxyUser1 = shallowReactive({
//   name: '小明',
//   car: {
//     color: 'red',
//   }
// })

// proxyUser1.name += '=='
// proxyUser1.car.color += '==='

// delete proxyUser1.name

// delete proxyUser1.car.color


// const proxyUser2 = reactive({
//   name: '小明',
//   car: {
//     color: 'red',
//   }
// })

// proxyUser2.name += '=='
// proxyUser2.car.color += '==='

// delete proxyUser2.name

// delete proxyUser2.car.color