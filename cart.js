'use strict';

{
    const cart = {
        items: [],
        totalPrice: 0,
        count: 0,
        add () {
            let tempCart = {
                id: 0,
                product: 0,
                count: 0,
                price: 0,
            }
            tempCart.id = cart.items.length + 1;
            tempCart.product = prompt('Введите товар:');
            tempCart.price = +prompt('Введите цену товара:');
            tempCart.count = +prompt('Введите количество товара:', 1);
            cart.items.push(tempCart);
            prompt('Ещё товар? да/нет').toLowerCase().trim() == 'да' ? this.add() : this.calculateItemPrice();
        },
        calculateItemPrice () {
            cart.totalPrice = cart.items.reduce((total, item) => total += item.count * item.price, 0);
            cart.count = cart.items.reduce((totalCount, item) => totalCount += item.count, 0);
            this.print();
        },
        print() {
            console.log(JSON.stringify(cart.items));
            console.log('Общая сумма корзины:', cart.totalPrice);
            console.log('Общее количество товаров:', cart.count);
            this.clear();
        },
        clear() {
            cart.items = [];
            cart.totalPrice = 0;
            cart.count = 0;
            console.log('Корзина пуста:', JSON.stringify(cart.items));
            console.log('Общая сумма корзины:', cart.totalPrice);
            console.log('Общее количество товаров:', cart.count);
        },
    }
    cart.add();








}