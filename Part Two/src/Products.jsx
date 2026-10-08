function Products() {
    const products = [
        { id: 1, name: 'Learning React', price: 25 },
        { id: 2, name: 'Pro React', price: 40 },
        { id: 3, name: 'Beginning React', price: 15 },
    ]

    const listProducts = products.map((product) =>
        <li>{product}</li>
    )
    return (
        <div>
            <h2>Products</h2>
        </div>
    )
}

export default Products