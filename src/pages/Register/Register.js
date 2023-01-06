import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {

  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const { createUser } = useContext(AuthContext);
  const handleRegister = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const accountType = data.accountType;
    console.log(email, password, name, accountType);
    createUser(email, password)
      .then(res => {
        const user = res.user;
        console.log(user);
        toast.success('Registration done successfully');
        fetch('http://localhost:5000/users', {
          method: 'POST',
          body: JSON.stringify({
            email, role:accountType, name
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
      })
      .catch(err => console.error(err));
  }
  return (
    <>
      <div className="login-from half">
        <div className="container">
          <div className="form_area">
            <div className="text-center mb-5">
              <h3 className="text-uppercase">
                Register to <strong>TIXLY</strong>
              </h3>
            </div>
            <form
              onSubmit={handleSubmit(handleRegister)}
            >
              <div className="from-group">
                <input
                  type="text"
                  {...register("name", { required: "Email Address is required", })}
                  placeholder="Full Name"
                  className="form-control"
                />
              </div>
              <div className="from-group">
                <input
                  type="email"
                  {...register("email", { required: "Email Address is required", })}
                  placeholder="Email"
                  className="form-control"
                />
              </div>
              <div className="from-group">
                <select {...register("accountType")} className="form-control">
                  <option value="buyer" selected>Buyer</option>
                  <option value="seller">Seller</option>
                </select>
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
              </div>


              <input type="submit" className="btn" />
            </form>
            <p className="text-center mt-3">
              Already have an account?
              <Link to="/login" className="others_regi">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;