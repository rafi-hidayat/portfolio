import { getCollection } from 'astro:content';

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** Newest first. */
export async function getArticles() {
  const articles = await getCollection('writing');
  return articles.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
