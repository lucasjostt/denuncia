'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle } from 'lucide-react';
import BotaoVoltar from "@/components/BotaoVoltar";

const categorias = [
  "Negligência",
  "Abandono parental",
  "Maus tratos",
  "Faltas na instituição de ensino",
  "Baixo rendimento escolar",
  "Abuso psicológico",
  "Abuso físico",
  "Abuso sexual por terceiro",
  "Abuso sexual por familiar",
  "Abuso sexual por amigo/conhecido da família",
  "Trabalho infantil"
];

export default function SubmissaoDenuncia() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const confirmSubmit = () => {
    setIsModalOpen(false);
    console.log('Denúncia submetida');
    alert("Sua denúncia será recebida por uma equipe, que irá investigar. Não desperdice o tempo e recursos públicos com denúncias falsas.");
    // Aqui você implementaria a lógica de envio da denúncia
  };

  const cancelSubmit = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Submissão de Denúncia</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="descricao">Descrição da Denúncia</Label>
            <Textarea id="descricao" placeholder="Forneça informações detalhadas sobre a denúncia" required />
          </div>
          
          <div>
            <Label>Categorias da Denúncia</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {categorias.map(categoria => (
                <div key={categoria} className="flex items-center space-x-2">
                  <Checkbox 
                    id={categoria} 
                    checked={selectedCategories.includes(categoria)}
                    onCheckedChange={() => handleCategoryChange(categoria)}
                  />
                  <Label htmlFor={categoria}>{categoria}</Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="suspeito">Nome Completo do Suspeito</Label>
            <Input id="suspeito" placeholder="Digite o nome completo do suspeito" required />
          </div>

          <div>
            <Label htmlFor="crianca">Nome Completo da Criança</Label>
            <Input id="crianca" placeholder="Digite o nome completo da criança" required />
          </div>

          <div>
            <Label htmlFor="idade">Idade da Criança</Label>
            <Input id="idade" type="number" placeholder="Digite a idade da criança" required />
          </div>

          <div>
            <Label htmlFor="endereco">Endereço da Criança ou Escola</Label>
            <Input id="endereco" placeholder="Digite o endereço da criança ou escola onde estuda" required />
          </div>

          <div className="p-4 bg-yellow-100 rounded-md">
            <p className="text-sm flex items-center">
              <AlertCircle className="mr-2 h-4 w-4" />
              Sua denúncia será tratada com sigilo. Todas as informações fornecidas serão mantidas em confidencialidade.
            </p>
          </div>

          <Button type="submit" className="w-full">Enviar Denúncia</Button>
        </form>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full text-center">
              <AlertCircle className="mx-auto mb-4 h-8 w-8 text-yellow-500" />
              <h2 className="text-xl font-bold mb-4">Atenção</h2>
              <p className="mb-6">Denúncias falsas são crime e podem resultar em sanções legais, incluindo detenção de até 8 anos, conforme a legislação brasileira. Use este recurso de forma responsável.</p>
              <div className="flex justify-center space-x-4">
                <Button onClick={confirmSubmit} className="bg-blue-500 text-white">Confirmar</Button>
                <Button onClick={cancelSubmit} className="bg-gray-300">Cancelar</Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute top-4 left-4">
        <BotaoVoltar />
      </div>
    </div>
  );
}
