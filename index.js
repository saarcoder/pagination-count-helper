module.exports = class PaginationHelper {
	constructor(arr,itemsPerPage) {
		this.items = arr
		this.pageLimit = itemsPerPage
	}

	itemCount= ()=> this.items.length
    pageCount= ()=> Math.ceil(this.itemCount()/this.pageLimit)

	pageItemCount= pageIndex=> pageIndex< 0 || pageIndex >= this.pageCount()? -1: pageIndex+1< this.pageCount()? this.pageLimit: this.itemCount()%this.pageLimit || this.pageLimit

	pageIndex= itemIndex=> itemIndex+1> this.itemCount() || itemIndex+1 < 1?  -1: Math.ceil((itemIndex+1)/this.pageLimit)-1	
}
