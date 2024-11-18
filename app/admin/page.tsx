'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa o hook useRouter
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import BotaoVoltar from "@/components/BotaoVoltar";

export default function Admin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Instancia o router

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica o login
    if (username === '123' && password === '123') {
      setError('');
      router.push('/admin/dashboard'); // Redireciona para a página do painel
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Label htmlFor="username">Usuário</Label>
            <Input
              id="username"
              type="text"
              placeholder="Digite o usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="Digite a senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </div>

      <div className="absolute top-4 left-4">
        <BotaoVoltar />
      </div>
    </div>
  );
}
