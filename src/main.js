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



v-if
v-else-if
v-else
v-text
v-once 
v-bind can also be used as : (v-bind:key="text")
v-on