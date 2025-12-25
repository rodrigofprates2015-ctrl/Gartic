import { useQuery } from "@tanstack/react-query";
import { Link, useRoute } from "wouter";
import { Post } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, User, Share2 } from "lucide-react";
import backgroundImg from "@assets/background_natal_1765071997985.png";
import logoTikjogos from "@assets/logo tikjogos_1764616571363.png";
import { AdBlockTop, AdBlockInContent, AdBlockBottom } from "@/components/AdBlocks";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  const { data: post, isLoading } = useQuery<Post>({
    queryKey: [`/api/posts/${slug}`],
    enabled: !!slug,
  });

  return (
    <div 
      className="min-h-screen w-full relative flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <AdBlockTop />

      <nav className="bg-[#0a1628]/90 backdrop-blur-sm border-b border-[#3d4a5c] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center cursor-pointer">
            <img src={logoTikjogos} alt="TikJogos" className="h-8" />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Voltar ao Blog</Link>
            <Link href="/" className="btn-orange px-4 py-2 text-sm">Jogar Agora</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="space-y-8">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-64 w-full" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        ) : !post ? (
          <div className="text-center py-20 bg-[#16213e]/80 border border-[#3d4a5c] rounded-lg p-12">
            <h1 className="text-2xl font-bold text-white mb-4">Artigo não encontrado</h1>
            <p className="text-gray-400 mb-8">O conteúdo que você está procurando não existe ou foi movido.</p>
            <Link href="/blog">
              <Button className="btn-orange px-8">Voltar ao Blog</Button>
            </Link>
          </div>
        ) : (
          <article className="fade-in">
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-6 font-bold uppercase tracking-widest">
                <span className="text-[#4a90a4]">{post.category}</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>{post.author}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-8">
                {post.title}
              </h1>
              
              <div className="h-1 w-20 bg-[#4a90a4] mb-12"></div>
            </header>

            <div className="bg-[#16213e]/80 border border-[#3d4a5c] rounded-lg p-8 md:p-12 mb-12">
              <div 
                className="blog-content prose prose-invert max-w-none 
                  text-gray-300 leading-relaxed text-lg
                  prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:mb-6
                  prose-strong:text-[#4a90a4]
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
                  prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            <div className="flex justify-between items-center py-8 border-t border-[#3d4a5c]">
              <Link href="/blog">
                <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-transparent -ml-4 gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  Ver outros artigos
                </Button>
              </Link>
              <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-transparent gap-2" onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    url: window.location.href
                  }).catch(console.error);
                }
              }}>
                <Share2 className="w-4 h-4" />
                Compartilhar
              </Button>
            </div>
          </article>
        )}

        <AdBlockInContent />
      </main>

      <AdBlockBottom />

      <footer className="bg-[#0a1628]/90 border-t border-[#3d4a5c] py-12 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">© 2024 TikJogos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
