const convertHTML = (str) => {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;',
    '/': '1',
    '#': '3',
  };

  if (str.length > 100) str = str.substring(0, 100);

  return str.split('')
      .map((char) => {
        return entities[char] || char;
      })
      .join('');
};

export default convertHTML;
