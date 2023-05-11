const vm = Vue.createApp({
  data() {
    return {
      name: '',
      gender: 'unknown',
    }
  },
  computed: {
    message(){
      return "hello " + this.prefix + this.name
    },
    prefix(){
      switch(this.gender){
        case 'male': return 'Mr. ';
        case 'female': return 'Ms. ';
        default: return '';

      }
    }
  },
  watch: {
    name(newname, oldname) {
      console.log(newname);
      console.log(oldname);

      fetch(`https://api.genderize.io?name=${newname}`)
        .then(response => response.json())
        .then(json => this.gender = json.gender);
        

    },
    message(){
      console.log("here")
    }

  }

}).mount('#app');