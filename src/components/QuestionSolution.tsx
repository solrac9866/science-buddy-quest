import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, BookOpen, Target } from 'lucide-react';

interface SolutionStep {
  title: string;
  content: string;
  formula?: string;
}

interface QuestionSolutionProps {
  question: string;
  subject: 'biology' | 'physics' | 'chemistry';
  topic: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  steps: SolutionStep[];
  finalAnswer: string;
}

const QuestionSolution = ({ 
  question, 
  subject, 
  topic, 
  difficulty, 
  steps, 
  finalAnswer 
}: QuestionSolutionProps) => {
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);

  const toggleStep = (index: number) => {
    setExpandedSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil':
        return 'bg-green-100 text-green-800';
      case 'Médio':
        return 'bg-yellow-100 text-yellow-800';
      case 'Difícil':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Question Header */}
      <Card className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <BookOpen className={`w-6 h-6 ${getSubjectColor(subject)}`} />
            <div>
              <h2 className={`text-lg font-semibold ${getSubjectColor(subject)} capitalize`}>
                {subject}
              </h2>
              <p className="text-sm text-muted-foreground">{topic}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>
        
        <div className="bg-muted p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Questão:</h3>
          <p className="text-foreground">{question}</p>
        </div>
      </Card>

      {/* Solution Steps */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Target className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-semibold">Resolução Passo a Passo</h3>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="border border-border rounded-lg">
              <Button
                variant="ghost"
                className="w-full p-4 flex items-center justify-between hover:bg-muted"
                onClick={() => toggleStep(index)}
              >
                <div className="flex items-center gap-3">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="font-medium text-left">{step.title}</span>
                </div>
                {expandedSteps.includes(index) ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </Button>
              
              {expandedSteps.includes(index) && (
                <div className="p-4 pt-0 animate-fade-in">
                  <div className="bg-background border-l-4 border-l-primary pl-4 py-3">
                    <p className="text-muted-foreground mb-3">{step.content}</p>
                    {step.formula && (
                      <div className="bg-muted p-3 rounded font-mono text-sm">
                        {step.formula}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final Answer */}
        <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <h4 className="font-semibold text-primary mb-2">Resposta Final:</h4>
          <p className="text-foreground font-medium">{finalAnswer}</p>
        </div>
      </Card>
    </div>
  );
};

export default QuestionSolution;