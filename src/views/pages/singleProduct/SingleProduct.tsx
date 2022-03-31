import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useAPI from '../../../hooks/useAPI';
import ProductService from '../../../services/Product.service';

import TheLayout from "../TheLayout"
import { add_to_cart, remove_from_cart } from '../../../redux/actions/cartAction';

const SingleProduct = () => {

  const { id = "" } = useParams();

  const { data: product } = useAPI<IProduct>(() => ProductService.getSingleProduct(id));

  const dispatch = useDispatch();

  return (
    <TheLayout title="Product title will be here">
        <div className="container mx-auto">
          <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            {
              product ? (
                <>
                  <div className="w-full">
                    <img src={process.env.REACT_APP_CLOUDINARY_IMAGE_LINK + product.image} alt="" />
                  </div>
                  <div className='flex flex-col gap-4'>
                    <h2 className='text-3xl'>{product.name}</h2>
                    <h1>{product.category}</h1>
                    <h2 className='text-xl font-semibold'>${product.price}</h2>
                    <div className='flex gap-3'>
                      <button
                        onClick={() => dispatch(add_to_cart(product as IProduct))}
                      className='bg-blue-500 text-gray-50 px-4 py-2'>Add To Cart</button>
                      <button
                        onClick={() => dispatch(remove_from_cart(id))}
                      className='bg-orange-500 text-gray-50 px-4 py-2'>Remove from Cart</button>
                    </div>
                    <p>{product.description}</p>
                  </div>
                </>
              ) : null
            }
          </div>
        </div>
    </TheLayout>
  )
}

export default SingleProduct;