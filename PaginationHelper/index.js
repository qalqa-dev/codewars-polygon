class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        return this.collection.length;
    }
    pageCount() {
        return Math.ceil(this.itemCount() / this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
            return -1;
        }
        if (this.itemCount() % this.itemsPerPage == 0) {
            return this.itemsPerPage;
        }
        if (pageIndex == this.pageCount() - 1) {
            return this.itemCount() % this.itemsPerPage;
        }
        return this.itemsPerPage;
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
    }
    pageIndex(itemIndex) {
        if (itemIndex > this.itemCount() - 1 || itemIndex < 0) {
            return -1;
        }
        if (itemIndex <= this.pageCount() * this.itemsPerPage) {
            return Math.floor(itemIndex / this.itemsPerPage);
        }
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
    }
}
