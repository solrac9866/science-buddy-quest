import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface SubjectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  subject: 'biology' | 'physics' | 'chemistry';
  onFlashcards: () => void;
  onQuiz: () => void;
  onQuestions: () => void;
}

const SubjectCard = ({ 
  title, 
  description, 
  icon: Icon, 
  subject, 
  onFlashcards, 
  onQuiz, 
  onQuestions 
}: SubjectCardProps) => {
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

  const getButtonVariant = (subject: string) => {
    switch (subject) {
      case 'biology':
        return 'science';
      case 'physics':
        return 'physics';
      case 'chemistry':
        return 'chemistry';
      default:
        return 'science';
    }
  };

  return (
    <Card className="overflow-hidden hover-lift group">
      {/* Header with gradient */}
      <div className={`${getSubjectGradient(subject)} p-6 text-white`}>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-lg">
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-white/90 mt-1">{description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="grid gap-3">
          <Button 
            variant={getButtonVariant(subject)}
            className="w-full justify-start"
            onClick={onFlashcards}
          >
            🃏 Flashcards
          </Button>
          
          <Button 
            variant="outline"
            className="w-full justify-start hover:border-primary"
            onClick={onQuiz}
          >
            🎯 Quiz Interativo
          </Button>
          
          <Button 
            variant="outline"
            className="w-full justify-start hover:border-primary"
            onClick={onQuestions}
          >
            📚 Questões Resolvidas
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SubjectCard;