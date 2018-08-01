import { Injectable } from "@angular/core";
import { ShoppingCartService } from "../restaurant-detail/menu/shopping-cart/shopping-cart.service";
import { Order } from "./order.model";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class OrderService {
    constructor(public orders: ShoppingCartService, public http: Http){}

    get cartItens(){
        return this.orders.itens;
    }

    increaseQty(item){
        this.orders.increaseQty(item)
    }

    decreaseQty(item){
        this.orders.decreaseQty(item)
    }

    removeItem(item){
        this.orders.removeItem(item)
    }

    clearList(){
        this.orders.clear()
    }

    totalValue():number {
        return this.orders.total()
    }

    get deliveryCost(): number {
        let cost = this.totalValue() * 0.11 || 5
        if (cost < 5) cost = 5
        return cost;
    }

    checkOrder(order: Order):Observable<string>{
        const headers = new Headers()
        headers.append("Content-Type", "application/json")
        return this.http.post(
            'http://localhost:3000/orders',
            JSON.stringify(order), 
            new RequestOptions(
                { headers: headers }
            )
        )
        .map(response => response.json())
        .map(order => order.id)
    }
}