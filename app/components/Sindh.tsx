import React from 'react'

const Sindh = () => {
  return (
    <div id="sindh" className='container mt-32 min-h-screen'>
        <div className='flex justify-center pt-28'>
            <div className='h-[300px] w-[700px] bg-no-repeat bg-[url(/sindh.jpg)] bg-left lg:bg-[15%] bg-cover rounded-[20px] ml-40' ></div>
            </div>
            <div className='flex justify-center '>
              <div  className='h-[300px] w-[700px] mt-14 border border-white outline outline-2 rounded-[60px] p-10 ml-40' >
                <h2 className='text-center font-bold text-[40px] '>Sindh</h2>
                <p className='text-[30px] leading-tight '>Sindh is defined by ancient sites like Mohenjo-daro and the bustling city of Karachi,
                  Pakistan's economic hub.Sindhi culture and folk music also make Sindh special.
                </p>
              </div>
            </div>
        
    </div>
  )
}

export default Sindh