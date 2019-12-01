export type searchData = {
  id: number;
  query: string;
  totalCount: number;
  articles: articleType[];
};

export type articleType = {
  id: number;
  title: string;
  itsLevelType: number;
  highlightedTitle: string[];
  highlightedText: string[];
};

export const searchDataKeys: Array<keyof searchData> = [
  "id",
  "query",
  "totalCount",
  "articles"
];
