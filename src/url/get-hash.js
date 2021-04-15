/**
 * 获得 URL 哈希字符串
 *
 * @param {string} url 链接
 * @returns {string} 哈希字符串
 */
export default function getHash(url) {
  let hash = '';
  const hashStart = url.indexOf('#');
  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }
  return hash;
}
