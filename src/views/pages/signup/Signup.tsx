import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cogoToast from 'cogo-toast';
import TheLayout from "../TheLayout"
import { singup } from '../../../redux/actions/authAction';

const Signup = () => {
    const { register, handleSubmit, reset } = useForm<ISignupProps>();
    const navigate = useNavigate();

    // signup submit
    const signupSubmit = (data: ISignupProps) => {
        singup(data, () => {
            reset();
            cogoToast.success('Registered Successfull');
            navigate('/login');
        });
    }
  return (
    <TheLayout title="Signup | Suruchi">
        <div className='container mx-auto'>
            <div className='w-full p-10'>
                <form onSubmit={handleSubmit(signupSubmit)} className='w-3/6 mx-auto flex flex-col gap-5 bg-gray-100 p-10'>
                    <h3 className='text-3xl pb-7'>Welcome back..</h3>
                    <input {...register('name')} type="text" className='p-3 rounded-sm focus:outline-none' placeholder='Full Name' />
                    <input {...register('email')} type="email" className='p-3 rounded-sm focus:outline-none' placeholder='Email Address' />
                    <input {...register('phone')} type="number" className='p-3 rounded-sm focus:outline-none' placeholder='Phone Number' />
                    <input {...register('password')} type="password" className='p-3 rounded-sm focus:outline-none' placeholder='Password' />
            
                    <button type="submit" className='bg-red-500 text-gray-50 py-3 uppercase font-semibold hover:bg-red-600 transition'>Login</button>
                    
                    <Link to={'/login'}>Already have a account?</Link>
                </form>
            </div>
        </div>
    </TheLayout>
  )
}

export default Signup