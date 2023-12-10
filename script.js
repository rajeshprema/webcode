async function fetchMakeupData() {
  const apiUrl = 'https://makeup-api.herokuapp.com/api/v1/products.json';
  const productscontainer = document.getElementById('products-container');
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    
    data.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
      <ima src="${product.image_limk}"  alt"${product.brand}">
      <div class="brand">${product.brand}</div>
      <div class="price">$${product.price}</div>
      <div class="description">${product.description}</div>`;

      productscontainer.appendChild(productCard)
         
      
      
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


fetchMakeupData();


    


 









  
