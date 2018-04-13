
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