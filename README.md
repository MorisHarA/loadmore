# react-loadmore-component

A loadmore component for react.

[![NPM downloads](https://img.shields.io/npm/dm/react-loadmore-component.svg)](https://www.npmjs.com/package/react-loadmore-component)

![Demo GIF](https://github.com/MorisHarA/loadmore/blob/master/docs/demo.gif)

## Usage

`$ npm install react-loadmore-component --save`

```jsx
import LoadMore from 'react-loadmore-component';

<LoadMore
  loading={loading}
  completed={completed}
  onLoadMore={this.handleLoadMore}
>
  <WrappedComponent />
</LoadMore>
```

## Props

| 属性                    | 说明                       | 类型 | 默认值 
|:----------------------------|:----------------------------------|:-------------------------|:------
| loading          | 必选，是否显示加载状态 |bool |false
| completed      | 必选，全部加载显示结束并且卸载监听器 |bool|false
| onLoadMore | 必选，触底回调函数 |() => {}| -
| distance | 可选，距离页面底触发回调函数的距离 | number | 100
| style | 可选，用于修改loadmore容器的样式 | Object | -
| indicator | 可选，指示器配置，自定义加载和结束显示 `{ loading: ReactNode, completed: ReactNode }`, ReactNode为`null`显示默认 | Object | -


## Thanks.
