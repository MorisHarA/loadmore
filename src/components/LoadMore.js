/*
 * @Author: luandapeng
 * @Date: 2018-04-04 12:31:56
 * @Last Modified by: luandapeng
 * @Last Modified time: 2018-04-16 11:06:30
 */
import React from 'react';
import PropTypes from 'prop-types';
import Bind from 'lodash-decorators/bind';
import Throttle from 'lodash-decorators/throttle';
import { getScrollParent, getCurrentDistance } from '../utils/utils';
import gif from '../assets/loading.gif';

export default class LoadMore extends React.Component {
  static propTypes = {
    distance: PropTypes.number,
    onLoadMore: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    completed: PropTypes.bool,
  }
  static defaultProps = {
    distance: 100,
    loading: false,
    completed: false,
  }

  componentDidMount() {
    this.scrollParent = getScrollParent(this.el);
    this.scrollParent.addEventListener('scroll', this.scrollHandler);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.completed) {
      this.scrollParent.removeEventListener('scroll', this.scrollHandler);
    }
  }

  componentWillUnmount() {
    this.scrollParent.removeEventListener('scroll', this.scrollHandler);
  }

  @Bind()
  @Throttle(100)
  scrollHandler() {
    const { onLoadMore, distance, loading } = this.props;
    const currentDistance = getCurrentDistance(this.scrollParent);
    if (!loading && currentDistance <= distance) {
      if (onLoadMore && typeof onLoadMore === 'function') {
        onLoadMore();
      }
    }
  }

  render() {
    const { loading, completed } = this.props;
    const loadingStyle = {
      textAlign: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      fontSize: 28,
      color: '#999',
    };
    const gifStyle = {
      width: 36,
      height: 36,
      display: 'block',
      margin: '0 auto',
    };
    return (
      <React.Fragment>
        { React.Children.only(this.props.children) }
        <div style={loadingStyle} ref={(el) => { this.el = el; }}>
          { loading && <img style={gifStyle} src={gif} alt="loading" /> }
          { !loading && completed && <span>没有了，到底了！</span> }
        </div>
      </React.Fragment>
    );
  }
}
