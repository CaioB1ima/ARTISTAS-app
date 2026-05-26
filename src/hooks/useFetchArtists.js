import { useState, useEffect } from 'react';

/**
 * Hook customizado para buscar dados de uma API pública
 * Atende ao requisito: "Utilizar pelo menos um hook customizado"
 */
export const useFetchArtists = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const json = await response.json();
        // Simulando um atraso para mostrar o ActivityIndicator (Requisito 3)
        setTimeout(() => {
          setData(json);
          setLoading(false);
        }, 1500);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
