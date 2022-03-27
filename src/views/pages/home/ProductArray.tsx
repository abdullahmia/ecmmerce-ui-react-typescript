import Product from "../../components/common/Product"

const ProductArray = ({products}: {products: any[]}) => {
  return (
    <div>
        <h4>All Products</h4>
        {
            products.map((product, key) => (
                <Product />
            ))
        }
    </div>
  )
}

export default ProductArray;