

import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../SocialLogin/SocialLogin';
import useHook from '../../hook/useHook';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import BreadCums from '../BreadCums/BreadCums';

const LogIn = () => {
    const{passwordLogin} = useHook();
    const navigate = useNavigate();

    const {
      register,
      handleSubmit
    } = useForm();

    const onSubmit = (data) => {
      passwordLogin(data.email, data.password)
      .then(result => {
        const email = data.email;
        const loggedUser = result.user
        toast.success("Login Successfully done")
        console.log(loggedUser);
        const user = {email}
        
        // Get access token
        axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
        .then(res => {
          console.log(res.data);
          if(res.data.success){
              navigate(location?.state ? location?.state : '/login')
              navigate('/')
          }
        })

      })
      .catch(error => {
        toast.error(error.message);
        console.log(error.message);
      })

    }
    
  return (
    <div className='mt-2'>
        <Helmet>
            <title>Misams Kitchen | Login</title>
        </Helmet>
        <BreadCums></BreadCums>
      <div className="hero  bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row-reverse mt-2 w-full md:w-2/3">
          <div className="text-center lg:text-left md:w-1/2 w-full">
            {/* <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <p className="py-6 text-center">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
            <div>
           <SocialLogin></SocialLogin>
            <p className='mt-2 md:px-6 mb-2 text-center'><small>New here? <Link className='font-medium text-orange-500 hover:underline' to='/register'>Create an account</Link></small></p>
           </div>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 md:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className='text-2xl font-bold text-center'>Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  {...register("email")}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...register("password")}
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
           {/*    <div className="form-control">
                <label className="label">
               
                </label>
                <input
               
                  type="text"
                  name="captcha"
                  placeholder="Type Captcha"
                  className="input input-bordered"
                 
                />
              
              </div> */}
              <div className="form-control mt-4">
                <input   className="btn bg-sky-400 hover:bg-sky-600" type="submit" value="Login" />
              </div>
            </form>
          {/*  <div>
           <SocialLogin></SocialLogin>
            <p className='mt-2 px-8 mb-4 text-center'><small>New here? <Link className='text-orange-500' to='/register'>Create an account</Link></small></p>
           </div> */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
