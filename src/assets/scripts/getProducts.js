const productsUl = document.querySelector('.products-list');
const fragment = document.createDocumentFragment();

async function getProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    products?.forEach((product) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      const img = document.createElement('img');
      const h3 = document.createElement('h3');
      const span = document.createElement('span');
      const p = document.createElement('p');

      li.classList.add('product-card');
      button.classList.add('product-card__button');
      img.classList.add('product-card__image');
      img.src = product.image;
      img.alt = product.title;
      img.width = 220;
      img.height = 300;
      h3.classList.add('product-card__name');
      h3.textContent = product.title;
      span.classList.add('product-card__price');
      span.textContent = `Price $${product.price}`;
      p.classList.add('product-card__description');
      p.textContent = product.description;

      li.appendChild(button);
      button.append(img, h3, span, p);
      button.addEventListener('click', () => console.log('product', product));
      fragment.append(li);
    });

    productsUl.prepend(fragment);
  } catch (e) {
    const p = document.createElement('p');
    const li = document.createElement('li');
  
    p.textContent = `Error: ${e}`;
    li.appendChild(p);
    fragment.append(li);

    productsUl.prepend(fragment);
  }
}

getProducts();
