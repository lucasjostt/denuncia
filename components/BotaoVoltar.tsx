// components/ui/BotaoVoltar.tsx
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";

export default function BotaoVoltar() {
  const router = useRouter();

  const handleVoltar = () => {
    router.push('/inicio');
  };

  return (
    <Button onClick={handleVoltar} className="bg-gray-200 text-black">
      Voltar
    </Button>
  );
}