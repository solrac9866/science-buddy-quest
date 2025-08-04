// Sample data for the educational platform

export const flashcards = {
  biology: [
    {
      front: "O que é fotossíntese?",
      back: "Processo pelo qual plantas, algas e algumas bactérias convertem luz solar, dióxido de carbono e água em glicose e oxigênio. Ocorre principalmente nos cloroplastos."
    },
    {
      front: "Qual é a função do DNA?",
      back: "O DNA (ácido desoxirribonucleico) armazena as informações genéticas de um organismo, controlando a hereditariedade e a expressão de características."
    },
    {
      front: "O que são mitocôndrias?",
      back: "Organelas celulares responsáveis pela respiração celular e produção de ATP (energia). São conhecidas como 'usinas de força' da célula."
    }
  ],
  physics: [
    {
      front: "O que é velocidade?",
      back: "Velocidade é uma grandeza vetorial que expressa a variação de posição de um objeto em relação ao tempo. É medida em m/s no SI."
    },
    {
      front: "Primeira Lei de Newton",
      back: "Lei da Inércia: Um objeto em repouso permanece em repouso, e um objeto em movimento uniforme permanece em movimento, a menos que uma força externa atue sobre ele."
    },
    {
      front: "O que é energia cinética?",
      back: "Energia associada ao movimento de um corpo. É calculada pela fórmula Ec = ½mv², onde m é a massa e v é a velocidade."
    }
  ],
  chemistry: [
    {
      front: "O que é uma ligação iônica?",
      back: "Ligação química formada pela transferência de elétrons entre um metal (que perde elétrons) e um não-metal (que ganha elétrons), resultando em íons de cargas opostas."
    },
    {
      front: "Defina mol",
      back: "Mol é a unidade de quantidade de matéria no SI. Um mol contém 6,022 × 10²³ entidades elementares (número de Avogadro)."
    },
    {
      front: "O que é pH?",
      back: "pH é uma escala que mede a acidez ou basicidade de uma solução, variando de 0 a 14. pH 7 é neutro, menor que 7 é ácido, maior que 7 é básico."
    }
  ]
};

export const quizQuestions = {
  biology: [
    {
      question: "Qual organela é responsável pela síntese de proteínas?",
      options: ["Mitocôndria", "Ribossomo", "Núcleo", "Lisossomo"],
      correctAnswer: 1,
      explanation: "Os ribossomos são as organelas responsáveis pela síntese de proteínas, traduzindo as informações do RNA mensageiro."
    },
    {
      question: "Em qual fase da mitose os cromossomos se alinham no centro da célula?",
      options: ["Prófase", "Metáfase", "Anáfase", "Telófase"],
      correctAnswer: 1,
      explanation: "Na metáfase, os cromossomos se alinham na região equatorial da célula, formando a placa metafásica."
    }
  ],
  physics: [
    {
      question: "Se um objeto está em movimento retilíneo uniforme, sua aceleração é:",
      options: ["Positiva", "Negativa", "Zero", "Variável"],
      correctAnswer: 2,
      explanation: "No movimento retilíneo uniforme, a velocidade é constante, portanto a aceleração é zero (a = Δv/Δt = 0)."
    },
    {
      question: "A unidade de força no Sistema Internacional é:",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      correctAnswer: 1,
      explanation: "O Newton (N) é a unidade de força no SI, definido como kg⋅m/s²."
    }
  ],
  chemistry: [
    {
      question: "Qual é o número de oxidação do cloro no HClO₃?",
      options: ["-1", "+3", "+5", "+7"],
      correctAnswer: 2,
      explanation: "No HClO₃, considerando H = +1 e O = -2, o Cl deve ter NOX = +5 para que a soma seja zero: (+1) + (+5) + 3(-2) = 0."
    },
    {
      question: "A reação entre um ácido e uma base produz:",
      options: ["Sal e água", "Sal e hidrogênio", "Água e oxigênio", "Apenas sal"],
      correctAnswer: 0,
      explanation: "A reação de neutralização entre ácido e base produz sal e água (reação de neutralização)."
    }
  ]
};

export const questionSolutions = {
  biology: [
    {
      question: "Explique o processo de respiração celular e suas etapas principais.",
      topic: "Metabolismo Celular",
      difficulty: "Médio" as const,
      steps: [
        {
          title: "Glicólise",
          content: "A glicose é quebrada em duas moléculas de piruvato no citoplasma, produzindo 2 ATP e 2 NADH.",
          formula: "C₆H₁₂O₆ + 2 ADP + 2 Pi + 2 NAD⁺ → 2 C₃H₄O₃ + 2 ATP + 2 NADH + 2 H⁺"
        },
        {
          title: "Ciclo de Krebs",
          content: "O piruvato é oxidado na matriz mitocondrial, produzindo CO₂, NADH, FADH₂ e ATP.",
          formula: "2 Piruvato + 8 NAD⁺ + 2 FAD + 2 ADP + 2 Pi → 6 CO₂ + 8 NADH + 2 FADH₂ + 2 ATP"
        },
        {
          title: "Cadeia Respiratória",
          content: "NADH e FADH₂ são oxidados na membrana interna mitocondrial, produzindo a maior parte do ATP.",
          formula: "10 NADH + 2 FADH₂ + 6 O₂ + 34 ADP + 34 Pi → 10 NAD⁺ + 2 FAD + 12 H₂O + 34 ATP"
        }
      ],
      finalAnswer: "A respiração celular produz aproximadamente 38 moléculas de ATP por molécula de glicose, sendo um processo fundamental para obtenção de energia celular."
    }
  ],
  physics: [
    {
      question: "Um carro de 1000 kg acelera de 0 a 20 m/s em 10 segundos. Calcule a força aplicada.",
      topic: "Dinâmica - Leis de Newton",
      difficulty: "Fácil" as const,
      steps: [
        {
          title: "Identificar os dados",
          content: "Massa (m) = 1000 kg; Velocidade inicial (v₀) = 0 m/s; Velocidade final (v) = 20 m/s; Tempo (t) = 10 s",
        },
        {
          title: "Calcular a aceleração",
          content: "Usando a equação da aceleração média: a = (v - v₀)/t",
          formula: "a = (20 - 0)/10 = 2 m/s²"
        },
        {
          title: "Aplicar a Segunda Lei de Newton",
          content: "A força resultante é dada por F = ma",
          formula: "F = 1000 × 2 = 2000 N"
        }
      ],
      finalAnswer: "A força aplicada ao carro é de 2000 N (ou 2 kN)."
    }
  ],
  chemistry: [
    {
      question: "Determine o pH de uma solução 0,01 M de HCl.",
      topic: "Equilíbrio Ácido-Base",
      difficulty: "Fácil" as const,
      steps: [
        {
          title: "Identificar o tipo de ácido",
          content: "HCl é um ácido forte, que se ioniza completamente em solução aquosa.",
          formula: "HCl → H⁺ + Cl⁻"
        },
        {
          title: "Calcular a concentração de H⁺",
          content: "Como a ionização é completa, [H⁺] = [HCl] = 0,01 M",
          formula: "[H⁺] = 1 × 10⁻² mol/L"
        },
        {
          title: "Calcular o pH",
          content: "pH é definido como o logaritmo negativo da concentração de H⁺",
          formula: "pH = -log[H⁺] = -log(1 × 10⁻²) = 2"
        }
      ],
      finalAnswer: "O pH da solução 0,01 M de HCl é 2, caracterizando uma solução ácida."
    }
  ]
};