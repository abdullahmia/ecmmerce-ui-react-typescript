import useAPI from '../../../hooks/useAPI';
import ProductService from '../../../services/Product.service';
import Slider from '../../components/custom/Slider';
import TheLayout from "../TheLayout";
import Collections from './Collections';
import ProductArray from './ProductArray';

const Home = () =>  {
    const { data: products } = useAPI<IProduct[]>(ProductService.getAllProducts);
    return (
        <TheLayout title="Suruchi Fashion Ecommerce">
            <Slider />
            <div>
                <Collections />
            </div>
            <div>
                { products && <ProductArray products={products} /> }
            </div>
        </TheLayout>
    )
}

export default Home;