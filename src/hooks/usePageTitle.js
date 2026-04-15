import { useEffect } from 'react';

const DEFAULT_TITLE = 'Terpene Atlas';
const DEFAULT_DESC = 'Baza wiedzy o odmianach medycznej marihuany dostępnych w Polsce — terpeny, THC, CBD i dostępność w aptekach.';

export function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || DEFAULT_DESC;

    return () => {
      document.title = DEFAULT_TITLE;
      metaDesc.content = DEFAULT_DESC;
    };
  }, [title, description]);
}
