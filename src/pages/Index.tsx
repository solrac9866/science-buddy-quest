import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import SubjectCard from '@/components/SubjectCard';
import { Microscope, Atom, FlaskConical, GraduationCap, BookOpen, Target } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const handleSubjectNavigation = (subject: string, type: string) => {
    navigate(`/${type}?subject=${subject}`);
  };

  const subjects = [
    {
      title: 'Biologia',
      description: 'Estude a vida e os organismos',
      icon: Microscope,
      subject: 'biology' as const,
    },
    {
      title: 'Física',
      description: 'Explore as leis da natureza',
      icon: Atom,
      subject: 'physics' as const,
    },
    {
      title: 'Química',
      description: 'Descubra as transformações da matéria',
      icon: FlaskConical,
      subject: 'chemistry' as const,
    },
  ];

  const features = [
    {
      icon: '🃏',
      title: 'Flashcards Interativos',
      description: 'Cartões que viram para testar seu conhecimento de forma dinâmica'
    },
    {
      icon: '🎯',
      title: 'Quiz Personalizado',
      description: 'Questões de múltipla escolha com feedback instantâneo'
    },
    {
      icon: '📚',
      title: 'Resoluções Passo a Passo',
      description: 'Soluções detalhadas para entender cada conceito'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full">
              <GraduationCap className="w-16 h-16" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Ciências da Natureza
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-in">
            Plataforma completa para estudar Biologia, Física e Química com métodos interativos e eficazes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="secondary" size="xl" className="shadow-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Começar a Estudar
            </Button>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Target className="w-5 h-5 mr-2" />
              Fazer Quiz
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Como Você Vai Estudar
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Escolha sua Disciplina
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subjects.map((subject, index) => (
              <SubjectCard
                key={index}
                title={subject.title}
                description={subject.description}
                icon={subject.icon}
                subject={subject.subject}
                onFlashcards={() => handleSubjectNavigation(subject.subject, 'flashcards')}
                onQuiz={() => handleSubjectNavigation(subject.subject, 'quiz')}
                onQuestions={() => handleSubjectNavigation(subject.subject, 'questions')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Escolha uma disciplina acima e comece sua jornada de aprendizado com nossa plataforma interativa
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button variant="science" size="lg">
                🧬 Biologia
              </Button>
              <Button variant="physics" size="lg">
                ⚛️ Física
              </Button>
              <Button variant="chemistry" size="lg">
                🧪 Química
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-background/80">
            © 2024 Ciências da Natureza - Plataforma Educacional
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
