/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
window.matchMedia = window.matchMedia || function() {
    return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
    };
    };

  global.requestAnimationFrame = callback => setTimeout(callback, 0);
