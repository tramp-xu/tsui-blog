import http from '@/utils/http';

export function _getArticle (data) {
  return http.get('/api/back/about/article/search', data);
}
