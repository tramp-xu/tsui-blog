import http from '@/utils/http';

export function _getArticle (data) {
  return http.get('/about/article/search', data);
}
