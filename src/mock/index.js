import Mock from 'mockjs';
import {articleList} from './atricle';

import {searchTagRes, addTagRes, saveTagRes} from './tag';
import {loginRes} from './login';
// login
Mock.mock('/api/back/login', 'post', loginRes);
// about
Mock.mock('/api/back/about/article/search', 'get', articleList);
// tag
Mock.mock('/api/back/tag/search', 'get', searchTagRes);
Mock.mock('/api/back/tag/add', 'post', addTagRes);
Mock.mock('/api/back/tag/edit', 'post', saveTagRes);