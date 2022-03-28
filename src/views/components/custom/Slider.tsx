import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { Link } from 'react-router-dom';
import banner1 from '../../../assets/images/banner1.jpg';
import banner2 from '../../../assets/images/banner2.jpg';
import banner3 from '../../../assets/images/banner3.jpg';

const Slider = () => {
  return (
    <div>
        <Swiper>
          <SwiperSlide className='w-full py-32' style={{background: `url(${banner1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
              <div className='container mx-auto w-full grid grid-cols-2'>
                  <div>
                      <h2 className='text-5xl font-bold'>The Great Fashion Collection 2022</h2>
                      <p className='mb-5'>upto 40% Off Final Sale Item. Caought in the moment</p>
                      <Link to={'/collection'} className="bg-red-600 text-gray-50 py-3 px-6 rounded-sm hover:bg-red-700 transition">Show Collection</Link>
                  </div>
                  <div></div>
              </div>
          </SwiperSlide>

          <SwiperSlide className='w-full py-32' style={{background: `url(${banner2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
              <div className='container mx-auto w-full grid grid-cols-2'>
                  <div>
                      <h2 className='text-5xl font-bold'>The Great Fashion Collection 2022</h2>
                      <p className='mb-5'>upto 40% Off Final Sale Item. Caought in the moment</p>
                      <Link to={'/collection'} className="bg-red-600 text-gray-50 py-3 px-6 rounded-sm hover:bg-red-700 transition">Show Collection</Link>
                  </div>
                  <div></div>
              </div>
          </SwiperSlide>

          <SwiperSlide className='w-full py-32' style={{background: `url(${banner3})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
              <div className='container mx-auto w-full grid grid-cols-2'>
                  <div>
                      <h2 className='text-5xl font-bold'>The Great Fashion Collection 2022</h2>
                      <p className='mb-5'>upto 40% Off Final Sale Item. Caought in the moment</p>
                      <Link to={'/collection'} className="bg-red-600 text-gray-50 py-3 px-6 rounded-sm hover:bg-red-700 transition">Show Collection</Link>
                  </div>
                  <div></div>
              </div>
          </SwiperSlide>
          
        </Swiper>
    </div>
  )
}

export default Slider