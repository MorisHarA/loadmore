/**
 * Get the first scroll parent of an element
 * @param  {DOM} elm    the element which find scroll parent
 * @return {DOM}        the first scroll parent
 */
export const getScrollParent = (elm) => {
  if (elm.tagName === 'BODY') {
    return window;
  } else if (['scroll', 'auto'].indexOf(getComputedStyle(elm).overflowY) > -1) {
    return elm;
  }
  return getScrollParent(elm.parentNode);
};


/**
 * Get current distance from footer
 * @param  {DOM} elm    scroll element
 * @return {Number}     distance
 */
export const getCurrentDistance = (elm) => {
  const styles = getComputedStyle(elm === window ? document.body : elm);
  const innerHeight = elm === window
    ? window.innerHeight
    : parseInt(styles.height, 10);
  const scrollHeight = elm === window
    ? document.body.scrollHeight
    : elm.scrollHeight;
  const top = isNaN(elm.scrollTop) ? elm.pageYOffset : elm.scrollTop;
  const paddingTop = parseInt(styles.paddingTop, 10);
  const paddingBottom = parseInt(styles.paddingBottom, 10);
  return scrollHeight - innerHeight - top - paddingTop - paddingBottom;
};


export const throttle = (fn, ms) => {
  let timer = null;
  let now = null;
  return (...args) => {
    const diff = ms - (Date.now() - now);
    if (diff <= 0) {
      fn(...args);
      now = Date.now();
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
        now = Date.now();
      }, diff);
    }
  };
};
