function alphaSeq(str) {
  return str
    .toLowerCase()
    .split('')
    .sort()
    .map((e) => e[0].toUpperCase() + String(e).repeat(e.charCodeAt(0) - 96 - 1))
    .join(',');
}

console.log(alphaSeq('ZpglnRxqenU'));
