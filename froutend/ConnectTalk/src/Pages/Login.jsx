import React from "react";

function Login() {
  return (
    <div class="grid place-items-center h-screen">
      {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
      {/* <h2 className="card-title">Card title!</h2> */}

      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h1 className="text-3xl font-bold underline">Login</h1>
          <div className="card-actions justify-end">
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
