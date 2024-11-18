'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from 'lucide-react'

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{isLogin ? 'Login' : 'Cadastro'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {isLogin ? (
              <>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">Login via GOV</Button>
                  <Button variant="outline" className="w-full">Login com telefone</Button>
                  <Button variant="outline" className="w-full">Login com e-mail</Button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" type="text" placeholder="000.000.000-00" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked={acceptedTerms} onCheckedChange={() => setAcceptedTerms(!acceptedTerms)} />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Concordo com os termos de uso e estou ciente das responsabilidades
                  </label>
                </div>
              </>
            )}
            <Button type="submit" className="w-full" disabled={!isLogin && !acceptedTerms}>
              {isLogin ? 'Entrar' : 'Cadastrar'}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 hover:underline">
              {isLogin ? 'Criar uma conta' : 'Já tenho uma conta'}
            </button>
          </div>
          <div className="mt-4 p-4 bg-yellow-100 rounded-md">
            <p className="text-sm text-yellow-800 flex items-center">
              <AlertCircle className="mr-2" size={16} />
              Seus dados são mantidos sob sigilo. Denúncias falsas podem levar a penalidades.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}