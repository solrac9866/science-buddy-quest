import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import QuestionSolution from '@/components/QuestionSolution';
import { questionSolutions } from '@/data/sampleData';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const Questions = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('subject') as 'biology' | 'physics' | 'chemistry';
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  if (!subject || !questionSolutions[subject]) {
    navigate('/');
    return null;
  }

  const questions = questionSolutions[subject];
  const currentQuestion = questions[currentIndex];

  const nextQuestion = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  const prevQuestion = () => {
    setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length);
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
      <div className="max-w-6xl mx-auto">
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
                Questões Resolvidas - {getSubjectTitle(subject)}
              </h1>
              <p className="text-muted-foreground">
                Questão {currentIndex + 1} de {questions.length}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={prevQuestion}
            disabled={questions.length <= 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Questão Anterior
          </Button>
          
          <Button 
            variant="outline" 
            onClick={nextQuestion}
            disabled={questions.length <= 1}
            className="flex items-center gap-2"
          >
            Próxima Questão
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Question Solution */}
        <div className="animate-fade-in">
          <QuestionSolution
            question={currentQuestion.question}
            subject={subject}
            topic={currentQuestion.topic}
            difficulty={currentQuestion.difficulty}
            steps={currentQuestion.steps}
            finalAnswer={currentQuestion.finalAnswer}
          />
        </div>

        {/* Tips */}
        <Card className="mt-8 p-6 bg-muted/50">
          <h3 className="font-semibold mb-2">📝 Dicas para Resolução</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Leia a questão com atenção e identifique os dados fornecidos</li>
            <li>• Clique em cada passo para ver a explicação detalhada</li>
            <li>• Anote as fórmulas e conceitos importantes</li>
            <li>• Pratique questões similares para fixar o aprendizado</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Questions;