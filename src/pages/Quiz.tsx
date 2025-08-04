import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import QuizQuestion from '@/components/QuizQuestion';
import { quizQuestions } from '@/data/sampleData';
import { ArrowLeft, Trophy, RotateCcw } from 'lucide-react';

const Quiz = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('subject') as 'biology' | 'physics' | 'chemistry';
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  if (!subject || !quizQuestions[subject]) {
    navigate('/');
    return null;
  }

  const questions = quizQuestions[subject];
  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsComplete(false);
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

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return 'Excelente! 🌟';
    if (percentage >= 80) return 'Muito bom! 👏';
    if (percentage >= 70) return 'Bom trabalho! 👍';
    if (percentage >= 60) return 'Continue estudando! 📚';
    return 'Precisa revisar mais! 💪';
  };

  if (isComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Button>
            <h1 className={`text-3xl font-bold ${getSubjectColor(subject)}`}>
              Quiz - {getSubjectTitle(subject)}
            </h1>
          </div>

          <Card className="p-8 text-center animate-bounce-in">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h2 className="text-2xl font-bold mb-4">Quiz Concluído!</h2>
            
            <div className="mb-6">
              <div className={`text-4xl font-bold mb-2 ${getScoreColor(percentage)}`}>
                {score}/{questions.length}
              </div>
              <div className={`text-xl ${getScoreColor(percentage)}`}>
                {percentage}%
              </div>
              <p className="text-lg mt-2">{getScoreMessage(percentage)}</p>
            </div>

            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                onClick={resetQuiz}
                className="flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Refazer Quiz
              </Button>
              
              <Button onClick={() => navigate('/')}>
                Voltar ao Início
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

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
                Quiz - {getSubjectTitle(subject)}
              </h1>
              <p className="text-muted-foreground">
                Questão {currentIndex + 1} de {questions.length}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              {score}/{questions.length}
            </div>
            <div className="text-sm text-muted-foreground">Pontuação</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-muted rounded-full h-3">
            <div 
              className="bg-primary h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <QuizQuestion
          question={currentQuestion.question}
          options={currentQuestion.options}
          correctAnswer={currentQuestion.correctAnswer}
          explanation={currentQuestion.explanation}
          subject={subject}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default Quiz;