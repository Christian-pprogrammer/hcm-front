import React from 'react'

const PersonalInfo = () => {
  return (
    <>
         <div className="py-1">
                <label className="block text-gray-700 text-sm font-bold">
                    Patient Name
                </label>
                <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your hospital name" />
                <small className='text-[12px] text-red-500'>Enter Valid info</small>
        </div>
         <div className="py-1">
         <label className="block text-gray-700 text-sm font-bold">
             Patient Number
         </label>
         <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your hospital name" />
         <small className='text-[12px] text-red-500'>Enter Valid info</small>
 </div>
  <div className="py-1">
  <label className="block text-gray-700 text-sm font-bold">
      Patient Tel
  </label>
  <input className="shadow appearance-none bg-inputG border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your hospital name" />
  <small className='text-[12px] text-red-500'>Enter Valid info</small>
</div>
    </>
  )
}

export default PersonalInfo