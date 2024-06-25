import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const CustomTimePicker = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(value || '10:00 AM');
  const dropdownRef = useRef(null);
  const hoursRef = useRef(null);

  // 72 hours (3 days) to simulate infinite scrolling
  const hours = Array.from({ length: 72 }, (_, i) => {
    const hour = i % 24;
    return {
      hour: hour === 0 ? 12 : hour > 12 ? hour - 12 : hour,
      period: hour < 12 ? 'AM' : 'PM'
    };
  });
  const minutes = ['00', '30'];
  const periods = ['AM', 'PM'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const hoursContainer = hoursRef.current;
    if (hoursContainer) {
      hoursContainer.scrollTop = hoursContainer.scrollHeight / 3; // Start in the middle
    }
  }, [isOpen]);

  const handleTimeChange = (type, value, period) => {
    let [hour, minute, currentPeriod] = selectedTime.split(/:|\s/);

    if (type === 'hour') {
      hour = value.toString().padStart(2, '0');
      currentPeriod = period;
    }
    if (type === 'minute') {
      minute = value;
    }
    if (type === 'period') {
      currentPeriod = value;
    }

    const newTime = `${hour}:${minute} ${currentPeriod}`;
    setSelectedTime(newTime);
    onChange(newTime);
  };

  const handleScroll = () => {
    const hoursContainer = hoursRef.current;
    const { scrollTop, scrollHeight, clientHeight } = hoursContainer;
    const atTop = scrollTop === 0;
    const atBottom = scrollTop + clientHeight === scrollHeight;

    if (atTop) {
      hoursContainer.scrollTop = scrollHeight / 3;
    } else if (atBottom) {
      hoursContainer.scrollTop = scrollHeight / 3;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="box-border flex relative items-center w-full p-2.5 mt-5 rounded border border-solid border-zinc-400 caret-zinc-800 text-[#282828] bg-white focus:outline-none focus:ring-1 focus:ring-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex="0"
      >
        {selectedTime}
        <div className={`absolute right-2 transform transition-transform ${isOpen ? '-rotate-180' : ''}`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronUp size={20} />}
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="flex">
            <div
              className="w-1/3 border-r border-gray-200 overflow-auto text-black"
              ref={hoursRef}
              onScroll={handleScroll}
              style={{ maxHeight: '240px', height: '240px' }}
            >
              {hours.map((item, index) => (
                <div
                  key={`hour-${index}`}
                  className="p-2 hover:bg-gray-100 cursor-pointer text-center"
                  onClick={() => handleTimeChange('hour', item.hour, item.period)}
                >
                  {item.hour.toString().padStart(2, '0')}
                </div>
              ))}
            </div>
            <div className="w-1/3 border-r border-gray-200 text-black">
              {minutes.map((minute) => (
                <div
                  key={`minute-${minute}`}
                  className="p-2 hover:bg-gray-100 cursor-pointer text-center"
                  onClick={() => handleTimeChange('minute', minute)}
                >
                  {minute}
                </div>
              ))}
            </div>
            <div className="w-1/3 text-black">
              {periods.map((period) => (
                <div
                  key={`period-${period}`}
                  className="p-2 hover:bg-gray-100 cursor-pointer text-center"
                  onClick={() => handleTimeChange('period', period)}
                >
                  {period}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTimePicker;