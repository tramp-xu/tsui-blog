import Mock from 'mockjs';
import {articleList} from './about';

Mock.mock('/about/article/search', 'get', articleList);