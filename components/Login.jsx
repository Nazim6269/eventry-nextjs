import Link from 'next/link';

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign in</h4>
        <form className="login-form">
          {/* <!-- email --> */}
          <div>
            <label for="email">Email Address</label>
            <input
              className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
              type="email"
              name="email"
              id="email"
            />
          </div>
          {/* <!-- password --> */}
          <div>
            <label for="password">Password</label>
            <input
              className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
              type="password"
              name="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
          >
            Login
          </button>
        </form>

        <span className="text-center text-xs text-gray-500">
          Don&apost have an account?
          <Link
            className="underline hover:text-indigo-600"
            href="./register.html"
          >
            Register
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Login;
