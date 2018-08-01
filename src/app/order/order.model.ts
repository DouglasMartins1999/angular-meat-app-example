class Order {
    constructor(
        public address: string,
        public number: number, 
        public optional: string, 
        public paymentOption: string,
        public orderItens: OrderItem[] = []
    ){}
}

class OrderItem {
    constructor(public quantity: number,
                public itemID: string){}
}

export { Order, OrderItem }