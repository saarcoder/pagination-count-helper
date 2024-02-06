module.exports = class PaginationHelper {
	constructor(arr,itemsPerPage) {
		this.items = arr
		this.pageLimit = itemsPerPage
	}

	itemCount= ()=> this.items.length

	// get number of all pages. number of all pages is 1-based.
    pageCount= ()=> Math.ceil(this.itemCount()/this.pageLimit)

	// get number of items on this (as provided with pageindex argument) page. Page index is 0-based
	pageItemCount= pageIndex=> pageIndex< 0 || pageIndex >= this.pageCount()? -1: pageIndex+1< this.pageCount()? this.pageLimit: this.itemCount()%this.pageLimit || this.pageLimit

    // get the page number of the page the nth-item will be displayed on. itemIndex and pageIndex are 0-based
	pageIndex= itemIndex=> itemIndex+1> this.itemCount() || itemIndex+1 < 1?  -1: Math.ceil((itemIndex+1)/this.pageLimit)-1	
}
