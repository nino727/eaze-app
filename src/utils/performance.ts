import { Performance } from 'expo-performance';

interface PerformanceEntry {
  name: string;
  duration: number;
}

interface PerformanceObserverEntryList {
  getEntries(): PerformanceEntry[];
}

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetric[] = [];

  private constructor() {}

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  startMeasure(name: string) {
    console.time(name);
  }

  endMeasure(name: string) {
    console.timeEnd(name);
    this.metrics.push({
      name,
      value: performance.now(),
      timestamp: Date.now(),
    });
  }

  getMetrics() {
    return this.metrics;
  }

  clearMetrics() {
    this.metrics = [];
  }

  measureAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
    this.startMeasure(name);
    return fn().finally(() => this.endMeasure(name));
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance(); 