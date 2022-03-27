import { useState, useEffect } from 'react';
import ProductService from '../../../services/Product.service';
import TheLayout from "../TheLayout";
import ProductArray from './ProductArray';

const Home = () =>  {
    const [products, setProducts] = useState<[] | any>([]);

    useEffect(() => {
        ProductService.getAllProducts()
            .then((data) => setProducts(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <TheLayout title="Suruchi Fashion Ecommerce">
            <h2>this is home page</h2>
            <ProductArray products={products} />
        </TheLayout>
    )
}

export default Home;