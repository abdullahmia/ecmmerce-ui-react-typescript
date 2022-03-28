import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import collection1 from '../../../assets/images/collection1.png';
import collection2 from '../../../assets/images/collection2.png';
import collection3 from '../../../assets/images/collection3.png';
import collection4 from '../../../assets/images/collection4.png';


const Collections = () => {
  return (
    <div className="container mx-auto py-6">
        <div className="w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
            <div className="p-5 lg:h-auto" style={{background: `url(${collection1})`, backgroundSize: "cover"}}>
                <p className='text-gray-400'>17% Discount</p>
                <h2 className='text-xl font-semibold capitalize'>Spring collection style to</h2>
                <Link to='/discount/collection' className='flex items-center gap-2'>View Discount <AiOutlineArrowRight /> </Link>
            </div>
            <div className='grid grid-cols-1 gap-4'>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
                    <div className="p-5 h-60" style={{background: `url(${collection2})`, backgroundSize: "cover"}}>
                        <p className='text-gray-400'>17% Discount</p>
                        <h2 className='text-xl font-semibold capitalize'>Spring collection style to</h2>
                        <Link to='/discount/collection' className='flex items-center gap-2'>View Discount <AiOutlineArrowRight /> </Link>
                    </div>
                    <div className="p-5 h-60" style={{background: `url(${collection3})`, backgroundSize: "cover", backgroundPosition: "left"}}>
                        <p className='text-gray-400'>17% Discount</p>
                        <h2 className='text-xl font-semibold capitalize'>Spring collection style to</h2>
                        <Link to='/discount/collection' className='flex items-center gap-2'>View Discount <AiOutlineArrowRight /> </Link>
                    </div>
                </div>
                <div>
                    <div className="p-5 h-60" style={{background: `url(${collection4})`, backgroundSize: "cover", backgroundPosition: "left"}}>
                        <p className='text-gray-400'>17% Discount</p>
                        <h2 className='text-xl font-semibold capitalize'>Spring collection style to</h2>
                        <Link to='/discount/collection' className='flex items-center gap-2'>View Discount <AiOutlineArrowRight /> </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collections