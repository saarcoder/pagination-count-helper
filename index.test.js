const PaginationHelper = require('./index')
test("Count pages, items and items on page 0", ()=> {
    const helper = new PaginationHelper(['a','b','c','d','e','f','g','h','i'], 3);
    expect(helper.pageCount()).toBe(3)
    expect(helper.itemCount()).toBe(9)
    expect(helper.pageItemCount(0)).toBe(3)
})
