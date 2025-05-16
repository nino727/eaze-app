import { create } from 'zustand';

interface CacheItem<T> {
  data: T;
  timestamp: number;
  expiresIn: number;
}

interface CacheStore {
  cache: Record<string, CacheItem<any>>;
  setCache: <T>(key: string, data: T, expiresIn?: number) => void;
  getCache: <T>(key: string) => T | null;
  clearCache: (key?: string) => void;
}

const DEFAULT_EXPIRY = 5 * 60 * 1000; // 5 minutes

export const useCacheStore = create<CacheStore>((set, get) => ({
  cache: {},
  
  setCache: <T>(key: string, data: T, expiresIn = DEFAULT_EXPIRY) => {
    set((state) => ({
      cache: {
        ...state.cache,
        [key]: {
          data,
          timestamp: Date.now(),
          expiresIn,
        },
      },
    }));
  },

  getCache: <T>(key: string): T | null => {
    const item = get().cache[key];
    if (!item) return null;

    const isExpired = Date.now() - item.timestamp > item.expiresIn;
    if (isExpired) {
      get().clearCache(key);
      return null;
    }

    return item.data as T;
  },

  clearCache: (key?: string) => {
    if (key) {
      set((state) => {
        const { [key]: _, ...rest } = state.cache;
        return { cache: rest };
      });
    } else {
      set({ cache: {} });
    }
  },
})); 