import { CartItem } from "./shopping-cart.model";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCartService {
    itens: CartItem[] = []

    constructor(){}

    clear(){
        this.itens.length = 0
    }

    total(){
        return this.itens
            .map(item => item.value())
            .reduce((prev, actual) => prev + actual, 0)
    }

    addItem(item: MenuItem){
        let actualItem = this.itens.find(shopItens => item.id === shopItens.menuItem.id)
        actualItem ? actualItem.quantity++ : this.itens.push(new CartItem(item))
    }

    removeItem(item: CartItem){
        this.itens.splice(this.itens.indexOf(item), 1)
    }

    increaseQty(item: CartItem){
        item.quantity++;
    }

    decreaseQty(item: CartItem){
        item.quantity <= 1 ? this.removeItem(item) : item.quantity--;
    }
}