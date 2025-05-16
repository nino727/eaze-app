import React, { useEffect } from 'react';
import { performanceMonitor } from '../utils/performance';

export function withPerformance<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName: string
) {
  return function WithPerformanceComponent(props: P) {
    useEffect(() => {
      performanceMonitor.startMeasure(`${componentName}-render`);
      return () => {
        performanceMonitor.endMeasure(`${componentName}-render`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
} 