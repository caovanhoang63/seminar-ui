import './App.css'
import {useEffect, useState} from "react";

interface Product {
    name: string;
    price: number;
    unit: string;
}


function App() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/products`).then((response: Response) => {
            response.json().then(data => setProducts(data));
        })
    },[])
    return (
        <>
            <h1>Chợ nông sản H5</h1>
            <h2>Ngày: {new Date().toLocaleDateString()}</h2>
            <h2>Danh mục sản phẩm:</h2>
            <ul>
                {products.map((product: Product) => (
                    <li key={product.name}>
                        {product.name}: ${product.price}/{product.unit}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
