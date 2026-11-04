// Conteúdo clínico vindo das fisioterapeutas (roteiros de Pega e Posicionamento e de Ordenha).
// Os textos foram passados para a segunda pessoa. Só altere depois da aprovação da coordenação clínica.

const AVISO = 'Esta tecnologia não substitui a assistência profissional.';

// O conteúdo ainda não muda conforme o tipo de seio. Todos os tipos mostram os mesmos módulos.
const TIPOS_DE_SEIO = [
  { id: 'protusa', nome: 'Bico protuso' },
  { id: 'plana', nome: 'Bico plano' },
  { id: 'invertida', nome: 'Bico invertido' },
  { id: 'grande', nome: 'Bico grande' },
  { id: 'pequena', nome: 'Bico pequeno' },
  { id: 'identificar', nome: 'Como identificar o tipo do bico' }
];

// Perguntas do quiz de perfil. Os textos e as opções são provisórios: as fisioterapeutas precisam aprovar.
// O quiz só guarda a resposta no aparelho. Ainda não existe conteúdo diferente para cada perfil.
const QUIZ = {
  perguntas: [
    {
      id: 'tamanho',
      titulo: 'Qual é o tamanho do seu seio?',
      ajuda: 'Toque no desenho que mais se parece com o seu.',
      fala: 'Qual é o tamanho do seu seio? Toque no desenho que mais se parece com o seu.',
      opcoes: [
        { id: 'pequeno', nome: 'Pequeno' },
        { id: 'medio', nome: 'Médio' },
        { id: 'grande', nome: 'Grande' }
      ]
    },
    {
      id: 'papila',
      titulo: 'Como é o bico do seu seio?',
      ajuda: 'O bico do seio também se chama papila mamária. Toque no desenho que mais se parece com o seu.',
      fala: 'Como é o bico do seu seio? Toque no desenho que mais se parece com o seu.',
      opcoes: [
        { id: 'protusa', nome: 'Protuso', legenda: 'Bico para fora' },
        { id: 'plana', nome: 'Plano', legenda: 'Bico rente ao peito' },
        { id: 'invertida', nome: 'Invertido', legenda: 'Bico para dentro' },
        { id: 'grande', nome: 'Grande', legenda: 'Bico comprido' },
        { id: 'pequena', nome: 'Pequeno', legenda: 'Bico pequeno' },
        { id: 'identificar', nome: 'Não sei', legenda: 'Quero ajuda' }
      ]
    }
  ]
};

// Orientações curtas mostradas no resultado do quiz. Texto provisório em linguagem simples,
// baseado em orientações comuns de aleitamento. Precisa da revisão das fisioterapeutas antes de valer.
const ORIENTACOES = {
  papila: {
    protusa: [
      'O bico para fora costuma facilitar a pega.',
      'Confira se o bebê abocanha também a aréola, e não só o bico.',
      'Mantenha a barriga do bebê encostada na sua.'
    ],
    plana: [
      'O bico rente ao peito pode pedir mais paciência no começo.',
      'Antes da mamada, massageie a mama e retire um pouco de leite com a mão para amolecer a região da aréola.',
      'Apoie a mama com a mão em "C" e espere o bebê abrir bem a boca.',
      'Se o bebê tiver dificuldade para pegar, procure o banco de leite.'
    ],
    invertida: [
      'Muitas mulheres com o bico para dentro conseguem amamentar bem.',
      'O bebê mama a mama, não só o bico. O importante é ele abocanhar boa parte da aréola.',
      'Massageie e retire um pouco de leite antes da mamada.',
      'Procure o banco de leite cedo para receber ajuda na pega.'
    ],
    grande: [
      'O bico comprido pode atrapalhar o bebê no começo, porque ele pode engasgar ou encostar o nariz.',
      'Espere o bebê abrir bem a boca antes de levá-lo ao peito.',
      'Veja se ele abocanha a aréola e se consegue respirar pelo nariz.',
      'Se houver dor ou engasgos, procure o banco de leite.'
    ],
    pequena: [
      'O bico pequeno costuma funcionar bem para mamar.',
      'O que importa é o bebê abocanhar boa parte da aréola.',
      'Confira os sinais de pega correta no módulo Pega e posicionamento.'
    ]
  },
  tamanho: {
    pequeno: ['O tamanho do seio não muda a quantidade de leite que você produz.'],
    medio: ['O tamanho do seio não muda a quantidade de leite que você produz.'],
    grande: [
      'O seio grande pesa mais. Apoie a mama por baixo com a mão em "C" ou com uma toalha enrolada.',
      'Use travesseiros para apoiar o bebê e evitar curvar as costas.'
    ]
  }
};

// Chave do Google Maps Embed API (opcional). Sem chave, a tela do banco de leite usa links que abrem o Google Maps.
const CHAVE_MAPS = '';

// Dúvidas e indicações. Os três primeiros itens vêm das orientações da equipe do banco de leite
// (visita do grupo). Os demais são perguntas comuns e precisam ser revisados pelas fisioterapeutas.
const DUVIDAS = [
  {
    titulo: 'Orientações do banco de leite',
    itens: [
      {
        pergunta: 'Até quando o bebê deve tomar só leite materno?',
        resposta: 'Até os 6 meses de idade, sem água, chás, sucos ou outros alimentos. Depois disso, o leite materno continua sendo importante e se junta à alimentação complementar.'
      },
      {
        pergunta: 'Como hidratar a região da aréola?',
        resposta: 'Ao fim da mamada, passe um pouco do seu próprio leite em volta da aréola e do mamilo e deixe secar naturalmente. Isso ajuda a hidratar e a proteger a pele.'
      },
      {
        pergunta: 'A massagem na mama ajuda?',
        resposta: 'Sim. Faça movimentos circulares suaves, da base da mama em direção à aréola, antes de amamentar ou ordenhar. Isso ajuda o leite a sair com mais facilidade e alivia o desconforto.'
      }
    ]
  },
  {
    titulo: 'Dúvidas comuns',
    itens: [
      {
        pergunta: 'Meu leite é fraco ou não é suficiente?',
        resposta: 'Não existe leite fraco. O leite materno se adapta às necessidades do bebê. Quanto mais o bebê mama, mais leite o corpo produz. Se você tem dúvida sobre o ganho de peso dele, converse com um profissional de saúde.'
      },
      {
        pergunta: 'Quantas vezes o bebê deve mamar?',
        resposta: 'Sempre que quiser, de dia e de noite. Nas primeiras semanas é comum mamar de 8 a 12 vezes por dia. Não precisa seguir horário fixo.'
      },
      {
        pergunta: 'Amamentar está doendo. É normal?',
        resposta: 'Um pouco de sensibilidade no início pode acontecer, mas dor forte ou machucado no mamilo costumam indicar que a pega não está correta. Revise a posição e a pega do bebê no módulo Pega e posicionamento. Se a dor continuar, procure o banco de leite ou um profissional de saúde.'
      },
      {
        pergunta: 'A mama está dura e cheia (ingurgitada). O que fazer?',
        resposta: 'Amamente com frequência, faça massagem suave e retire um pouco de leite com a mão para amolecer a região e facilitar a pega. Se aparecer febre, vermelhidão ou um ponto muito dolorido, procure atendimento de saúde.'
      },
      {
        pergunta: 'Posso amamentar se estiver tomando algum remédio?',
        resposta: 'Muitos medicamentos são compatíveis com a amamentação, mas nem todos. Antes de tomar qualquer remédio, avise o médico ou o farmacêutico que você está amamentando.'
      },
      {
        pergunta: 'Quando devo procurar ajuda?',
        resposta: 'Procure um profissional de saúde se tiver febre, mama vermelha e dolorida, machucados que não melhoram, ou se o bebê estiver muito sonolento, mamar pouco ou tiver poucas fraldas molhadas por dia.'
      }
    ]
  }
];

const MODULOS = [
  {
    id: 'pega',
    titulo: 'Pega e posicionamento',
    resumo: 'Aprenda a realizar a pega correta e o posicionamento do bebê.',
    icone: 'bebe',
    href: 'pega.html'
  },
  {
    id: 'ordenha',
    titulo: 'Ordenha do leite',
    resumo: 'Saiba como fazer a ordenha de forma segura e adequada.',
    icone: 'frasco',
    href: 'modulo.html?id=ordenha'
  },
  {
    id: 'armazenamento',
    titulo: 'Armazenamento do leite',
    resumo: 'Veja como conservar o leite materno corretamente.',
    icone: 'gelo',
    href: 'modulo.html?id=armazenamento'
  },
  {
    id: 'cuidados',
    titulo: 'Cuidados na amamentação',
    resumo: 'Dicas importantes para uma amamentação tranquila.',
    icone: 'folha',
    href: 'modulo.html?id=cuidados'
  },
  {
    id: 'suporte',
    titulo: 'Suporte',
    resumo: 'Tire suas dúvidas e encontre apoio quando precisar.',
    icone: 'conversa',
    href: 'modulo.html?id=suporte'
  }
];

// Tipos de seção: "checklist" (com caixinhas), "passos" (numerada) e "lista" (com marcadores).
const TEXTOS = {
  ordenha: {
    titulo: 'Ordenha do leite',
    intro: 'A ordenha é a retirada do leite materno das mamas, com as mãos ou com uma bomba de extração.',
    secoes: [
      {
        titulo: 'Higiene',
        tipo: 'checklist',
        itens: [
          'Lave bem as mãos e os antebraços com água e sabão.',
          'Prenda o cabelo e, se possível, use touca.',
          'Use máscara cobrindo nariz e boca, para evitar gotículas de saliva durante a fala e a respiração.',
          'Limpe as mamas apenas com água, sem sabão nos mamilos.',
          'Use um recipiente de vidro com tampa plástica. O vidro é necessário para a conservação adequada do leite.',
          'Se possível, ferva o recipiente por cerca de 15 a 20 minutos antes de colocar o leite.'
        ]
      },
      // A fisioterapeuta pediu uma demonstração em vídeo desta técnica, porque é onde mais se erra.
      {
        titulo: 'Técnica de ordenha manual',
        tipo: 'checklist',
        itens: [
          'Massageie a mama suavemente, em movimentos circulares, da base em direção à aréola.',
          'Posicione o polegar e os dedos indicador e médio formando um "C" na borda da aréola, sem apertar o mamilo.',
          'Pressione suavemente para dentro, em direção às costelas, e depois um dedo contra o outro, de forma ritmada.',
          'Ordenhe cada mama por cerca de 3 a 5 minutos, alternando, até o fluxo diminuir.',
          'Evite deslizar os dedos sobre a pele, pois isso pode causar dor e lesão do tecido.'
        ]
      },
      {
        titulo: 'Se eu doar, vai faltar para o meu bebê?',
        tipo: 'lista',
        itens: [
          'Não. Quanto mais as mamas são estimuladas pela sucção, mais leite é produzido.'
        ]
      },
      {
        titulo: 'Como doar o leite',
        tipo: 'passos',
        itens: [
          'Vá até o Banco de Leite Humano mais próximo levando RG e CPF, comprovante de endereço e Cartão do SUS, para fazer o cadastro.',
          'No local, você recebe todas as instruções necessárias sobre a coleta e a higiene.',
          'Siga o passo a passo ensinado para retirar e armazenar o leite em casa.',
          'Você não precisa ir até o banco de leite para entregar. Outra pessoa pode levar o frasco para você.'
        ],
        nota: 'Cada banco de leite tem o seu protocolo interno. Confirme as orientações com o banco de leite da sua região.',
        link: { texto: 'Bancos de leite humano no Ceará', url: 'https://www.ce.gov.br/saude/doeleitehumano/' }
      }
    ]
  },

  // Pendente: o protocolo escrito do banco de leite da Maternidade de Quixadá, que a equipe de
  // saúde vai pedir à coordenadora. Os dados de doação abaixo se baseiam no que elas conhecem de lá.
  armazenamento: {
    titulo: 'Armazenamento do leite',
    intro: 'Veja onde e por quanto tempo guardar o leite materno ordenhado.',
    secoes: [
      {
        titulo: 'Onde guardar',
        tipo: 'lista',
        itens: [
          'Em temperatura ambiente: o leite deve ser consumido rapidamente.',
          'Na geladeira: guarde na parte de baixo, mais ao fundo, onde há pouca oscilação de temperatura. O prazo máximo para consumo é de 12 horas.',
          'No freezer ou congelador: a validade é de até 15 dias.',
          'Nunca guarde o leite na porta da geladeira, porque a temperatura oscila o tempo todo.'
        ],
        nota: 'Estes prazos valem para o leite destinado à doação. Para o consumo do próprio bebê, as orientações são diferentes.'
      },
      {
        titulo: 'Pontos importantes',
        tipo: 'checklist',
        itens: [
          'Identifique o pote com a data e o horário da ordenha.',
          'Guarde sempre o leite mais antigo na frente, para ser usado primeiro.',
          'Não complete um pote já congelado com leite morno de uma nova ordenha.'
        ]
      },
      {
        titulo: 'Descongelamento e oferta ao bebê',
        tipo: 'passos',
        itens: [
          'Descongele primeiro na geladeira e depois aqueça em banho-maria. Nunca use micro-ondas nem ferva, porque isso destrói fatores de proteção do leite.',
          'Agite suavemente em círculo, sem sacudir, para misturar a gordura, que se separa naturalmente.',
          'Teste a temperatura pingando uma gota no dorso da mão: o leite deve estar morno, nunca quente.',
          'Descarte o que sobrar após a mamada. Nunca reaproveite.'
        ]
      }
    ],
    fontes: 'Baseado nas Normas Técnicas da Rede Brasileira de Bancos de Leite Humano (BLH-IFF/Fiocruz/Ministério da Saúde), nas recomendações da Sociedade Brasileira de Pediatria e no Manual para Bancos de Leite Humano da ANVISA.'
  },

  cuidados: { titulo: 'Cuidados na amamentação', emElaboracao: true },
  suporte: { titulo: 'Suporte', emElaboracao: true }
};

const PEGA = {
  passos: [
    'Escolha uma posição em que você se sinta relaxada e confortável, com as costas e os braços bem apoiados, sem precisar se curvar sobre o bebê. Se precisar, use travesseiros ou almofadas.',
    'Mantenha o bebê próximo ao seu corpo, com a barriga e o tronco voltados para você. A cabeça e o tronco dele devem ficar alinhados.',
    'Deixe o rosto do bebê de frente para a mama, com o nariz na altura do mamilo.',
    'Com a mão em formato de C, apoie a mama e mantenha a aréola livre.',
    'Quando o bebê abrir bem a boca, aproxime-o da mama. Ele deve abocanhar uma grande parte da aréola, e não apenas o mamilo.'
  ],
  posicoes: [
    'Posição de jogador de futebol americano',
    'Posição cavalinho',
    'Posição laid back'
  ],
  posicoesNota: 'Escolha a posição mais confortável para o ambiente em que você está. Todas seguem os mesmos comandos de alinhamento.',
  sinais: [
    'Boca bem aberta',
    'Lábios voltados para fora',
    'Queixo tocando a mama',
    'Nariz livre',
    'Mais aréola visível acima dos lábios do bebê',
    'Sucção lenta e profunda, com pausas',
    'Deglutição visível ou audível',
    'Bebê bem fixado à mama'
  ],
  destaque: 'Uma boa pega evita dores, previne fissuras e garante uma amamentação mais eficaz.'
};
