# react-loadmore-component

A loadmore component for react.

## Usage

`npm install react-loadmore-component --save`

```xml
import LoadMore from 'react-loadmore-component';

<LoadMore
  distance={distance}
  loading={loading}
  completed={completed}
  onLoadMore={this.handleLoadMore}
>
  <WrappedComponent />
</LoadMore>
```

## All props

PropTypes

- **distance**: `PropTypes.number`
- **loading**: `PropTypes.bool.isRequired`
- **completed**: `PropTypes.bool.isRequired`
- **onLoadMore**: `PropTypes.func.isRequired`


## Thanks.
