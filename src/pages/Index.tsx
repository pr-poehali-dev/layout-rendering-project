import React from 'react';
import VinylRecord from '../components/VinylRecord';
import ButtonLink from '../components/ButtonLink';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <main className="flex-grow flex flex-col md:flex-row items-center justify-between container mx-auto px-4 py-12">
        <div className="relative -left-36 md:-left-20 lg:left-0 overflow-visible">
          <VinylRecord />
        </div>
        
        <div className="max-w-lg space-y-8 mt-4 md:mt-0">
          <h2 className="text-3xl tracking-[0.2em] font-medium text-center md:text-left">
            Candy Бобер
          </h2>
          
          <h1 className="text-5xl md:text-6xl font-black text-center md:text-left">
            Найди свой звук!
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center md:justify-start">
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
