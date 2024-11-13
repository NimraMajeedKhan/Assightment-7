import React from 'react'


const Balochistan = () => {
  return (
    <div id="balochistan" className='container mt-32 min-h-screen'>
    <div className='flex justify-center pt-28'>
        <div className='h-[300px] w-[700px] bg-no-repeat bg-[url(/balochistan.jpg)] bg-left lg:bg-[15%] bg-cover rounded-[20px] ml-40'></div>
        </div>
        <div className='flex justify-center '>
          <div  className='h-[300px] w-[700px] mt-14 border border-white outline outline-2 rounded-[60px] p-10 ml-40'>
            <h2 className='text-center font-bold text-[40px] '>Balochistan</h2>
            <p className='text-[30px] leading-tight '>Pakistan's largest province, known for its rich minerals resources and unique
              landscapes like Hingol National park and the Coastal city of Gwadar.
            </p>
          </div>
        </div>
    
</div>
  )
}

export default Balochistan