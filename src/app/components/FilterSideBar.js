'use client';
import { useState } from 'react';

export default function FiltersSidebar({ onFilter }) {
  const [showMore, setShowMore] = useState(false);
  const [specialization, setSpecialization] = useState('');
  const [minExperience, setMinExperience] = useState('');
  const [maxFees, setMaxFees] = useState('');
  const [language, setLanguage] = useState('');
  const [consultMode, setConsultMode] = useState({
    hospitalVisit: false,
    online: false,
  });

  const handleFilter = () => {
    onFilter({
      specialization,
      minExperience,
      maxFees,
      language,
      consultMode,
    });
  };

  const clearAll = () => {
    setSpecialization('');
    setMinExperience('');
    setMaxFees('');
    setLanguage('');
    setConsultMode({
      hospitalVisit: false,
      online: false,
    });
    onFilter({
      specialization: '',
      minExperience: '',
      maxFees: '',
      language: '',
      consultMode: {
        hospitalVisit: false,
        online: false,
      },
    });
  };

  return (
    <aside className="w-full max-w-[260px] bg-white border-r border-gray-200 p-4 space-y-6">
      <div className="flex justify-between items-center text-sm font-semibold text-gray-700">
        <span>Filters</span>
        <button
          className="text-blue-500 text-xs hover:underline"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>

      <button className="w-full border border-blue-500 text-blue-500 text-sm font-medium py-2 rounded hover:bg-blue-50">
        Show Doctors Near Me
      </button>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Mode of Consult</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={consultMode.hospitalVisit}
              onChange={() => setConsultMode({ ...consultMode, hospitalVisit: !consultMode.hospitalVisit })}
            />
            <span>Hospital Visit</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={consultMode.online}
              onChange={() => setConsultMode({ ...consultMode, online: !consultMode.online })}
            />
            <span>Online Consult</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Experience (In Years)</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={minExperience === '0'}
              onChange={() => setMinExperience(minExperience === '0' ? '' : '0')}
            />
            <span>0-5</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={minExperience === '6'}
              onChange={() => setMinExperience(minExperience === '6' ? '' : '6')}
            />
            <span>6-10</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={minExperience === '11'}
              onChange={() => setMinExperience(minExperience === '11' ? '' : '11')}
            />
            <span>11-16</span>
          </label>

          {showMore && (
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="accent-blue-500"
                checked={minExperience === '16'}
                onChange={() => setMinExperience(minExperience === '16' ? '' : '16')}
              />
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
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={maxFees === '500'}
              onChange={() => setMaxFees(maxFees === '500' ? '' : '500')}
            />
            <span>100-500</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={maxFees === '1000'}
              onChange={() => setMaxFees(maxFees === '1000' ? '' : '1000')}
            />
            <span>500-1000</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={maxFees === '1001'}
              onChange={() => setMaxFees(maxFees === '1001' ? '' : '1001')}
            />
            <span>1000+</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Language</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={language === 'English'}
              onChange={() => setLanguage(language === 'English' ? '' : 'English')}
            />
            <span>English</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={language === 'Hindi'}
              onChange={() => setLanguage(language === 'Hindi' ? '' : 'Hindi')}
            />
            <span>Hindi</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="accent-blue-500"
              checked={language === 'Telugu'}
              onChange={() => setLanguage(language === 'Telugu' ? '' : 'Telugu')}
            />
            <span>Telugu</span>
          </label>
          {showMore && (
            <>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={language === 'Marathi'}
                  onChange={() => setLanguage(language === 'Marathi' ? '' : 'Marathi')}
                />
                <span>Marathi</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={language === 'Punjabi'}
                  onChange={() => setLanguage(language === 'Punjabi' ? '' : 'Punjabi')}
                />
                <span>Punjabi</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={language === 'Bengali'}
                  onChange={() => setLanguage(language === 'Bengali' ? '' : 'Bengali')}
                />
                <span>Bengali</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={language === 'Urdu'}
                  onChange={() => setLanguage(language === 'Urdu' ? '' : 'Urdu')}
                />
                <span>Urdu</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={language === 'Gujrati'}
                  onChange={() => setLanguage(language === 'Gujrati' ? '' : 'Gujrati')}
                />
                <span>Gujrati</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={language === 'Tamil'}
                  onChange={() => setLanguage(language === 'Tamil' ? '' : 'Tamil')}
                />
                <span>Tamil</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={language === 'Kannada'}
                  onChange={() => setLanguage(language === 'Kannada' ? '' : 'Kannada')}
                />
                <span>Kannada</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={language === 'Persian'}
                  onChange={() => setLanguage(language === 'Persian' ? '' : 'Persian')}
                />
                <span>Persian</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={language === 'Assamese'}
                  onChange={() => setLanguage(language === 'Assamese' ? '' : 'Assamese')}
                />
                <span>Assamese</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={language === 'Khasi'}
                  onChange={() => setLanguage(language === 'Khasi' ? '' : 'Khasi')}
                />
                <span>Khasi</span>
              </label>
            </>
          )}

          <button
            onClick={handleFilter}
            className="w-full border border-blue-500 text-blue-500 text-sm font-medium py-2 rounded hover:bg-blue-50"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </aside>
  );
}

