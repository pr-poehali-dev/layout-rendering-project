import React from 'react';

const VinylRecord: React.FC = () => {
  return (
    <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
      <img 
        src="https://cdn.poehali.dev/files/54dee0f1-d48f-4b96-a16c-af3ca68b736a.png" 
        alt="Виниловая пластинка" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default VinylRecord;
