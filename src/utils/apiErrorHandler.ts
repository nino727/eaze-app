interface ApiError extends Error {
  status?: number;
  code?: string;
}

export class ApiErrorHandler {
  static handle(error: unknown): ApiError {
    if (error instanceof Error) {
      const apiError = error as ApiError;
      
      // Handle specific error cases
      switch (apiError.code) {
        case 'FUNCTION_INVOCATION_TIMEOUT':
          return this.createError('Request timed out. Please try again.', 408);
        case 'FUNCTION_PAYLOAD_TOO_LARGE':
          return this.createError('Request payload too large.', 413);
        case 'FUNCTION_THROTTLED':
          return this.createError('Too many requests. Please try again later.', 429);
        default:
          return this.createError(
            apiError.message || 'An unexpected error occurred',
            apiError.status || 500
          );
      }
    }

    return this.createError('An unexpected error occurred', 500);
  }

  private static createError(message: string, status: number): ApiError {
    const error = new Error(message) as ApiError;
    error.status = status;
    return error;
  }
}

export const handleApiError = (error: unknown): never => {
  const handledError = ApiErrorHandler.handle(error);
  throw handledError;
}; 