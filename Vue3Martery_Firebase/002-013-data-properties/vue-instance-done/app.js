const definition = {
  data() {
    return {
      name: 'John'
    }
  },
  
};


const app = Vue.createApp(definition);
const app2 = Vue.createApp(definition);

app.mount('#app');
app2.mount('#app2');