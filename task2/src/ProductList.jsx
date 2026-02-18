import Card from "./Card";

const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
];

function ProductList() {
    return (
        <div>
            {products.map(product => (
                <Card key={product.id} title={product.name} className="product-card">
                    <p>Price: {product.price}</p>
                </Card>
            ))}
        </div>
    );
}

export default ProductList;