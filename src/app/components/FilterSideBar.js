'use client';
import { useState } from 'react';

export default function FiltersSidebar() {
    const [showMore, setShowMore] = useState(false);

    return (
      <aside className="w-full max-w-[260px] bg-white border-r border-gray-200 p-4 space-y-6">
        
        <div className="flex justify-between items-center text-sm font-semibold text-gray-700">
          <span>Filters</span>
          <button className="text-blue-500 text-xs hover:underline">Clear All</button>
        </div>
  
      
        <button className="w-full border border-blue-500 text-blue-500 text-sm font-medium py-2 rounded hover:bg-blue-50">
          Show Doctors Near Me
        </button>
  
       
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Mode of Consult</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Hospital Visit</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Online Consult</span>
            </label>
          </div>
        </div>
  
      
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Experience (In Years)</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>0-5</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>6-10</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>11-16</span>
            </label>
          
        {showMore && (
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>16+</span>
          </label>
        )}

        <button 
          className="text-blue-500 text-xs hover:underline"
          onClick={() => setShowMore(!showMore)} 
        >
          {showMore ? 'Less' : '+1 More'}
        </button>
          </div>
        </div>
  
       
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Fees (In Rupees)</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>100-500</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>500-1000</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>1000+</span>
            </label>
          </div>
        </div>
  
       
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Language</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>English</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Hindi</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Telugu</span>
            </label>
            {showMore && (
                <>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Marathi</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Punjabi</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Bengali</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Urdu</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Gujrati</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Tamil</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Kannada</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Persian</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Assamese</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="accent-blue-500" />
            <span>Khasi</span>
          </label>
          </>           
        )}

        <button 
          className="text-blue-500 text-xs hover:underline"
          onClick={() => setShowMore(!showMore)} 
        >
          {showMore ? 'Less' : 'More'}
        </button>
           
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Faculty</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Apollo Hospital</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Other CLinics</span>
            </label>
          </div>
        </div>
       
      </aside>
    );
  }
  