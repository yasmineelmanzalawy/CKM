import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
const Transcation = () => {
  return (
  <div className="flex flex-col font-russo">
    <h1 className='text-center text-3xl pb-12'>Transcations</h1>
      <div className="overflow-x-auto px-16">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 font-jarkata font-medium">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced]    "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    item_name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    total_quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    unit_of_measurement{"(KG/GM)"}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    unit_price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    created_at
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  ></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                    <tr >
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        tester
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        tester
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        tester
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        tester
                      </td>

                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        tester
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        tester
                      </td>
                      <td className=" px-1 py-4 flex gap-4 text-right whitespace-nowrap">
                        <button className=" hover:scale-110 duration-300 ease-out text-red-500 hover:text-red-700 cursor-pointer">
                          <AiOutlineDelete size={20} />
                         
                        </button>
                        
                      </td>
                    </tr>
                  
            
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transcation