"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = __importDefault(require("../ts/cart"));
const Book_1 = __importDefault(require("../ts/Book"));
const MusicAlbum_1 = __importDefault(require("../ts/MusicAlbum"));
test('Новая карточка должна быть пустой', () => {
    const cart = new cart_1.default();
    expect(cart.items.length).toBe(0);
});
test('Добавление новой карточки', () => {
    const cart = new cart_1.default();
    const book = new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    cart.add(book);
    expect(cart.items).toEqual([book]);
});
test('Удаление карточки', () => {
    const cart = new cart_1.default();
    const musicAlbum = new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900);
    cart.add(musicAlbum);
    cart.deleteItem(musicAlbum.id);
    expect(cart.items.length).toBe(0);
});
test('Подсчет суммарной стоимости (без учёта скидки)', () => {
    const cart = new cart_1.default();
    const book = new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    const musicAlbum = new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900);
    cart.add(book);
    cart.add(musicAlbum);
    expect(cart.totalCost()).toBe(book.price + musicAlbum.price);
});
test('Подсчет суммарной стоимости (с учётом скидки)', () => {
    const cart = new cart_1.default();
    const book = new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    const musicAlbum = new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900);
    const discount = 100;
    cart.add(book);
    cart.add(musicAlbum);
    expect(cart.totalDiscountCost(discount)).toBe(book.price - discount + musicAlbum.price - discount);
});
//# sourceMappingURL=test.js.map