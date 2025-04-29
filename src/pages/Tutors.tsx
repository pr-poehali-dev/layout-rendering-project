import React from 'react';
import { Link } from 'react-router-dom';

const Tutors: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="py-6 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Candy Бобер</Link>
          <nav className="space-x-6">
            <Link to="/studios" className="font-medium">Реп. точки</Link>
            <Link to="/tutors" className="font-medium text-candy-red">Репетиторы</Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Репетиторы</h1>
        <p className="text-xl mb-8">Страница находится в разработке</p>
        <Link to="/" className="text-candy-red hover:underline">← Вернуться на главную</Link>
      </main>
    </div>
  );
};

export default Tutors;
