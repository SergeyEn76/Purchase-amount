"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this._items = [];
    }
    add(item) {
        this._items.push(item);
    }
    get items() {
        return [...this._items];
    }
    totalCost() {
        let count = 0;
        this._items.forEach((item) => {
            count += item.price;
        });
        return count;
    }
    totalDiscountCost(discount) {
        let count = 0;
        this._items.forEach((item) => {
            count += item.price - discount;
        });
        return count;
    }
    deleteItem(id) {
        //let fItem = this._items.forEach((item))
        console.log(this._items);
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].id === id) {
                this._items.splice(i, 1);
                break;
            }
        }
    }
}
exports.default = Cart;
//# sourceMappingURL=cart.js.map