'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Camera } from 'lucide-react'
import BotaoVoltar from "@/components/BotaoVoltar";


export default function MeuPerfil() {
  const [nome, setNome] = useState('João da Silva')
  const [email, setEmail] = useState('joao.silva@exemplo.com')
  const [telefone, setTelefone] = useState('(11) 98765-4321')
  const [cpf, setCpf] = useState('123.456.789-00')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para atualizar os dados do perfil
    console.log('Perfil atualizado')
    alert('Perfil atualizado com sucesso!')
  }

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para alterar a senha
    console.log('Senha alterada')
    alert('Senha alterada com sucesso!')
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Aqui você implementaria a lógica para fazer upload da foto
    console.log('Foto enviada')
    alert('Foto de perfil atualizada com sucesso!')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Meu Perfil</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Foto de Perfil</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Avatar className="w-32 h-32 mb-4">
                <AvatarImage src="/placeholder.svg" alt="Foto de perfil" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <Label htmlFor="photo-upload" className="cursor-pointer">
                <div className="flex items-center justify-center w-full">
                  <Camera className="mr-2" />
                  <span>Alterar foto</span>
                </div>
                <Input 
                  id="photo-upload" 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </Label>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Informações da Conta</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="dados">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="dados">Dados Pessoais</TabsTrigger>
                  <TabsTrigger value="senha">Alterar Senha</TabsTrigger>
                </TabsList>
                <TabsContent value="dados">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="nome">Nome Completo</Label>
                      <Input 
                        id="nome" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input 
                        id="telefone" 
                        value={telefone} 
                        onChange={(e) => setTelefone(e.target.value)} 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="cpf">CPF</Label>
                      <Input 
                        id="cpf" 
                        value={cpf} 
                        onChange={(e) => setCpf(e.target.value)} 
                        required 
                        disabled 
                      />
                    </div>
                    <Button type="submit">Atualizar Dados</Button>
                  </form>
                </TabsContent>
                <TabsContent value="senha">
                  <form onSubmit={handlePasswordChange} className="space-y-4">
                    <div>
                      <Label htmlFor="senha-atual">Senha Atual</Label>
                      <Input id="senha-atual" type="password" required />
                    </div>
                    <div>
                      <Label htmlFor="nova-senha">Nova Senha</Label>
                      <Input id="nova-senha" type="password" required />
                    </div>
                    <div>
                      <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
                      <Input id="confirmar-senha" type="password" required />
                    </div>
                    <Button type="submit">Alterar Senha</Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 p-4 bg-yellow-100 rounded-md">
          <p className="text-sm flex items-center">
            <AlertCircle className="mr-2 h-4 w-4" />
            Mantenha seus dados atualizados para garantir a segurança da sua conta e o correto processamento das suas denúncias.
          </p>
        </div>
      </div>
      <div className="absolute top-4 left-4">
        <BotaoVoltar />
      </div>
    </div>
  )
}