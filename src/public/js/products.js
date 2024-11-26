const productsList = document.getElementById("products-list");
const btnRefreshProductsList = document.getElementById("btn-refresh-products-list");

const loadProductsList = async () => {
    const response = await fetch("/api/products", { method: "GET" });
    const data = await response.json() || [];
    const products = data.payload;

    productsList.innerText = "";

    products.forEach((products) => {
        productsList.innerHTML += `<li>Id: ${products.id} - Nombre: ${products.title}</li>`;
    });
};

btnRefreshProductsList.addEventListener("click", () => {
    loadProductsList();
    console.log("¡Lista recargada!");
});

loadProductsList();