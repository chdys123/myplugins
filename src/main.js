import { createApp } from 'vue'
import App from './App.vue'
import rotate from '../plugins/rotate/index'
const app=createApp(App)
app.use(rotate)
// 编写自定义命令

// let plugin = {
//     install: (app, options) => {
//         let load = app.extend({
//             template: `
//     <span id="loading"><i class="iconfont icon-jiazai1"></i></span>
//     `,
//             props: {
//                 msg: {
//                     type: String,
//                     default: "loading..."
//                 }
//             }
//         })
//         Vue.prototype.$load = function (str) {
//             console.log("显示加载")
//             let div = document.createElement("div")
//             div.setAttribute("id", "loading")
//             document.body.append(div)
//             new load({
//                 props: {
//                     msg: {
//                         type: String,
//                         default: str
//                     }
//                 }
//             }).$mount("#loading")
//             return () => {
//                 document.body.removeChild(document.getElementById("loading"))
//             }
//         }
//     }
// }




// app.use(plugin)
app.mount('#app')
