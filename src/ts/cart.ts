import Buyable from './Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalCost(): number {
        let count: number = 0;
        this._items.forEach((item) => {
            count += item.price;
        });
        return count;
    }

    totalDiscountCost(discount: number): number {
        let count: number = 0;
        this._items.forEach((item) => {
            count += item.price - discount;
        });
        return count;
    }

    deleteItem(id: number): void {
        console.log(this._items);
        for (let i = 0; i < this._items.length; i++) {
            if (this._items[i].id === id) {
                this._items.splice(i, 1);
                break;
            }
        }
    }
}