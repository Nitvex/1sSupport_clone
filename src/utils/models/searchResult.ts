export type searchData = {
  id: number;
  query: string;
  totalCount: number;
  articles: {
    id: number;
    title: string;
    itsLevelType: number;
    highlightedTitle: string[];
    highlightedText: string[];
  }[];
};
