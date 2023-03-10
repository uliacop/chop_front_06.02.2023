'use strict';
const shoppingCart = {
    items: [
        {
          name: 'Headphone',
          count: 1,
          price: 100
        }
      ],
      addItem(product) {
          console.log(this.items);
          for (const item of this.items) {
              if (item.name === product.name) {
                  item.quantity += 1;
                  return;
              }
          }
          const newProduct = {
              ...product,
              quantity: 1,
          };
  
          this.items.push(newProduct);
      },
      deleteItem(productName) {
          const { items} = this;
          for (let i = 0; i < items.length; i += 1) {
              const { name } = items [i];
              if (productName === name) {
                  console.log(i);
                  items.splice(i, 1);
              }
          }       
      },
      getTotalSum(){
        const { items } = this;
        let total = 0;
        for ( const { price, count} of items) {
            total += price * count;
        }
          return total;
    },
    };
  
shoppingCart.addItem({name: 'Mobile phone', count: 2, price: 400});  
shoppingCart.addItem({name: 'Electric kettle', count: 3, price: 300});  
shoppingCart.addItem({name: 'Dishwasher', count: 4, price: 200});  
console.log(shoppingCart.items);
shoppingCart.deleteItem();
console.log(shoppingCart.items);
console.log(shoppingCart.getTotalSum());
