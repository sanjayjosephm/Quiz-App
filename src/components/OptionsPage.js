import React from 'react';

const OptionsPage = ({ questionNumber }) =>{
    return(
        <div className="bg-white h-full p-6 pt-10 rounded-3xl flex-1">
          <h2 className="text-lg mb-11 font-Satoshi font-medium">Select One Of The Following Options.</h2>
          <div className="space-y-4 ">
            <label className="flex border-[1px] w-1/2 border-[#BBBBBB] py-4 pl-8 rounded-full items-center space-x-3">
              <input type="radio" name="option" className="form-radio h-5 w-5 font-bold text-blue-600" />
              <span className='font-Satoshi font-medium text-base'>print 42;</span>
            </label>
            <label className="flex border-[1px] w-1/2 border-[#BBBBBB] py-4 pl-8 rounded-full items-center space-x-3">
              <input type="radio" name="option" className="form-radio h-5 w-5 font-bold text-blue-600" />
              <span className='font-Satoshi font-medium text-base'>print 42;</span>
            </label>
            <label className="flex border-[1px] w-1/2 border-[#BBBBBB] py-4 pl-8 rounded-full items-center space-x-3">
              <input type="radio" name="option" className="form-radio h-5 w-5 font-bold text-blue-600" />
              <span className='font-Satoshi font-medium text-base'>print (42)</span>
            </label>
          </div>
        </div>
    )
}

export default OptionsPage;