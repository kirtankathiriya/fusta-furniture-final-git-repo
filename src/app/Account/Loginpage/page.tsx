import React from 'react'
import CommonDivider from '../../../components/common/homeDivider/commonDivider'


type Props = {}

function Login({ }: Props) {
  return (
    <>
      <CommonDivider Name="Account" />

      <div className="flex justify-center items-center h-screen">
        <div className="text-center max-w-md p-6  border shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <p className="text-gray-700 mb-4">Please login using account details below.</p>
          <form action="#" className="flex flex-col">
            <label htmlFor="Email" className="sr-only ">Email</label>
            <input type="email" name="Email" id="email" placeholder="Email" className="border border-gray-300 rounded-md px-3 py-2 mb-4" />
            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" placeholder="Password" className="border border-gray-300 rounded-md px-3 py-2 mb-4" />
            <div className="flex justify-between items-center mb-4">
              <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-black transition duration-300 ease-in-out">
                Sign In
              </button>
              <a href="#" className="text-orange-500 hover:underline">Forgot Password?</a>
            </div>
          </form>
          <div>
            <p className="text-gray-700">Don't have an account?</p>
            <a href="http://localhost:3000/Account/Signup" className="text-orange-500 hover:underline">Create Account</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login