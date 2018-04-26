import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

import React from 'react';
import PropTypes from 'prop-types';
import { getScrollParent, getCurrentDistance, throttle } from '../utils/utils';
import gif from '../assets/loading.gif';

var LoadMore = function (_React$Component) {
  _inherits(LoadMore, _React$Component);

  function LoadMore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LoadMore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LoadMore.__proto__ || _Object$getPrototypeOf(LoadMore)).call.apply(_ref, [this].concat(args))), _this), _this.checkIsInstantiation = function (target) {
      if (!React.isValidElement(target)) {
        return target;
      }
      return function () {
        return target;
      };
    }, _this.scrollHandlerOriginal = function () {
      var _this$props = _this.props,
          onLoadMore = _this$props.onLoadMore,
          distance = _this$props.distance,
          loading = _this$props.loading;

      var currentDistance = getCurrentDistance(_this.scrollParent);
      if (!loading && currentDistance <= distance) {
        if (onLoadMore && typeof onLoadMore === 'function') {
          onLoadMore();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoadMore, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollParent = getScrollParent(this.el);
      this.scrollHandler = throttle(this.scrollHandlerOriginal, 100);
      this.scrollParent.addEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.completed) {
        this.scrollParent.removeEventListener('scroll', this.scrollHandler);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.scrollParent.removeEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          loading = _props.loading,
          completed = _props.completed,
          indicator = _props.indicator,
          style = _props.style;

      var loadingStyle = {
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        fontSize: 28,
        color: '#999'
      };
      var gifStyle = {
        width: 36,
        height: 36,
        display: 'block',
        margin: '0 auto'
      };
      var _ref2 = [this.checkIsInstantiation(indicator.loading), this.checkIsInstantiation(indicator.completed)],
          Loading = _ref2[0],
          Completed = _ref2[1];

      return React.createElement(
        React.Fragment,
        null,
        React.Children.only(this.props.children),
        React.createElement(
          'div',
          { style: _extends({}, loadingStyle, style), ref: function ref(el) {
              _this2.el = el;
            } },
          loading && (indicator.loading ? React.createElement(Loading, null) : React.createElement('img', { style: gifStyle, src: gif, alt: 'loading' })),
          !loading && completed && (indicator.completed ? React.createElement(Completed, null) : React.createElement(
            'span',
            null,
            '\u6CA1\u6709\u4E86\uFF0C\u5230\u5E95\u4E86\uFF01'
          ))
        )
      );
    }
  }]);

  return LoadMore;
}(React.Component);

LoadMore.propTypes = {
  distance: PropTypes.number,
  onLoadMore: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  completed: PropTypes.bool,
  indicator: PropTypes.object
};
LoadMore.defaultProps = {
  distance: 100,
  loading: false,
  completed: false,
  indicator: {
    loading: null,
    completed: null
  }
};
export { LoadMore as default };