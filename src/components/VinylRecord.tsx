import React from 'react';

const VinylRecord: React.FC = () => {
  return (
    <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
      <div className="absolute inset-0 rounded-full bg-black animate-spin-slow">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[30%] h-[30%] rounded-full bg-candy-red z-10 flex items-center justify-center">
            <div className="w-[10%] h-[10%] rounded-full bg-white"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-80">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-transparent to-black"></div>
        </div>
      </div>
    </div>
  );
};

export default VinylRecord;
