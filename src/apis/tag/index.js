import http from '@/utils/http';

export function _getTag (data) {
  return http.get('/api/back/tag/search', data);
}

export function _addTag (data) {
  return http.post('/api/back/tag/add', data);
}

export function _deleteTag (data) {
  return http.post('/api/back/tag/delete', data);
}

export function _editTag (data) {
  return http.post('/api/back/tag/edit', data);
}