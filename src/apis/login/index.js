import http from '@/utils/http';

export function _login (data) {
  return http.post('/api/back/login', data);
}