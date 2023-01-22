export interface PaginatedResults {
  results: any[];
  next?: { page: number; limit: number };
  previous?: { page: number; limit: number };
}
