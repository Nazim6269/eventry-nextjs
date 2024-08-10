'use client';

import { loginUser } from '@/app/actions';
import { useState } from 'react';

const Login = () => {
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      await loginUser(formData);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="my-2 text-red-500">{error}</div>

      <form className="login-form" onSubmit={onSubmit}>
        {/* <!-- email --> */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        {/* <!-- password --> */}
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
