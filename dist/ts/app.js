"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = __importDefault(require("./cart"));
const Book_1 = __importDefault(require("./Book"));
const MusicAlbum_1 = __importDefault(require("./MusicAlbum"));
const cart = new cart_1.default();
cart.add(new Book_1.default(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum_1.default(1008, 'Meteora', 'Linkin Park', 900));
//# sourceMappingURL=app.js.map