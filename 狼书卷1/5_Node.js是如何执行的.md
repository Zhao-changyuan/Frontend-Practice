## 第5章 Node.js是如何执行的

### 5.1 准备

#### 5.1.1 编辑器

推荐Jetbrains CLion

#### 5.1.2 编译



#### 5.1.3 调试

### 5.2 编译步骤

Node.js采用了GYP和Python作为构建工具。

#### 5.2.1 configure

configure是用来检测安装平台的目标特征的。

#### 5.2.2 make

make是一个用于解析Makefile文件中配置指令的命令工具。

#### 5.2.3 make install

make install用于将编译出来的可执行文件和库文件复制到合适的地方。

### 5.3 从入口开始

#### 5.3.1 核心流程

对Start()函数进行简单梳理，其中有5步是非常重要的：

- PlatformInit()
- argv = uv_setup_args(argc, argv);
- Init(&argc, const_cast(argv), &exec_argc, &exec_argv);
- V8::Initialize();
- Start(uv_default_loop(), argc, argv, exec_argc, exec_argv);

**PlantformInit**

信号是类UNIX操作系统中进行进程间通信的一种异步通知机制。才操作系统中，当信号被发送到一个进程中并产生中断时，任何非原子操作都会中断。

PlatformInit主要用于对文件进行描述，以及注册两个信号处理函数。

**uv_setup_args**

uv_setup_args用于进行process.title的设置和读取。

**Init**

关于Init的作用，有以下几点说明：

- 初始化Uptime值。
- 对node命令行接收的参数和Chrome V8的flag参数进行映射处理
- 将node_is_initialized标记为true。

**V8::Initialize**

Node.js源码（JavaScript）文件都会先由Chrome V8引擎来解释并执行。

**内联的Start方法**

只要是正对libuv的，具体完成了下面4项工作：

- 准备工作
- 执行LoadEnvironment(&env)
- 开启Event Loop，无限循环
- 首尾，内存回收，断开debug连接。

#### 5.3.2 构造process对象

process是Node.js内置的全局对象，无需引用，在Node.js项目的任意位置都可以使用。

**SetupProcessObject**

process的用法

（1）统计信息：CPU、内存等

（2）事件循环机制：process.nextTick

nextTick的作用就是把laterCallback放到下一个事件循环中去执行。而_tickCallback方法则是一个非公开的方法，是在当前事件循环结束之后调用以进行下一个事件循环的入口函数。

（3）uncaughtException事件

（4）其他用法

- 进程管理：exit、kill
- I/O先关：stdout、stderr、stdin
- 路径处理：cwd、chdir等。

**process.binding内部的C++模块绑定**

process里有moduleLoadList属性，用来描述当前进程已经加载的模块的。

#### 5.3.3 LoadEnvironment

所有的JavaScript输入文件都处在LoadEnvironment阶段，由Chrome V8引擎负责加载并执行，可以说这一步是非常重要的入口。

#### 5.3.4 bootstrap_node.js

#### 5.3.5 EventLoop启动方法

### 5.4 API调用过程

#### 5.4.1 相关的引用

### 5.5 时间循环机制

事件循环（EventLoop）是libuv的核心，也称为I/O Loop，它建立在所有的I/O内容操作基础上。

#### 5.5.1 概览

Node.js在Chrome V8引擎层发起有关文件、网络等I/O操作，并在时间循环汇总加入时间及对应的回调，当libuv里的任务执行完成之后，会调用注册的回调函数并注入处理结果。

#### 5.5.2 生命周期

为了更好地理解事件循环，需要掌握以下要点：

- 队列管理
  - process.nextTick()入列
  - process._tickCallback出列
- 如何在合适的时候加入操作
  -  通过timers（定时器、setTimeout、setInterval等）
  - 通过setImmediate()

#### 5.5.3 microtask和macrotask

microtask（微任务）和macrotask（宏任务）。当前调用栈执行完毕时，会分两种情况进行处理。首先处理microtask队列里的事件，然后在从macrotask队列中取出一个事件并执行。在同一事件循环中，microtask永远在macrotask之前执行。

- microtask举例
  - prcess.nextTick
  - promise
- macrotask举例
  - setTimeout
  - setInterval
  - setImmediate
  - I/O

#### 5.5.4 process.nextTick(callback)

process.nextTick(callback)是用于在事件循环的下一次循环中调用回调函数的，与setTimeout(fn, 0)函数的功能类似，但效率更高。

### 5.6 本章小结

阅读源码是一个长期过程，只要你准备好编译环境，理解编译步骤和Node.js核心流程，剩下的就是不断实践了。