'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, ThumbsUp } from 'lucide-react'
import BotaoVoltar from "@/components/BotaoVoltar";


export default function AvaliacaoPlataforma() {
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para enviar o feedback
    console.log('Feedback enviado')
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Obrigado pelo seu feedback!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <ThumbsUp className="w-16 h-16 text-green-500 mb-4" />
              <p className="text-center">Sua avaliação é muito importante para nós. Utilizaremos suas sugestões para melhorar nossa plataforma.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Avaliação da Plataforma</CardTitle>
            <CardDescription>Ajude-nos a melhorar compartilhando sua experiência</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="experiencia">Como você descreveria sua experiência geral com a plataforma?</Label>
                <Textarea id="experiencia" placeholder="Conte-nos sobre sua experiência..." required />
              </div>

              <div>
                <Label>Quão fácil foi usar nossa plataforma?</Label>
                <RadioGroup defaultValue="regular">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="muito-facil" id="muito-facil" />
                    <Label htmlFor="muito-facil">Muito fácil</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="facil" id="facil" />
                    <Label htmlFor="facil">Fácil</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="regular" id="regular" />
                    <Label htmlFor="regular">Regular</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dificil" id="dificil" />
                    <Label htmlFor="dificil">Difícil</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="muito-dificil" id="muito-dificil" />
                    <Label htmlFor="muito-dificil">Muito difícil</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="problemas">Você encontrou algum problema ao usar a plataforma?</Label>
                <Textarea id="problemas" placeholder="Descreva quaisquer problemas que você tenha encontrado..." />
              </div>

              <div>
                <Label htmlFor="sugestoes">Você tem alguma sugestão para melhorar nossa plataforma?</Label>
                <Textarea id="sugestoes" placeholder="Compartilhe suas ideias para melhorias..." />
              </div>

              <div>
                <Label htmlFor="funcionalidade">Qual funcionalidade você mais gostou?</Label>
                <Select>
                  <SelectTrigger id="funcionalidade">
                    <SelectValue placeholder="Selecione uma funcionalidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="denuncia">Fazer denúncia</SelectItem>
                    <SelectItem value="acompanhamento">Acompanhar denúncias</SelectItem>
                    <SelectItem value="perfil">Gerenciar perfil</SelectItem>
                    <SelectItem value="tutorial">Tutorial</SelectItem>
                    <SelectItem value="outra">Outra</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="satisfacao">De 1 a 5, qual é seu nível de satisfação geral com a plataforma?</Label>
                <Input type="number" id="satisfacao" min="1" max="5" placeholder="5" required />
              </div>

              <div>
                <Label htmlFor="comentarios">Comentários adicionais</Label>
                <Textarea id="comentarios" placeholder="Qualquer outro comentário que você gostaria de compartilhar..." />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} className="w-full">Enviar Avaliação</Button>
          </CardFooter>
        </Card>
        <div className="mt-6 p-4 bg-yellow-100 rounded-md max-w-2xl mx-auto">
          <p className="text-sm flex items-center">
            <AlertCircle className="mr-2 h-4 w-4" />
            Sua avaliação é anônima e nos ajuda a melhorar constantemente nossos serviços. Obrigado por dedicar seu tempo para nos dar feedback!
          </p>
        </div>
      </div>
      <div className="absolute top-4 left-4">
        <BotaoVoltar />
      </div>
    </div>
  )
}