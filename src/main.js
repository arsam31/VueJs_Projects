// const template = "<h2>{{newName}}</h2>";
// const data = function data(){
//     return {
//         newName: "I am Arsam Rahmaan",
//     }
// };
// const object = { data,template };
// Vue.createApp(object).mount(".app");


var ab = {
    data(){
        return {
            title: "arsam",
            name: "rahmaan"
        }
    }
};
Vue.createApp(ab).mount(".app");