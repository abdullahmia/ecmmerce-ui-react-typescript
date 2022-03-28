const Product = ({product, onclick}: {
  product: IProduct,
  onclick: (id: string | undefined) => void
}) => {
  return (
    <div className="w-full" onClick={() => onclick(product._id)} >
        <img src={process.env.REACT_APP_CLOUDINARY_IMAGE_LINK + product.image} alt="" className="w-full h-64" />
        <div className="flex flex-col gap-2 mt-3">
          <p className="text-gray-500">Jacket, Woman</p>
          <h2 className="text-lg font-semibold">Light Denim Jacket</h2>
          <p>$164</p>
        </div>
    </div>
  )
}

export default Product;