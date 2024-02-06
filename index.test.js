const PaginationHelper = require('./index')
test("Count pages, items and items on page 0", ()=> {
    const helper = new PaginationHelper(['a','b','c','d','e','f','g','h'], 3);
    expect(helper.pageCount()).toBe(3)
    expect(helper.itemCount()).toBe(8)
    expect(helper.pageItemCount(2)).toBe(2)
    expect(helper.pageIndex(7)).toBe(2)
})
