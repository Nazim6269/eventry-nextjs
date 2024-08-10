const Payment = () => {
  return (
    <form className="login-form">
      <div className="my-4 space-y-2">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input type="text" id="name" />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input type="email" id="email" />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="card" className="block">
          Card Number
        </label>
        <input type="text" id="card" />
      </div>

      <div className="my-4 space-y-2">
        <label for="expiry" className="block">
          Expiry Date
        </label>
        <input type="text" id="expiry" />
      </div>

      <div className="my-4 space-y-2">
        <label for="cvv" className="block">
          CVV
        </label>
        <input type="text" id="cvv" />
      </div>

      <button
        type="submit"
        className="w-full my-8 bg-indigo-600 hover:bg-indigo-800 py-2 rounded-md"
      >
        Pay Now
      </button>
    </form>
  );
};

export default Payment;
