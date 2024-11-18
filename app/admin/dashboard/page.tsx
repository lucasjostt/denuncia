'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import BotaoVoltar from "@/components/BotaoVoltar";

export default function AdminDashboard() {
  const [view, setView] = useState<'default' | 'denuncias' | 'relatorios'>('default');

  const handleViewDenuncias = () => setView('denuncias');
  const handleViewRelatorios = () => setView('relatorios');
  const handleBackToDashboard = () => setView('default');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Painel Administrativo</h1>

        {view === 'default' && (
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-4">Visualizar Denúncias</h2>
              <Button onClick={handleViewDenuncias} className="bg-blue-500 text-white">
                Acessar Denúncias
              </Button>
            </div>

            <div className="bg-green-100 p-6 rounded-lg shadow-md flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-4">Relatórios</h2>
              <Button onClick={handleViewRelatorios} className="bg-green-500 text-white">
                Acessar Relatórios
              </Button>
            </div>
          </div>
        )}

        {view === 'denuncias' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Lista de Denúncias</h2>
            <p>Aqui você verá a lista de denúncias em detalhes.</p>
            <Button onClick={handleBackToDashboard} className="mt-4 bg-gray-300 text-black">
              Voltar ao Painel
            </Button>
          </div>
        )}

        {view === 'relatorios' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Relatórios</h2>
            <p>Aqui você verá os relatórios disponíveis.</p>
            <Button onClick={handleBackToDashboard} className="mt-4 bg-gray-300 text-black">
              Voltar ao Painel
            </Button>
          </div>
        )}
      </div>

      <div className="absolute top-4 left-4">
        <BotaoVoltar />
      </div>
    </div>
  );
}
