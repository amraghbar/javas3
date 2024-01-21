 async function phone (){
    const response = await fetch("https://dummyjson.com/product");
    const data =await response.json();
    const products= data.products
    
    const item=products.map( function(product){

    return `
    <tr>
    <td>${product.id}</td>
    <td>${product.title}</td>
    <td>${product.price}</td>
    <td><img src=" ${product.thumbnail}" class="imgph"/></td>
    <td>${product.rating}</td>
    <td>${product.stock}</td>
    <td>${product.brand}</td>
    </tr>`


    }).join("");
    document.querySelector(".datatype").innerHTML=item;
}
phone();