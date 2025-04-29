import React from 'react';
import ButtonLink from '../components/ButtonLink';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-white overflow-hidden relative">
      {/* Виниловая пластинка */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <img 
          src="https://cdn.poehali.dev/files/54dee0f1-d48f-4b96-a16c-af3ca68b736a.png" 
          alt="Виниловая пластинка" 
          className="w-[550px] h-auto"
        />
      </div>
      
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-lg space-y-8 px-4 text-center">
          <h2 className="text-3xl tracking-[0.2em] font-medium">
            C a n d y Б о б е р
          </h2>
          
          <h1 className="text-5xl md:text-6xl font-black">
            Найди свой звук!
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <ButtonLink href="/studios" outline>
              реп. точки
            </ButtonLink>
            
            <ButtonLink href="/tutors">
              репетиторы
            </ButtonLink>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
