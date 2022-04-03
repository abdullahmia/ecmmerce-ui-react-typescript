import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/authAction';
import TheLayout from '../TheLayout'

const Login = () => {
    const { register, handleSubmit } = useForm<ILoginProps>();

    const dispatch = useDispatch();

    // login submit
    const loginSubmit = (data: ILoginProps) => {
        dispatch(login(data));
    }

  return (
    <TheLayout title='Suruchi | Login'>
        <div className='container mx-auto'>
            <div className='w-full p-10'>
                <form onSubmit={handleSubmit(loginSubmit)} className='w-3/6 mx-auto flex flex-col gap-5 bg-gray-100 p-10'>
                    <h3 className='text-3xl pb-7'>Welcome back..</h3>
                    <input {...register('email')} type="email" className='p-3 rounded-sm focus:outline-none' placeholder='Email Address' />
                    <input {...register('password')} type="password" className='p-3 rounded-sm focus:outline-none' placeholder='Password' />
            
                    <button type="submit" className='bg-red-500 text-gray-50 py-3 uppercase font-semibold hover:bg-red-600 transition'>Login</button>
                    
                    <Link to={'/signup'}>Register an account?</Link>
                </form>
            </div>
        </div>
    </TheLayout>
  )
}

export default Login;