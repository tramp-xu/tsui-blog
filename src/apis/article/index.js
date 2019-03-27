import http from '@/utils/http';

export function _getArticle (data) {
  return http.get('/api/back/article/search', data);
}

export function _publishArticle (data) {
  return http.post('/api/back/article/publish', data);
}

export function _editArticleTitle (data) {
  return http.post('/api/back/article/title/edit', data);
}

export function _deleteArticle (data) {
  return http.post('/api/back/article/delete', data);
}