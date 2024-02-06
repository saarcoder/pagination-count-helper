# pagination-count-helper
## Description
Helper class for page and page item counting

## Usage
```js
const helper = new PaginationHelper(['a','b','c','d','e','f','g','h'], 3);

// retrieve number of pages (1-based)
helper.pageCount()      // 3

// retrieve number of items
helper.itemCount()      // 8

// retrieve number of items on this (as provided by the argument) page (0-based)
helper.pageItemCount(2) // 2

// retrieve number of the page the specified item will be displayed on (item number and page number are 0-based)
helper.pageIndex(7)     // 2
```