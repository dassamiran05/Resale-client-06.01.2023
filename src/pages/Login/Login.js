import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useToaster } from "react-hot-toast";

const Login = () => {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const { signInUser, setUserCoustom } = useContext(AuthContext);
  // const [loginUserEmail, setLoginUserEmail] = useState('');
  // const [token] = useToaster(loginUserEmail);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = data => {
    const email = data.email;
    const password = data.password;

    signInUser(email, password)
      .then(res => {
        const user = res.user;

        fetch('http://localhost:5000/jwt', {
          method: 'POST',
          body: JSON.stringify({
            email,
          }),
          headers: {
            'Content-type': 'application/json',
          },
        })
          .then(res => res.json())
          .then((data) => {
            setUserCoustom(data.user);
            localStorage.setItem("accessToken", data.accessToken);
            navigate(from, { replace: true });
          })
        // .catch(err => console.error(err));
        // setLoginUserEmail(email);
        // navigate(from, { replace: true });



        reset();
      })
      .catch(err => console.error(err));

  }

  return (
    <>
      <div className="login-from half">
        <div className="container">
          <div className="form_area all_from_type">
            <div className="text-center mb-5">
              <h3 className="text-uppercase">
                Login to <strong>TIXLY</strong>
              </h3>
            </div>
            <form
              onSubmit={handleSubmit(handleLogin)}
            >
              {/* <input {...register("firstName")} placeholder="First name" className='form-control'/> */}
              <div className="from-group">
                <input
                  type="email"
                  {...register("email", { required: "Email Address is required", })}
                  placeholder="Email"
                  className="form-control"
                />
                {errors.email && <p role="alert">{errors.email?.message}</p>}
              </div>
              <div className="from-group">
                <input
                  type="password"
                  {...register("password",
                    {
                      required: "Password Address is required",
                      minLength: {
                        value: 6,
                        massage: 'Password must be 6 characters'
                      },
                    })}
                  placeholder="Password"
                  className="form-control"
                />
                {errors.password && <p role="alert">{errors.password?.message}</p>}
              </div>
              <input type="submit" className="btn" />
            </form>
            <p className="text-center mt-3">
              you dont have an account?
              <Link to="/register" className="others_regi">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
