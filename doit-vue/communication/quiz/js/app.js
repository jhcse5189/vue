// global component
Vue.component('child-cmp', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>',
});

Vue.component('sibling-cmp', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>',
});

var app = new Vue({
  el: '#app',
  data: {
    message: '안뇽?',
    anotherMessage: '잘가!',
  },
});
