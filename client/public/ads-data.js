/**
 * Sistema de Gerenciamento de Anúncios - TikJogos
 * Dados dos anúncios (House Ads)
 * 
 * Estrutura:
 * - id: Identificador único
 * - imageUrl: URL da imagem do banner
 * - affiliateLink: Link de afiliado (Amazon, Shopee, etc)
 * - altText: Texto alternativo para acessibilidade
 * - category: 'mobile', 'desktop', ou 'all'
 * - weight: Peso de 1-10 (maior = mais chance de aparecer)
 */

const partnerContentData = [
  // Produtos Amazon - Alta Prioridade
  {
    id: 'amz-001',
    imageUrl: 'https://via.placeholder.com/728x90/6b4ba3/ffffff?text=Mouse+Gamer+RGB+-+Clique+Aqui',
    affiliateLink: 'https://amzn.to/4phmY4v',
    altText: 'Mouse Gamer RGB com 7 botões programáveis - Oferta Amazon',
    category: 'all',
    weight: 10,
    customBanner: true,
    productName: 'Mouse Gamer RGB',
    productDescription: 'Alta precisão, 7 botões programáveis',
    productPrice: 'Ver preço na Amazon',
    productBadge: '⚡ OFERTA',
    productIcon: '🖱️'
  },
  {
    id: 'amz-002',
    imageUrl: 'https://via.placeholder.com/300x250/e07b39/ffffff?text=Teclado+Mecânico+-+Clique+Aqui',
    affiliateLink: 'https://amzn.to/4phmY4v',
    altText: 'Teclado Mecânico RGB Switch Blue',
    category: 'desktop',
    weight: 9,
    customBanner: true,
    productName: 'Teclado Mecânico RGB',
    productDescription: 'Switch Blue, iluminação personalizável',
    productPrice: 'Ver na Amazon',
    productBadge: '🔥 POPULAR',
    productIcon: '⌨️'
  },
  {
    id: 'amz-003',
    imageUrl: 'https://via.placeholder.com/320x100/4a90a4/ffffff?text=Headset+Gamer+-+Clique+Aqui',
    affiliateLink: 'https://amzn.to/4phmY4v',
    altText: 'Headset Gamer 7.1 Surround',
    category: 'all',
    weight: 8,
    customBanner: true,
    productName: 'Headset Gamer 7.1',
    productDescription: 'Som surround, microfone com cancelamento',
    productPrice: 'Ver oferta',
    productBadge: '⭐ TOP',
    productIcon: '🎧'
  },

  // Produtos Shopee - Banners Laterais Verticais
  {
    id: 'shp-001',
    imageUrl: '',
    affiliateLink: 'https://shope.ee/exemplo-mousepad',
    altText: 'Mousepad Gamer XXL 90x40cm',
    category: 'desktop',
    weight: 7,
    customBanner: true,
    productName: 'Mousepad XXL',
    productDescription: '90x40cm, base antiderrapante',
    productPrice: 'Ver na Shopee',
    productBadge: '💰 BARATO',
    productIcon: '🖱️',
    position: 'left'  // Banner lateral esquerdo
  },
  {
    id: 'shp-002',
    imageUrl: '',
    affiliateLink: 'https://shope.ee/exemplo-cadeira',
    altText: 'Cadeira Gamer Ergonômica com Apoio Lombar',
    category: 'desktop',
    weight: 6,
    customBanner: true,
    productName: 'Cadeira Gamer',
    productDescription: 'Ergonômica, reclinável 180°',
    productPrice: 'Ver oferta',
    productBadge: '🪑 CONFORTO',
    productIcon: '🪑',
    position: 'right'  // Banner lateral direito
  },

  // Parcerias Diretas - Baixa Prioridade
  {
    id: 'prt-001',
    imageUrl: 'https://via.placeholder.com/728x90/4a90a4/ffffff?text=Curso+de+Programação+-+50%+OFF',
    affiliateLink: 'https://exemplo.com/curso-programacao',
    altText: 'Curso Completo de Desenvolvimento Web',
    category: 'all',
    weight: 4
  },
  {
    id: 'prt-002',
    imageUrl: 'https://via.placeholder.com/300x250/c44536/ffffff?text=VPN+Premium+-+3+Meses+Grátis',
    affiliateLink: 'https://exemplo.com/vpn-premium',
    altText: 'VPN Premium com 3 meses grátis',
    category: 'all',
    weight: 3
  },

  // Promoções Especiais - Mobile
  {
    id: 'mob-001',
    imageUrl: 'https://via.placeholder.com/320x50/6b4ba3/ffffff?text=App+TikJogos+-+Baixe+Agora',
    affiliateLink: 'https://play.google.com/store/apps/tikjogos',
    altText: 'Baixe o App TikJogos na Google Play',
    category: 'mobile',
    weight: 10
  },
  {
    id: 'mob-002',
    imageUrl: 'https://via.placeholder.com/320x50/e07b39/ffffff?text=Fone+Bluetooth+-+R$+59,90',
    affiliateLink: 'https://shope.ee/exemplo-fone-bluetooth',
    altText: 'Fone de Ouvido Bluetooth TWS',
    category: 'mobile',
    weight: 8
  },

  // Banners Genéricos - Fallback
  {
    id: 'gen-001',
    imageUrl: 'https://via.placeholder.com/728x90/3d4a5c/ffffff?text=Apoie+o+TikJogos',
    affiliateLink: 'https://tikjogos.com.br/apoie',
    altText: 'Apoie o TikJogos e ajude a manter o site no ar',
    category: 'all',
    weight: 2
  },
  {
    id: 'gen-002',
    imageUrl: 'https://via.placeholder.com/300x250/3d4a5c/ffffff?text=Anuncie+Aqui',
    affiliateLink: 'https://tikjogos.com.br/anuncie',
    altText: 'Anuncie no TikJogos e alcance milhares de jogadores',
    category: 'all',
    weight: 1
  }
];

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.partnerContentData = partnerContentData;
}
