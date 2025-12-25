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
      <h2 class="text-2xl font-bold text-white mb-4">A psicologia por trás da desconfiança</h2>
      <p class="mb-4">Se você já participou de uma reunião de amigos onde a tensão se misturava com risadas nervosas, provavelmente estava jogando algo relacionado à dedução social. O Jogo do Impostor conquistou milhões de jogadores justamente por essa combinação única: ele une estratégia mental, observação afiada e muita interação social.</p>
      <p class="mb-4">Diferente de jogos de tabuleiro tradicionais, onde a sorte nos dados define o vencedor, aqui o "tabuleiro" é a mente dos outros jogadores. Cada rodada cria um clima de desconfiança saudável. Você não está lutando contra o jogo; está lutando contra a capacidade de mentir (ou de dizer a verdade) dos seus companheiros.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Por que nenhuma partida é igual?</h2>
      <p class="mb-4">A rejogabilidade é um dos pontos fortes desse gênero. Você pode jogar com o mesmo grupo de pessoas dez vezes seguidas, e as dez partidas serão completamente diferentes. Isso acontece porque o fator humano faz com que nenhuma partida seja igual à outra.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Como funciona a dinâmica básica</h2>
      <ul class="list-disc pl-5 mb-4 space-y-2 text-slate-300">
          <li><strong>Recebimento de informações:</strong> Todos leem suas dicas, menos o impostor.</li>
          <li><strong>Rodada de discussão:</strong> Perguntas e respostas vagas para testar o conhecimento alheio.</li>
          <li><strong>Votação:</strong> O momento da verdade onde as alianças se rompem.</li>
      </ul>
      <p class="mb-4">No fim das contas, ganhar ou perder é detalhe. O que faz sucesso mesmo é a história que o grupo cria junto: aquela mentira descarada que colou ou a acusação perfeita que desmascarou o vilão no último segundo.</p>
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
      <p class="mb-4">Quem joga o Jogo do Impostor "analogicamente" sabe que a bagunça é quase inevitável. O TikJogos surgiu para resolver esses atritos, funcionando como um juiz digital.</p>
      
      <h3 class="text-xl font-semibold text-indigo-300 mb-2">Centralizando a bagunça</h3>
      <p class="mb-4">O principal problema de grupos grandes é o fluxo de informação. "De quem é a vez?", "Quanto tempo falta?". O TikJogos centraliza essas informações e ajuda a manter o controle do andamento do jogo.</p>
      
      <h3 class="text-xl font-semibold text-indigo-300 mb-2">Vantagens de digitalizar a partida</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2 text-slate-300">
          <li><strong>Sorteio imparcial:</strong> O algoritmo define o impostor, garantindo aleatoriedade real.</li>
          <li><strong>Sigilo:</strong> Cada um vê sua palavra/função na própria tela.</li>
          <li><strong>Timer automático:</strong> A pressão do tempo é real e igual para todos.</li>
      </ul>
      <p class="mb-4">Experimente rodar a próxima partida com o auxílio do site e perceba como o ritmo fica mais dinâmico.</p>
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
      <p class="mb-4">Ser impostor exige mais do que simplesmente mentir. É fundamental manter um comportamento coerente durante toda a partida.</p>
      
      <h3 class="text-xl font-semibold text-indigo-300 mb-2">A Regra de Ouro: Coerência</h3>
      <p class="mb-4">O maior erro dos novatos é tentar ser criativo demais. Se você costuma falar pouco quando é inocente, não comece a falar pelos cotovelos agora. Tente replicar seu "estado natural" de jogo.</p>
      
      <h3 class="text-xl font-semibold text-indigo-300 mb-2">Use os outros a seu favor</h3>
      <p class="mb-4">Deixe que os inocentes falem primeiro. Muitas vezes, um inocente confuso dá uma dica que você pode "roubar" e usar como se fosse sua. Jogar de impostor é a arte de se esconder à vista de todos.</p>
    `
  }
];

async function seed() {
  console.log("Seeding blog posts...");
  for (const postData of seedPosts) {
    const existing = await storage.getPostBySlug(postData.slug);
    if (!existing) {
      await storage.createPost(postData);
      console.log(`Created post: ${postData.title}`);
    } else {
      // Update existing posts to match the new structure/content if needed
      // For simplicity, we just log they exist
      console.log(`Post already exists: ${postData.slug}`);
    }
  }
  console.log("Seeding complete!");
}

seed().catch(console.error);
