import Mock from 'mockjs';

const Random = Mock.Random;

export const response = function() {
  let tags = [];
  for (let i = 0; i < 20; i++) {
    let newArticleObject = {
      key: Random.guid(),
      name: Random.csentence(3, 10), //  Random.csentence( min, max )
      //   thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      createDate: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      relatedCount: Random.natural(1, 20), // Random.cname() 随机生成一个常见的中文姓名
      tagLevel: Random.natural(1, 3) // Random.cname() 随机生成一个常见的中文姓名
    };
    tags.push(newArticleObject);
  }

  return {
    code: 200,
    data: tags,
    message: 'success'
  };
};