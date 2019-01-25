import Mock from 'mockjs';
import {articleList} from './about';

import {response} from './tag';

Mock.mock('/about/article/search', 'get', articleList);


Mock.mock('/back/tag/search', 'get', response);