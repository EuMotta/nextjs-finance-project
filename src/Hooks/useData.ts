/* eslint-disable @typescript-eslint/no-explicit-any */

/* 
  Exemplo de Hook para receber os dados do usuário
  url: endereço da api
  reverse: booleano para inverter a lista
*/

'use client';
import { useReducer, useEffect, useCallback } from 'react';

interface State {
  loading: boolean;
  error: string;
  data: any;
  filter: string;
}
export type Hook = {
  url: string;
  reverse: boolean;
};
type Action =
  | { type: 'FETCH_REQUEST' }
  | { type: 'FETCH_SUCCESS'; payload: any }
  | { type: 'FETCH_FAIL'; payload: string };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useData({ url, reverse }: Hook) {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    data: {},
    filter: '',
  });

  const fetchData = useCallback(async () => {
    dispatch({ type: 'FETCH_REQUEST' });
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      if (reverse && data.length > 1) {
        const reverseData = data.reverse();
        dispatch({ type: 'FETCH_SUCCESS', payload: reverseData });
      } else {
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      }
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      } else {
        dispatch({ type: 'FETCH_FAIL', payload: 'um erro ocorreu' });
      }
    }
  }, [url, reverse]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    fetchData,
  };
}
