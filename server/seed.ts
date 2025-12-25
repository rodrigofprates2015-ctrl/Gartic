import { storage } from "../server/storage";

const seedPosts = [
  {
    title: "O que é o Jogo do Impostor e por que ele faz tanto sucesso?",
    slug: "o-que-e-o-jogo-do-impostor",
    category: "Pilar",
    excerpt: "Descubra a psicologia por trás da desconfiança e entenda por que esse jogo de dedução social conquistou milhões de pessoas.",
    featured: true,
    author: "Equipe TikJogos",
    content: `
      <p class="mb-4">Se você já participou de uma reunião de amigos onde a tensão se misturava com risadas nervosas, provavelmente estava jogando algo relacionado à dedução social. O Jogo do Impostor conquistou milhões de jogadores justamente por essa combinação única: ele une estratégia mental, observação afiada e muita interação social.</p>
      <p class="mb-4">Mas o que torna essa dinâmica tão viciante? A resposta curta é que ele transforma seus amigos em enigmas. A proposta é simples na teoria, mas na prática exige uma atenção constante aos detalhes e ao comportamento de quem está ao seu redor.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">A psicologia por trás da desconfiança</h2>
      <p class="mb-4">Diferente de jogos de tabuleiro tradicionais, onde a sorte nos dados define o vencedor, aqui o "tabuleiro" é a mente dos outros jogadores. Cada rodada cria um clima de desconfiança saudável. Você não está lutando contra o jogo; está lutando contra a capacidade de mentir (ou de dizer a verdade) dos seus companheiros.</p>
      <p class="mb-4">Qualquer atitude pode levantar suspeitas. Se alguém fica muito quieto, é suspeito. Se fala demais, é suspeito. Esse estado de alerta permanente é o que mantém todos os participantes envolvidos do início ao fim da partida. Ninguém fica esperando passivamente a sua vez de jogar; o jogo acontece em tempo real, na conversa e nos olhares.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Por que nenhuma partida é igual?</h2>
      <p class="mb-4">A rejogabilidade é um dos pontos fortes desse gênero. Você pode jogar com o mesmo grupo de pessoas dez vezes seguidas, e as dez partidas serão completamente diferentes.</p>
      <p class="mb-4">Isso acontece porque o factor humano faz com que nenhuma partida seja igual à outra. Em uma rodada, seu amigo tímido pode ser um impostor agressivo; na outra, ele pode ser um inocente injustiçado. Essa variabilidade torna o jogo sempre interessante e imprevisível.</p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Como funciona a dinâmica básica</h2>
      <p class="mb-4">Geralmente, o grupo recebe uma palavra secreta ou um tema, exceto uma pessoa: o impostor. O objetivo dele é se misturar e fingir que sabe do que todos estão falando. Já o objetivo do grupo é identificar quem é o intruso antes que seja tarde demais.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2 text-slate-300">
          <li><strong>Recebimento de informações:</strong> Todos leem suas dicas, menos o impostor.</li>
          <li><strong>Rodada de discussão:</strong> Perguntas e respostas vagas para testar o conhecimento alheio.</li>
          <li><strong>Votação:</strong> O momento da verdade onde as alianças se rompem.</li>
      </ul>
    `
  },
  {
    title: "Como usar o TikJogos para partidas mais organizadas",
    slug: "como-usar-o-tikjogos",
    category: "Dica",
    excerpt: "Chega de bagunça com papel e caneta. Veja como a tecnologia pode eliminar a burocracia e focar na estratégia.",
    featured: false,
    author: "Equipe TikJogos",
    content: `
      <p class="mb-4">Quem joga o Jogo do Impostor "analogicamente" (usando papel e caneta ou apenas a conversa) sabe que a bagunça é quase inevitável. Sorteios manuais demoram, alguém sempre vê o papel do outro sem querer, e cronometrar as rodadas vira uma tarefa chata.</p>
      <p class="mb-4">Foi para resolver esses atritos que o TikJogos surgiu. A plataforma funciona como uma solução prática para organizar partidas do Jogo do Impostor, eliminando a burocracia para que vocês possam ir direto ao que interessa.</p>
      
      <h3 class="text-xl font-semibold text-indigo-300 mb-2">Centralizando a bagunça</h3>
      <p class="mb-4">O principal problema de grupos grandes é o fluxo de informação. "De quem é a vez?", "Quanto tempo falta?", "Quem já votou?". O TikJogos centraliza essas informações e ajuda a manter o controle do andamento do jogo.</p>
      <p class="mb-4">Ao usar a ferramenta como "juiz" e organizador, você tira o peso das costas dos participantes. Ninguém precisa ficar de fora para moderar a partida; o sistema faz isso por vocês.</p>
      
      <h3 class="text-xl font-semibold text-indigo-300 mb-2">Vantagens de digitalizar a partida</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2 text-slate-300">
          <li><strong>Sorteio imparcial:</strong> O algoritmo define o impostor, garantindo aleatoriedade real.</li>
          <li><strong>Sigilo:</strong> Cada um vê sua palavra/função na própria tela, sem risco de "espiar".</li>
          <li><strong>Timer automático:</strong> A pressão do tempo é real e igual para todos.</li>
      </ul>
    `
  },
  {
    title: "Estratégias básicas para quem joga como impostor",
    slug: "estrategias-impostor",
    category: "Estratégia",
    excerpt: "Tirou a carta do Impostor? Não entre em pânico. Aprenda a mentir com coerência e usar os outros a seu favor.",
    featured: false,
    author: "Equipe TikJogos",
    content: `
      <p class="mb-4">Tirar a carta (ou receber o aviso na tela) de que você é o Impostor gera um pico de adrenalina imediato. Para alguns, é pânico; para outros, é a glória. Mas, independentemente de como você se sente, sobreviver exige técnica.</p>
      
      <h3 class="text-xl font-semibold text-indigo-300 mb-2">A Regra de Ouro: Coerência</h3>
      <p class="mb-4">O maior erro dos novatos é tentar ser criativo demais. É fundamental manter um comportamento coerente durante toda a partida. Se você costuma falar pouco quando é inocente, não comece a falar pelos cotovelos agora.</p>
      
      <h3 class="text-xl font-semibold text-indigo-300 mb-2">Use os outros a seu favor</h3>
      <p class="mb-4">Deixe que os inocentes falem primeiro. Muitas vezes, um inocente confuso dá uma dica que você pode "roubar" e usar como se fosse sua. Ou, melhor ainda, dois inocentes podem começar a brigar entre si. Quando isso acontece, o melhor que o impostor pode fazer é pegar a pipoca e assistir.</p>
    `
  },
  {
    title: "Dicas para identificar o impostor mais rápido",
    slug: "identificar-impostor-rapido",
    category: "Estratégia",
    excerpt: "Aprenda a ler os sinais sutis, contradições e o comportamento apressado que entregam os mentirosos.",
    featured: false,
    author: "Equipe TikJogos",
    content: `
      <p class="mb-4">Todo grupo tem aquele jogador que se acha o Sherlock Holmes, mas acaba acusando a pessoa errada na primeira rodada. Não seja essa pessoa. Encontrar o impostor não é um jogo de adivinhação, é um jogo de paciência e análise fria.</p>
      <h3 class="text-xl font-semibold text-indigo-300 mb-2">O perigo da pressa</h3>
      <p class="mb-4">O impostor sente o tempo correr de forma diferente. Para ele, cada segundo de silêncio é uma tortura, então a tendência natural é tentar preencher o vazio ou desviar o foco rapidamente.</p>
      <h3 class="text-xl font-semibold text-indigo-300 mb-2">A caça às contradições</h3>
      <p class="mb-4">A verdade é fácil de lembrar porque ela é um fato. A mentira é uma construção mental que precisa ser sustentada. Por isso, pequenas contradições costumam aparecer com o tempo.</p>
    `
  },
  {
    title: "A importância da comunicação no Jogo do Impostor",
    slug: "importancia-comunicacao",
    category: "Social",
    excerpt: "Não é sobre quem mente melhor, é sobre quem fala melhor. Descubra como a oratória define o vencedor.",
    featured: false,
    author: "Equipe TikJogos",
    content: `
      <p class="mb-4">Muitas pessoas acham que o Jogo do Impostor é sobre quem mente melhor. Na verdade, ele é sobre quem se comunica melhor. A oratória e a capacidade de persuasão são as armas mais letais nessa arena.</p>
      <h3 class="text-xl font-semibold text-indigo-300 mb-2">A arte de ouvir (Escuta Ativa)</h3>
      <p class="mb-4">Em uma mesa barulhenta, quem ouve tem vantagem. Ouvir os argumentos dos outros jogadores é tão importante quanto defender o próprio ponto de vista.</p>
      <h3 class="text-xl font-semibold text-indigo-300 mb-2">Construindo pontes e alianças</h3>
      <p class="mb-4">Ninguém ganha esse jogo sozinho. Para os inocentes, a união faz a força. Um diálogo bem construído aumenta a confiança do grupo e influencia diretamente o resultado da partida.</p>
    `
  },
  {
    title: "Por que jogos de dedução social são tão envolventes?",
    slug: "por-que-jogos-deducao-envolventes",
    category: "Pilar",
    excerpt: "Um mergulho profundo na psicologia dos jogos, o 'círculo mágico' da mentira e a química da emoção.",
    featured: false,
    author: "Equipe TikJogos",
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">O \"Círculo Mágico\" da Mentira</h2>
      <p class="mb-4">Na teoria dos jogos, existe o conceito de \"círculo mágico\": um espaço onde as regras do mundo real são suspensas e novas regras passam a valer. No mundo real, mentir destrói a confiança. Dentro do jogo, mentir é a mecânica principal.</p>
      <p class="mb-4">Essa inversão de valores é liberadora. Permite que as pessoas explorem facetas da sua personalidade que raramente usam no cotidiano, tudo em um ambiente seguro e controlado.</p>
    `
  }
];

async function seed() {
  console.log("Seeding 15 blog posts...");
  for (const postData of seedPosts) {
    const existing = await storage.getPostBySlug(postData.slug);
    if (!existing) {
      await storage.createPost(postData);
      console.log(`Created post: ${postData.title}`);
    } else {
      console.log(`Post already exists: ${postData.slug}`);
    }
  }
  console.log("Seeding complete!");
}

seed().catch(console.error);
