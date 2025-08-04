import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

interface FlashcardProps {
  front: string;
  back: string;
  subject: 'biology' | 'physics' | 'chemistry';
  className?: string;
}

const Flashcard = ({ front, back, subject, className = "" }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getSubjectGradient = (subject: string) => {
    switch (subject) {
      case 'biology':
        return 'biology-gradient';
      case 'physics':
        return 'physics-gradient';
      case 'chemistry':
        return 'chemistry-gradient';
      default:
        return 'biology-gradient';
    }
  };

  return (
    <div className={`flip-card w-full h-64 ${className}`}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front of card */}
        <Card className={`flip-card-front ${getSubjectGradient(subject)} p-6 flex flex-col justify-center items-center text-center cursor-pointer hover-lift`}
              onClick={() => setIsFlipped(true)}>
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Conceito</h3>
            <p className="text-base">{front}</p>
            <p className="text-sm mt-4 opacity-80">Clique para ver a resposta</p>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="flip-card-back bg-card p-6 flex flex-col justify-between cursor-pointer"
              onClick={() => setIsFlipped(false)}>
          <div className="flex-1 flex items-center justify-center text-center">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Explicação</h3>
              <p className="text-muted-foreground">{back}</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Virar
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Flashcard;