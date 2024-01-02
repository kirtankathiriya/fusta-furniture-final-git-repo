import { HeaderBottom } from '@/app/component/Header/headerBottom'
import HeaderMiddleMenu from '@/app/component/Header/headerMiddle'
import CommonDivider from '@/components/common/homeDivider/commonDivider'
import Footer from '@/app/component/foter/footer'
import React from 'react'

function SignUP() {
  return (
    <>
      <HeaderMiddleMenu />
      <HeaderBottom />
      <CommonDivider Name="Create Account" />

      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Create Account</h1>
        <p className='text-center'>Please register using account details below.</p>

        <form className="mt-4">
          <div className="mb-4">
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="border rounded-md px-3 py-2 w-full"
            />
          </div>

          <div>
            <button className="bg-orange-500 hover:bg-black text-white font-bold py-2 px-4 rounded">
              Create
            </button>
          </div>
        </form>

        <div>
          <h4 className='hover:text-orange-500 mt-4 mb-4'><a href="http://localhost:3000/">Return to Store</a></h4>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignUP
