'use client'

import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import BotaoVoltar from "@/components/BotaoVoltar";


export default function Tutorial() {
  const tutorialSteps = [
    {
      title: "Como fazer login",
      content: "Para entrar no sistema, clique no botão 'Entrar' no canto superior direito da tela. Você pode usar seu CPF, e-mail ou telefone para fazer login. Se for sua primeira vez, clique em 'Criar conta' para se cadastrar.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Como fazer uma denúncia",
      content: "Para fazer uma denúncia, clique no botão laranja com o símbolo '+' no canto inferior direito da tela. Preencha todos os campos com as informações necessárias e clique em 'Enviar Denúncia' no final do formulário.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Como ver minhas denúncias",
      content: "Para ver suas denúncias anteriores, clique em 'Minhas Denúncias' no menu principal. Você verá uma lista de todas as denúncias que você fez, com informações sobre o status de cada uma.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Como atualizar meu perfil",
      content: "Para atualizar suas informações pessoais, clique em 'Meu Perfil' no menu principal. Você pode alterar sua foto, nome, e-mail e senha nesta página.",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Como obter ajuda",
      content: "Se você precisar de ajuda a qualquer momento, clique no botão 'Ajuda' no canto superior direito da tela. Você encontrará respostas para perguntas frequentes e poderá entrar em contato com nossa equipe de suporte.",
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Tutorial: Como Usar Nossa Plataforma</h1>
        <p className="text-center mb-8 text-lg">
          Bem-vindo ao nosso tutorial! Aqui você aprenderá como usar todas as funcionalidades da nossa plataforma de denúncias.
          Clique em cada seção abaixo para ver instruções detalhadas.
        </p>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {tutorialSteps.map((step, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-semibold">{step.title}</AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <Image
                        src={step.image}
                        alt={`Ilustração para ${step.title}`}
                        width={300}
                        height={200}
                        className="rounded-lg"
                      />
                      <p className="text-base">{step.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center">
          <p className="text-lg font-semibold">Ainda tem dúvidas?</p>
          <p className="mt-2">
            Entre em contato com nossa equipe de suporte pelo telefone <span className="font-bold">(00) 1234-5678</span> ou
            pelo e-mail <span className="font-bold">suporte@plataformadenuncias.com</span>
          </p>
        </div>
      </div>
      <div className="absolute top-4 left-4">
        <BotaoVoltar />
      </div>
    </div>
  )
}