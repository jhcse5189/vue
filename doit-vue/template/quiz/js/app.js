var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    simpleText: 'Muyaho!',
    uid: '20',
    flag: false,
  },
  methods: {
    clickBtn() {
      console.log("hi");
    },
    clickBtnBammer() {
      window.alert("야!");
    },
  }

});
