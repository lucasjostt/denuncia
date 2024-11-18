import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { PlusCircle, FileText, ThumbsUp, FileQuestion, Book, User, AlertTriangle } from 'lucide-react'
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
       <header className="bg-orange-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Usando a tag <img /> padrão */}
          <Image 
              src="/pacre.png"
              alt="PACRE Logo"
              width={200}
              height={100}
              className="rounded-full"
            />
          <p className="text-lg">Bem-vindo à Plataforma de Denúncias</p>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Minhas Denúncias</CardTitle>
              <CardDescription>Visualize e gerencie suas denúncias</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/historicoDenuncia">
                <Button className="w-full"><FileText className="mr-2 h-4 w-4" /> Ver Denúncias</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nova Denúncia</CardTitle>
              <CardDescription>Crie uma nova denúncia</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/denuncia">
                <Button className="w-full"><AlertTriangle className="mr-2 h-4 w-4" /> Fazer Denúncia</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Avaliação da Plataforma</CardTitle>
              <CardDescription>Dê sua opinião sobre a plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/avaliacao">
                <Button className="w-full"><ThumbsUp className="mr-2 h-4 w-4" /> Avaliar</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Termos de Uso</CardTitle>
              <CardDescription>Leia os termos de uso da plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/termosAceitos">
                <Button className="w-full"><FileQuestion className="mr-2 h-4 w-4" /> Ler Termos</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tutorial</CardTitle>
              <CardDescription>Aprenda a usar a plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/tutorial">
                <Button className="w-full"><Book className="mr-2 h-4 w-4" /> Ver Tutorial</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Meu Perfil</CardTitle>
              <CardDescription>Gerencie suas informações pessoais</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/perfil">
                <Button className="w-full"><User className="mr-2 h-4 w-4" /> Ver Perfil</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Relatórios</CardTitle>
              <CardDescription>Acesse relatórios e estatísticas</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/relatoriosUser">
                <Button className="w-full"><PlusCircle className="mr-2 h-4 w-4" /> Ver Relatórios</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
