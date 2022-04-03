import { Link } from 'react-router-dom';
import { AiFillCar, AiOutlineMail, AiOutlineSearch, AiOutlineUser, AiFillHeart, AiOutlineShoppingCart, AiFillBulb } from "react-icons/ai";
import logo from '../../../assets/images/logo.png';

const Header = () => {
  return (
    <div className="">
        {/* Mini header */}
        <div className="bg-red-500 text-gray-100 py-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div className="flex items-center gap-5">
                        <p>Welcome to Netmark online Store</p>
                        <p className="flex items-center">
                            <AiFillCar className="mr-2" />
                            <span>Track your orders</span>
                        </p>
                    </div>
                    <div className="flex flex-row-reverse">
                        <p className="flex items-center">
                            <AiOutlineMail className="mr-2" />
                            <span>suruchi@suruchi.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto py-5">
            <div className="grid grid-cols-3 items-center">
                <Link to={'/'}>
                    <img src={logo} alt="" />
                </Link>
                <div className="">
                    <div className="flex">
                        <input type="text" placeholder="Keywords here...." className="w-full border border-gray-200 p-3" />
                        <button className="bg-red-500 text-gray-50 px-5 hover:bg-red-400 transition">
                            <AiOutlineSearch className="text-2xl" />
                        </button>
                    </div>
                </div>

                <div className="flex gap-3 items-center ml-auto">
                    <Link to='/login' className="flex flex-col items-center">
                        <AiOutlineUser className="text-3xl" />
                        <p className="text-gray-500">My Account </p>
                    </Link>
                    <div className="flex flex-col items-center">
                        <AiFillHeart className="text-3xl" />
                        <p className="text-gray-500">Wish List</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <AiOutlineShoppingCart className="text-3xl" />
                        <p className="text-gray-500">My Cart</p>
                    </div>
                </div>

            </div>
        </div>

        {/* Navber */}
        <div className="border border-gray-200 py-5">
            <div className="container mx-auto">
                <div className="grid grid-cols-2">
                    <div className='flex gap-9'>
                        <Link to={'/'} className="text-gray-600">Home</Link>
                        <Link to={'/about'} className="text-gray-600">About</Link>
                        <Link to={'/shop'} className="text-gray-600">Shop</Link>
                        <Link to={'/contact'} className="text-gray-600">Categories</Link>
                        <Link to={'/contact'} className="text-gray-600">Blogs</Link>
                        <Link to={'/contact'} className="text-gray-600">Contact</Link>
                    </div>
                    <div className='flex flex-row-reverse'>
                        <p className='flex items-center gap-3'>
                            <AiFillBulb className='text-2xl text-yellow-400' />
                            <span className='text-lg'>Special up to 60% Off all item</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header;