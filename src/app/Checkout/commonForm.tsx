import React from "react";

type Props = {};

function CommonForm({ }: Props) {
  return (
    <div className="rounded flex flex-col gap-3">
      <label htmlFor="select country" className="sr-only rounded-md">
        select country
      </label>
      <select
        name="countries"
        id="countries"
        className="w-full h-10 text-left px-2"
      >
        <option value="in">India</option>
      </select>

      <div className='gap-2 my-3'>
        <label htmlFor="First Name" className='sr-only'>First Name</label>
        <input type="text" placeholder='First Name (Optional)' className='mt-4 w-full md:w-1/2 p-2 my-3 border' />

        <label htmlFor="Last Name" className="sr-only">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Last Name"
          className="p-2 w-full md:w-1/2 my-3 border"
        />
      </div>

      <label htmlFor="Address" className="sr-only">
        Address
      </label>
      <input
        type="Address"
        placeholder="Address"
        className="w-full p-2 my-3 border"
      />

      <label htmlFor="ApartMent" className="sr-only">
        ApartMent
      </label>
      <input
        type="text"
        placeholder="Apartment , Suite , etc. (Optional)"
        className="w-full p-2 my-3 border"
      />

  <div className='flex flex-col md:flex-row gap-2'>
    <label htmlFor="city" className='sr-only'>City</label>
    <input type="text" placeholder='City' className='w-full p-2 my-3 border' />

      <label htmlFor="state" className="sr-only">
        State
      </label>
      <input
        type="text"
        placeholder="State"
        className="w-full p-2 my-3 border"
      />

      <label htmlFor="pincode" className="sr-only">
        PIN Code
      </label>
      <input
        type="tel"
        placeholder="PIN Code"
        className="w-full p-2 my-3 border"
      />
    </div>
  </div>
  );
}

export default CommonForm;
