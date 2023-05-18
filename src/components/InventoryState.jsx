import React from 'react'

const InventoryState = () => {
  return (
    <div>
        <div className='flex flex-wrap justify-between item center w-100vw px-[70px] mt-6' >
            <div className='flex-block'>
            <label className='block'>
                <span className='block text-3xl text-[#1F0E74] mb-4'>Product Title</span>
                <input type="text" className='border border-4 rounded-[7px] border-[#1F0E74]' />
            </label>
            </div>

            <div className='flex-block'>
            <label className='block'>
                <span className='block text-3xl text-[#1F0E74] mb-4 text-center'>Type</span>
                <input type="text" className='border border-4  rounded-[7px] border-[#1F0E74]' />
            </label>
            </div>

            <div className='flex'>
            <label className='block'>
                <span className='block text-3xl text-[#1F0E74] mb-4 text-center'>Inventory ID</span>
                <input type="string" className='border border-4  rounded-[7px] border-[#1F0E74]'/>
            </label>
</div>
        </div>
    </div>
  )
}

export default InventoryState