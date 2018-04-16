import _Object$getOwnPropertyDescriptor from 'babel-runtime/core-js/object/get-own-property-descriptor';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _dec, _dec2, _desc, _value, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

import React from 'react';
import PropTypes from 'prop-types';
import Bind from 'lodash-decorators/bind';
import Throttle from 'lodash-decorators/throttle';
import { getScrollParent, getCurrentDistance } from '../utils/utils';
import gif from '../assets/loading.gif';

var LoadMore = (_dec = Bind(), _dec2 = Throttle(100), (_class = function (_React$Component) {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LoadMore, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollParent = getScrollParent(this.el);
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
    key: 'scrollHandler',
    value: function scrollHandler() {
      var _props = this.props,
          onLoadMore = _props.onLoadMore,
          distance = _props.distance,
          loading = _props.loading;

      var currentDistance = getCurrentDistance(this.scrollParent);
      if (!loading && currentDistance <= distance) {
        if (onLoadMore && typeof onLoadMore === 'function') {
          onLoadMore();
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          loading = _props2.loading,
          completed = _props2.completed,
          indicator = _props2.indicator;

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
      var Loading = this.checkIsInstantiation(indicator.loading);
      var Completed = this.checkIsInstantiation(indicator.completed);
      return React.createElement(
        React.Fragment,
        null,
        React.Children.only(this.props.children),
        React.createElement(
          'div',
          { style: loadingStyle, ref: function ref(el) {
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
}(React.Component), (_applyDecoratedDescriptor(_class.prototype, 'scrollHandler', [_dec, _dec2], _Object$getOwnPropertyDescriptor(_class.prototype, 'scrollHandler'), _class.prototype)), _class));
LoadMore.propTypes = {
  distance: PropTypes.number,
  onLoadMore: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  completed: PropTypes.bool,
  indicator: PropTypes.shape({
    loading: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    completed: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
  })
};
LoadMore.defaultProps = {
  distance: 100,
  loading: false,
  completed: false,
  indicator: { loading: null, completed: null }
};
export { LoadMore as default };