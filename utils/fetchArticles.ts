import { Article } from '~/types';  // Assuming you have a types file where Article interface is exported

export async function fetchArticles(): Promise<Article[]> {
  const { data: articles } = await useFetch<Article[]>('/articles.json', {
    transform: (data) => data as Article[]
  });
  return articles;
} 