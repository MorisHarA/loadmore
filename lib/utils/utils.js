
export var getScrollParent = function getScrollParent(elm) {
  if (elm.tagName === 'BODY') {
    return window;
  } else if (['scroll', 'auto'].indexOf(getComputedStyle(elm).overflowY) > -1) {
    return elm;
  }
  return getScrollParent(elm.parentNode);
};

export var getCurrentDistance = function getCurrentDistance(elm) {
  var styles = getComputedStyle(elm === window ? document.body : elm);
  var innerHeight = elm === window ? window.innerHeight : parseInt(styles.height, 10);
  var scrollHeight = elm === window ? document.body.scrollHeight : elm.scrollHeight;
  var top = isNaN(elm.scrollTop) ? elm.pageYOffset : elm.scrollTop;
  var paddingTop = parseInt(styles.paddingTop, 10);
  var paddingBottom = parseInt(styles.paddingBottom, 10);
  return scrollHeight - innerHeight - top - paddingTop - paddingBottom;
};

export var throttle = function throttle(fn, ms) {
  var timer = null;
  var now = null;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var diff = ms - (Date.now() - now);
    if (diff <= 0) {
      fn.apply(undefined, args);
      now = Date.now();
    } else {
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(undefined, args);
        now = Date.now();
      }, diff);
    }
  };
};