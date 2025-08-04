import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Flashcard from '@/components/Flashcard';
import { flashcards } from '@/data/sampleData';
import { ArrowLeft, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

const Flashcards = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('subject') as 'biology' | 'physics' | 'chemistry';
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (!subject || !flashcards[subject]) {
    navigate('/');
    return null;
  }

  const cards = flashcards[subject];
  const currentCard = cards[currentIndex];

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const resetCards = () => {
    setCurrentIndex(0);
  };

  const getSubjectTitle = (subject: string) => {
    switch (subject) {
      case 'biology':
        return 'Biologia';
      case 'physics':
        return 'Física';
      case 'chemistry':
        return 'Química';
      default:
        return 'Ciências';
    }
  };

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case 'biology':
        return 'text-green-600';
      case 'physics':
        return 'text-blue-600';
      case 'chemistry':
        return 'text-orange-600';
      default:
        return 'text-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <div>
              <h1 className={`text-3xl font-bold ${getSubjectColor(subject)}`}>
                Flashcards - {getSubjectTitle(subject)}
              </h1>
              <p className="text-muted-foreground">
                Cartão {currentIndex + 1} de {cards.length}
              </p>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            onClick={resetCards}
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reiniciar
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Flashcard */}
        <div className="flex justify-center mb-8">
          <Flashcard
            front={currentCard.front}
            back={currentCard.back}
            subject={subject}
            className="max-w-lg animate-fade-in"
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <Button 
            variant="outline" 
            onClick={prevCard}
            disabled={cards.length <= 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>
          
          <Button 
            variant="outline" 
            onClick={nextCard}
            disabled={cards.length <= 1}
            className="flex items-center gap-2"
          >
            Próximo
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Tips */}
        <Card className="mt-8 p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">💡 Dicas de Estudo</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Clique no cartão para ver a resposta</li>
            <li>• Tente responder mentalmente antes de virar</li>
            <li>• Revise os cartões que tiver mais dificuldade</li>
            <li>• Use espaçamento entre sessões de estudo</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Flashcards;