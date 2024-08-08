import Link from 'next/link';

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Register</h4>
        <form className="login-form">
          {/* <!-- name --> */}
          <div>
            <label for="name">Full Name</label>
            <input
              className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
              type="text"
              name="name"
              id="name"
            />
          </div>
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
          {/* <!-- phone --> */}
          <div>
            <label for="phone">Phone Number</label>
            <input
              className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
              type="tel"
              name="pnone"
              id="phone"
            />
          </div>
          {/* <!-- bio --> */}
          <div>
            <label for="bio">Bio</label>
            <input
              className="w-full bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
              type="text"
              name="bio"
              id="bio"
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
          >
            Register
          </button>
        </form>

        <span className="text-center text-xs text-gray-500">
          Already have an account?
          <Link className="underline hover:text-indigo-600" href="./login.html">
            Login
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Register;
