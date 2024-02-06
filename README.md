# pagination-count-helper
## Description
Helper class for page and page item counting

## Usage
```js
const helper = new PaginationHelper(['a','b','c','d','e','f','g','h','i'], 3);
helper.pageCount()      // 3
helper.itemCount()      // 9
helper.pageItemCount(2) // 3
```