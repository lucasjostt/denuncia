'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { useRouter } from 'next/navigation' // Importa useRouter

export default function TermosDeUso() {
  const [aceitoTermos, setAceitoTermos] = useState(false)
  const router = useRouter() // Instancia o router para redirecionamento

  const handleAceitarTermos = () => {
    if (aceitoTermos) {
      router.push('/inicio') // Redireciona para a página de perfil
    } else {
      alert("Por favor, leia e aceite os Termos de Uso para continuar.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Termos de Uso</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-center">
              Por favor, leia atentamente os seguintes termos de uso antes de utilizar nossa plataforma de denúncias.
            </p>
            <div className="text-lg space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                <strong>1. Aceitação dos Termos</strong>
                <p>
                  Ao utilizar esta plataforma, você concorda em cumprir e ficar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, por favor, não utilize nossos serviços.
                </p>
              </div>
              <div>
                <strong>2. Descrição do Serviço</strong>
                <p>
                  Nossa plataforma oferece um meio para denunciar situações de risco ou violação de direitos envolvendo crianças e adolescentes. O serviço é fornecido com o objetivo de proteger e garantir o bem-estar de menores.
                </p>
              </div>
              <div>
                <strong>3. Uso Responsável</strong>
                <p>
                  Você concorda em utilizar esta plataforma de maneira responsável e ética. É estritamente proibido o envio de denúncias falsas ou mal-intencionadas. Lembre-se que denúncias falsas podem resultar em penalidades legais, incluindo multas e detenção de até 8 anos, conforme previsto na legislação brasileira.
                </p>
              </div>
              <div>
                <strong>4. Confidencialidade e Privacidade</strong>
                <p>
                  Garantimos o sigilo de todas as informações fornecidas. Seus dados pessoais e o conteúdo das denúncias serão tratados com a máxima confidencialidade, sendo acessíveis apenas aos membros autorizados da equipe de investigação.
                </p>
              </div>
              <div>
                <strong>5. Responsabilidades do Usuário</strong>
                <p>Ao utilizar nossa plataforma, você se compromete a:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Fornecer informações verdadeiras e precisas</li>
                  <li>Não utilizar a plataforma para fins ilegais ou não autorizados</li>
                  <li>Manter a confidencialidade de sua conta e senha</li>
                  <li>Notificar imediatamente qualquer uso não autorizado de sua conta</li>
                </ul>
              </div>
              <div>
                <strong>6. Limitação de Responsabilidade</strong>
                <p>
                  Nossa plataforma serve como um meio de comunicação para denúncias. Não nos responsabilizamos pela veracidade das informações fornecidas pelos usuários ou pelos resultados das investigações conduzidas pelas autoridades competentes.
                </p>
              </div>
              <div>
                <strong>7. Modificações dos Termos</strong>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação na plataforma. O uso contínuo de nossos serviços após as alterações constitui aceitação dos novos termos.
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center space-x-2">
              <Checkbox id="termos" checked={aceitoTermos} onCheckedChange={(checked) => setAceitoTermos(checked === true)} />
              <Label htmlFor="termos">
                Li e aceito os Termos de Uso e estou ciente das minhas responsabilidades ao utilizar esta plataforma.
              </Label>
            </div>
            <Button onClick={handleAceitarTermos} className="mt-4 w-full">
              Aceitar e Continuar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
