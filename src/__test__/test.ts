import Cart from '../ts/cart';
import Book from '../ts/Book';
import MusicAlbum from '../ts/MusicAlbum';

test('Новая карточка должна быть пустой', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
});

test('Добавление новой карточки', () => {
    const cart = new Cart();
    const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    cart.add(book);
    expect(cart.items).toEqual([book]);
});

test('Удаление карточки', () => {
    const cart = new Cart();
    const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    cart.add(musicAlbum);
    cart.deleteItem(musicAlbum.id);
    expect(cart.items.length).toBe(0);
});

test('Подсчет суммарной стоимости (без учёта скидки)', () => {
    const cart = new Cart();
    const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    cart.add(book);
    cart.add(musicAlbum);
    expect(cart.totalCost()).toBe(book.price + musicAlbum.price);
});

test('Подсчет суммарной стоимости (с учётом скидки)', () => {
    const cart = new Cart();
    const book = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
    const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    const discount = 100;
    cart.add(book);
    cart.add(musicAlbum);
    expect(cart.totalDiscountCost(discount)).toBe(book.price + musicAlbum.price - discount);
});

