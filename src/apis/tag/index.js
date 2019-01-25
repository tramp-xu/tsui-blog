import http from '@/utils/http';

export function _getTag (data) {
  return http.get('/back/tag/search', data);
}