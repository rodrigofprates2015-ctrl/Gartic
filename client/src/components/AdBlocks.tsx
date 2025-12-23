import { useEffect } from "react";

interface AdBlockProps {
  placeholderId: number;
}

export function AdBlock({ placeholderId }: AdBlockProps) {
  useEffect(() => {
    // Chamar ezstandalone.showAds() após o componente montar
    const win = window as any;
    if (win.ezstandalone && win.ezstandalone.cmd) {
      win.ezstandalone.cmd.push(function () {
        win.ezstandalone.showAds(placeholderId);
      });
    }
  }, [placeholderId]);

  return (
    <div
      id={`ezoic-pub-ad-placeholder-${placeholderId}`}
    />
  );
}

// Bloco de anúncio no topo da página
export function AdBlockTop() {
  return (
    <div className="w-full py-2">
      <AdBlock placeholderId={101} />
    </div>
  );
}

// Bloco de anúncio no rodapé
export function AdBlockBottom() {
  return (
    <div className="w-full py-2">
      <AdBlock placeholderId={103} />
    </div>
  );
}

// Bloco de anúncio na lateral (sidebar middle)
export function AdBlockSidebarMiddle() {
  return (
    <div className="w-full py-2">
      <AdBlock placeholderId={105} />
    </div>
  );
}

// Bloco de anúncio na lateral inferior
export function AdBlockSidebarBottom() {
  return (
    <div className="w-full py-2">
      <AdBlock placeholderId={106} />
    </div>
  );
}

// Bloco flutuante na lateral
export function AdBlockSidebarFloating() {
  return (
    <div className="hidden lg:block fixed right-4 top-20 w-64 z-40">
      <AdBlock placeholderId={107} />
    </div>
  );
}

// Bloco de anúncio no conteúdo (entre seções)
export function AdBlockInContent() {
  return (
    <div className="w-full py-4">
      <AdBlock placeholderId={115} />
    </div>
  );
}
