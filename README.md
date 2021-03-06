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

| Property                    | Description                       | Type | Default
|:----------------------------|:----------------------------------|:-------------------------|:------
| loading          | required, display loading component |bool |false
| completed      | required, display completed component and uninstall the listener |bool|false
| onLoadMore | required, callback function |() => {}| -
| distance | distance from the bottom of the page to trigger the callback function | number | 100
| style | loadmore container style | Object | -
| indicator | indicator config, custom loading and end display, `{ loading: ReactNode, completed: ReactNode }`, if ReactNode is `null`, display default | Object | -


## Thanks.
