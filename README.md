# vue-is-mounted

> :electric_plug: A simple Vue.js mixin for telling whether a component has been mounted.

## Usage

### Node.JS

```js
const isMounted = require('vue-is-mounted');

new Vue({
  // ...
  mixins: [ isMounted ],
  computed: {
    foo() {
      if (this.isMounted) {
        console.log('bar');
      }
    }
  }
});
```

### Browser

```js
new Vue({
  // ...
  mixins: [ window.vueIsMounted ], // window reference can be omitted
  computed: {
    foo() {
      if (this.isMounted) {
        console.log('bar');
      }
    }
  }
});
```



## License

[MIT](LICENSE)