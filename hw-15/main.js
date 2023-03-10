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
                  item.count += 1;
                  return;
              }
          }
           this.items.push(product);
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
  
  shoppingCart.addItem({name: 'Mobile phone', count: 1, price: 400});  
  shoppingCart.addItem({name: 'Electric kettle', count: 1, price: 300});  
  shoppingCart.addItem({name: 'Electric kettle', count: 1, price: 300});  
  shoppingCart.addItem({name: 'Electric kettle', count: 1, price: 300});  
  shoppingCart.addItem({name: 'Electric kettle', count: 1, price: 300});  
  shoppingCart.addItem({name: 'Dishwasher', count: 1, price: 200});  
  shoppingCart.addItem({name: 'Dishwasher', count: 1, price: 200});  
  console.log(shoppingCart.items);
  shoppingCart.deleteItem('Mobile phone');
  console.log(shoppingCart.items);
  console.log(shoppingCart.getTotalSum());


