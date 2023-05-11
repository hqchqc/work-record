// https://juejin.cn/post/7208129482095165501

/**
 * 1. SetState是同步还是异步的
 *
 * setState是一个异步方法， 但是在setTimeout / setInterval等定时器里逃脱了 React 对它的掌控 变成了同步方法
 *
 * 实现机制类似于 Vue 的 $nextTick 和浏览器的事件循环机制， 每个setState都会被react加入到任务队列，多次对同一个state
 * 使用setState只会返回最后一次的结果， 因为它不是立刻就更新，而是先放在队列中，等时机成熟在执行批量更新。React18以后
 * 使用了createRoot api后 所有的 setState 都是异步批量执行的 react 18 使用ReacDOM.createRoot的全部都是自动批处理, 使用ReacDOM.render才是与之前的现象保持一致
 */

/**
 * 2. React18有哪些更新
 *
 *    1. setState自动批处理
 *    2. 引入了新的rootAPI 支持 new concurrent renderer(并发模式的渲染)
 *    3. 去掉了对IE的支持，
 *    4. flushSync
 *    5. 组件返回值更新
 *    6. strict mode更新
 *    7. Suspense不再需要fallback捕获
 *    8. 支持useId
 *    9. useSyncExternalStore
 *   10. useInsertionEffect
 *   11. Concurrent Mode
 */
