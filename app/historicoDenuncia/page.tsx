'use client'

import BotaoVoltar from "@/components/BotaoVoltar";
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Tipo para a estrutura de uma denúncia
type Denuncia = {
  id: number;
  tipo: string;
  andamento: string;
  dataRegistro: string;
}

// Componente principal
export default function MinhasDenuncias() {
  const [denuncias, setDenuncias] = useState<Denuncia[]>([])

  useEffect(() => {
    // Simula a busca de dados do banco de dados
    const fetchDenuncias = async () => {
      // Em uma aplicação real, isso seria uma chamada API
      const mockDenuncias: Denuncia[] = [
        { id: 1001, tipo: "Negligência", andamento: "Em análise", dataRegistro: "2023-05-15" },
        { id: 1002, tipo: "Abuso físico", andamento: "Investigação em andamento", dataRegistro: "2023-06-22" },
        { id: 1003, tipo: "Abandono parental", andamento: "Concluído", dataRegistro: "2023-07-10" },
        { id: 1004, tipo: "Trabalho infantil", andamento: "Encaminhado para autoridades", dataRegistro: "2023-08-05" },
        { id: 1005, tipo: "Abuso psicológico", andamento: "Aguardando informações adicionais", dataRegistro: "2023-09-18" },
      ]
      setDenuncias(mockDenuncias)
    }

    fetchDenuncias()
  }, [])

  // Função para determinar a cor do badge de andamento
  const getBadgeColor = (andamento: string) => {
    switch (andamento.toLowerCase()) {
      case 'em análise':
        return 'bg-yellow-500'
      case 'investigação em andamento':
        return 'bg-blue-500'
      case 'concluído':
        return 'bg-green-500'
      case 'encaminhado para autoridades':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Minhas Denúncias</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {denuncias.map((denuncia) => (
            <Card key={denuncia.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Denúncia #{denuncia.id}</span>
                  <Badge variant="outline" className={`${getBadgeColor(denuncia.andamento)} text-white`}>
                    {denuncia.andamento}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Tipo:</strong> {denuncia.tipo}</p>
                <p><strong>Data de Registro:</strong> {new Date(denuncia.dataRegistro).toLocaleDateString('pt-BR')}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {denuncias.length === 0 && (
          <p className="text-center text-gray-500 mt-8">Você ainda não possui denúncias registradas.</p>
        )}
      </div>
      <div className="absolute top-4 left-4">
        <BotaoVoltar />
      </div>
    </div>
  )
}