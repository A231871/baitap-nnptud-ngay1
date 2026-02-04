// --- Câu 1: Khai báo Constructor Function ---
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// --- Câu 2: Khởi tạo mảng products (6 products, mixed categories) ---
const products = [
    new Product(1, "iPhone 15 Pro Max", 35000000, 5, "Phone", true),
    new Product(2, "Samsung Galaxy S24", 25000000, 10, "Phone", true),
    new Product(3, "MacBook Air M2", 28000000, 0, "Laptop", false), // 0 quantity
    new Product(4, "Logitech Mouse", 500000, 20, "Accessories", true),
    new Product(5, "Mechanical Keyboard", 1500000, 15, "Accessories", true),
    new Product(6, "AirPods Pro", 5000000, 8, "Accessories", true)
];

// --- Câu 3: Tạo mảng mới chỉ chứa Name và Price ---
const nameAndPrice = products.map(p => {
    return { name: p.name, price: p.price };
});

console.log("\n--- Câu 3: Name and Price Only ---");
console.log(nameAndPrice);


// --- Câu 4: Lọc sản phẩm còn hàng (quantity > 0) ---
const inStock = products.filter(p => p.quantity > 0);

console.log("\n--- Câu 4: Products In Stock (> 0) ---");
console.log(inStock);


// --- Câu 5: Kiểm tra có sản phẩm nào giá trên 30.000.000 không? ---
const hasExpensiveProduct = products.some(p => p.price > 30000000);

console.log("\n--- Câu 5: Is there any product > 30,000,000? ---");
console.log(hasExpensiveProduct); // Should return true (iPhone)


// --- Câu 6: Kiểm tra TẤT CẢ 'Accessories' có đang bán (isAvailable) không? ---
const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);

console.log("\n--- Câu 6: Are all Accessories available? ---");
console.log(allAccessoriesAvailable);


// --- Câu 7: Tính tổng giá trị kho hàng (price * quantity) ---
const totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);

console.log("\n--- Câu 7: Total Inventory Value ---");
console.log(totalValue + " VND");


// --- Câu 8: Dùng for...of để in ra: Name - Category - Status ---
console.log("\n--- Câu 8: Loop Output (for...of) ---");
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable}`);
}


// --- Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị ---
console.log("\n--- Câu 9: Loop Output (for...in) ---");
// We select the first product to test this loop
const sampleProduct = products[0]; 

for (const key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`);
}


// --- Câu 10: Lấy danh sách TÊN các sp đang bán (isAvailable) VÀ còn hàng (qty > 0) ---
const activeProductNames = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);

console.log("\n--- Câu 10: Names of Active & In-Stock Products ---");
console.log(activeProductNames);