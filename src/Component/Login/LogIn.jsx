

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../SocialLogin/SocialLogin';

const LogIn = () => {
    

    
  return (
    <div>
        <Helmet>
            <title>Misams Kitchen | Login</title>
        </Helmet>
      <div className="hero min-h-screen bg-base-100 ">
        <div className="hero-content flex-col lg:flex-row-reverse mt-4 w-full md:w-2/3">
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
            <form  className="card-body">
            <h1 className='text-2xl font-bold text-center'>Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
               
                </label>
                <input
               
                  type="text"
                  name="captcha"
                  placeholder="Type Captcha"
                  className="input input-bordered"
                  required
                />
               {/* <button onClick={validate} className='btn btn-outline btn-xm mt-2'>Validate</button> */}
              </div>
              <div className="form-control mt-4">
                <input   className="btn bg-sky-400" type="submit" value="Login" />
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
