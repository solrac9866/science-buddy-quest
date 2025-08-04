import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Lightbulb } from 'lucide-react';

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  subject: 'biology' | 'physics' | 'chemistry';
  onNext: () => void;
}

const QuizQuestion = ({ 
  question, 
  options, 
  correctAnswer, 
  explanation, 
  subject,
  onNext 
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
  };

  const isCorrect = selectedAnswer === correctAnswer;

  const getSubjectVariant = (subject: string) => {
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

  const getOptionStyle = (index: number) => {
    if (!showResult) {
      return "border-2 border-border hover:border-primary transition-colors";
    }
    
    if (index === correctAnswer) {
      return "border-2 border-green-500 bg-green-50 text-green-800";
    }
    
    if (index === selectedAnswer && selectedAnswer !== correctAnswer) {
      return "border-2 border-red-500 bg-red-50 text-red-800";
    }
    
    return "border-2 border-border opacity-60";
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">{question}</h3>
        </div>

        <div className="space-y-3">
          {options.map((option, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg cursor-pointer transition-all ${getOptionStyle(index)}`}
              onClick={() => handleAnswerSelect(index)}
            >
              <div className="flex items-center gap-3">
                {showResult && index === correctAnswer && (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                )}
                {showResult && index === selectedAnswer && selectedAnswer !== correctAnswer && (
                  <XCircle className="w-5 h-5 text-red-600" />
                )}
                <span className="font-medium">
                  {String.fromCharCode(65 + index)})
                </span>
                <span>{option}</span>
              </div>
            </div>
          ))}
        </div>

        {showResult && (
          <div className="mt-6 p-4 bg-muted rounded-lg animate-fade-in">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <h4 className="font-semibold mb-2">
                  {isCorrect ? '✅ Correto!' : '❌ Incorreto'}
                </h4>
                <p className="text-muted-foreground">{explanation}</p>
              </div>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button 
                variant={getSubjectVariant(subject)} 
                onClick={onNext}
              >
                Próxima Questão
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default QuizQuestion;