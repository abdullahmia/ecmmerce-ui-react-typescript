import { useNavigate } from 'react-router-dom';
import Product from "../../components/common/Product"

const ProductArray = ({products}: {products: IProduct[]}) => {
  let navigage = useNavigate();
  const onClick = (id: string | undefined) => {
    navigage('/product/'+ id);
  }

  return (
    <div className="container mx-auto mt-16">
        <h4 className="text-center text-3xl font-bold">All Products</h4>
        <div className="grid gap-3 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 mt-7">
          {
              products.map((product, key) => (
                  <Product product={product} onclick={onClick} />
              ))
          }
        </div>
    </div>
  )
}

export default ProductArray;