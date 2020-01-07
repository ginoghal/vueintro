import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const myVM= (() => {
// instantiate a new Vue Instance
let vue_vm = new Vue({
    data: {
        message: "Hello from Vue!", 

        collection: [
            { name: "Gino", role:"student", },
            { name: "Pugsley", role: "evil Pug" },
            
        ]
    }, 

    methods: {
        logClicked() {
            console.log('clicked on an element!');
        }
    }

}).$mount("#app");


})();