// Simulasi data produk
const products = {
    1: { name: "Produk 1", description: "Ini adalah deskripsi produk 1.", price: "Rp 100.000" },
    2: { name: "Produk 2", description: "Ini adalah deskripsi produk 2.", price: "Rp 200.000" },
    3: { name: "Produk 3", description: "Ini adalah deskripsi produk 3.", price: "Rp 300.000" }
};

// Ambil ID produk dari URL
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

// Dapatkan elemen untuk menampilkan detail produk
const productContainer = document.getElementById('product-container');

// Periksa apakah produk ditemukan berdasarkan ID
if (products[productId]) {
    const product = products[productId];
    productContainer.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p><strong>Harga:</strong> ${product.price}</p>
    `;
} else {
    productContainer.innerHTML = `<p>Produk tidak ditemukan.</p>`;
}

// Event untuk mengubah gaya header saat scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

    
