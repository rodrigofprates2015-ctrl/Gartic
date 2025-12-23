import { useEffect } from 'react';

interface EzoicAdProps {
  placementId: number;
  className?: string;
}

export function EzoicAd({ placementId, className = '' }: EzoicAdProps) {
  useEffect(() => {
    if (window.ezstandalone && window.ezstandalone.cmd) {
      window.ezstandalone.cmd.push(function () {
        window.ezstandalone.showAds(placementId);
      });
    }
  }, [placementId]);

  return (
    <div
      id={`ezoic-pub-ad-placeholder-${placementId}`}
      className={className}
    />
  );
}

// Hook para chamar showAds quando a página muda
export function useEzoicAds(placementIds?: number[]) {
  useEffect(() => {
    if (window.ezstandalone && window.ezstandalone.cmd) {
      window.ezstandalone.cmd.push(function () {
        if (placementIds && placementIds.length > 0) {
          window.ezstandalone.showAds(...placementIds);
        } else {
          window.ezstandalone.showAds();
        }
      });
    }
  }, [placementIds]);
}

declare global {
  interface Window {
    ezstandalone: {
      cmd: Array<() => void>;
      showAds: (...ids: number[]) => void;
      destroyPlaceholders: (...ids: number[]) => void;
      destroyAll: () => void;
    };
  }
}
