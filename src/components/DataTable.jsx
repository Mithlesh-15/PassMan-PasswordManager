import React from 'react';
import { Trash2 } from 'lucide-react';


  return (
    <div className="w-full max-w-4xl mx-auto mt-10 p-4">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-600">
            <tr>
              {/* Header Cells - Bold White Text */}
              <th scope="col" className="px-6 py-4 text-left text-base font-bold text-white uppercase tracking-wider">
                Website URL
              </th>
              <th scope="col" className="px-6 py-4 text-left text-base font-bold text-white uppercase tracking-wider">
                Username
              </th>
              <th scope="col" className="px-6 py-4 text-left text-base font-bold text-white uppercase tracking-wider">
                Password
              </th>
              <th scope="col" className="px-6 py-4 text-left text-base font-bold text-white uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item, index) => (
              // Alternating color: 'bg-white' or 'bg-gray-50'
              // Hover effect: 'hover:bg-blue-50' (A very light blue on hover)
              <tr 
                key={index} 
                className={`
                  ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} 
                  hover:bg-blue-50 transition duration-150 ease-in-out cursor-pointer
                `}
              >
                {/* Data Cells - Standard text color */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.URL}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.password}
                </td>
                <td onClick={(e)=> detele(e)} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Trash2/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;