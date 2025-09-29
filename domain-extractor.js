function domainName(url) {
  const regex = /(?<=:\/\/|www\.).*?(?=\.)/g;
  return url && url.length
    ? url.match(regex).filter((e) => e !== 'www')[0]
    : 'dd';
}

url = 'http://github.com/carbonfive/raygun';
url2 = 'www.xaker.ru';
url3 = 'http://www.google.co.jp/index.html';

console.log(domainName(null));
