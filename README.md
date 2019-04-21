# vue-is-mounted

> :electric_plug: A simple Vue.js mixin for telling whether a component has been mounted.

## Install
With npm:
```js
$ npm i vue-is-mounted
```

Or in the browser:
```html
<script src="https://cdn.jsdelivr.net/npm/vue-is-mounted@1.0.0/index.min.js"></script>
```

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
