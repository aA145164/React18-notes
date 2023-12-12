
// 函数时组件

// 特点：
// 没有自己的生命周期，也会被更新并挂载 但是没有生命周期函数
// this 关键字不能指向组件实例（因为没有组件实例）
// 没有内部状态(state)

function App() {
  return <h1>App Function</h1>
}

export default App