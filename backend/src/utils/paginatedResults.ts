import { PaginatedResults } from "../interfaces/PaginatedResults";

export const paginatedResults = (
  page: number,
  limit = 10,
  results: any[]
): PaginatedResults => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedResults: PaginatedResults = {
    results: results,
  };

  if (endIndex < results.length) {
    paginatedResults.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    paginatedResults.previous = {
      page: page - 1,
      limit: limit,
    };
  }

  paginatedResults.results = results.slice(startIndex, endIndex);
  return paginatedResults;
};
