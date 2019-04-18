/**
 * Defines a property isMounted, which will be set to true
 * as soon as the vue component gets mounted.
 *
 * @copyright 2019 Axel Rindle <axel.rindle@gmx.de>
 * @license MIT (See LICENSE)
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.vueIsMounted = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  return {
    data() {
      return {
        isMounted: false
      }
    },
    mounted() {
      this.isMounted = true;
    }
  };

}));