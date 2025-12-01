import { useEffect, useState } from 'react';

export function VersionBadge() {
  const [version, setVersion] = useState<string>('v.1');

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch('/api/version');
        const data = await response.json();
        setVersion(data.version);
      } catch (error) {
        console.error('Failed to fetch version:', error);
        setVersion('v.1');
      }
    };

    fetchVersion();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 text-xs text-gray-500 bg-black/50 px-3 py-1 rounded-full border border-gray-800">
      Versão beta {version}
    </div>
  );
}
