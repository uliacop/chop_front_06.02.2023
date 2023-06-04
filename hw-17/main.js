const div = document.createElement('div');
div.classList.add('wrapper');
const product = document.createElement('div');
product.classList.add('product');
const list = document.createElement('div');
list.classList.add('list');
const priceInfo = document.createElement('div');
priceInfo.classList.add('price-info');
const body = document.body;
body.appendChild(div);
div.append(product, list, priceInfo);
const header = document.createElement('h1');
header.textContent = 'Раді бачити в нашому магазині!';
div.insertAdjacentElement('beforebegin', header);
header.classList.add('title');
const ul = `
    <ul>
        <li><button class="btn" data-data-id="meat">Meat</button></li>
        <li><button class="btn" data-data-id="bread">Bread</button></li>
        <li><button class="btn" data-data-id="fish">Fish</button></li>
    </ul>
`;

product.innerHTML = ul;
const data = {
    meat: [
        {name: 'bacon', count: 21, quality: 'excellent'},
        {name: 'beef', count: 12, quality: 'excellent'},
        {name: 'chiken', count: 7,quality: 'excellent'}
    ],
    bread: [
        {name: 'baguette', count: 23, quality: 'excellent'},
        {name: 'sponge cake', count: 20, quality: 'excellent'},
        {name: 'quiche', count: 41, quality: 'excellent'},
        {name: 'pitta breade', count: 7, quality: 'excellent'}
    ],
    fish: [
        {name: 'anchovy', count: 23, quality: 'excellent'},
        {name: 'cod', count: 20, quality: 'excellent'},
        {name: 'pilcharde', count: 41, quality: 'excellent'},
        {name: 'plaice', count: 7, quality: 'excellent'}
    ]
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.dataId;
      const productList = data[productId];
      const productNames = productList.map(product => product.name);
      list.textContent = '';
      productNames.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        list.appendChild(li);
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Купити';
        buyButton.addEventListener('click', () => {
        const productInfo = productList.find(product => product.name === name);
        alert(`Ви купили ${productInfo.name}!`);
        list.textContent = '';
        priceInfo.textContent = '';
        });
  
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
        <h2>${name}</h2>
        <p>count: ${productList.find(product => product.name === name).count}</p>
        <p>quality: ${productList.find(product => product.name === name).quality}</p>
             
        `;
        card.appendChild(buyButton);
        li.addEventListener('click', () => {
        priceInfo.textContent = '';
        priceInfo.appendChild(card);
        });
      });
    });
  });


