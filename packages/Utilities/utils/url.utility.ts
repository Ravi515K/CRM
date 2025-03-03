// Function to get URL queries as object
// eg. getUrlQueries('http://localhost:3000/?name=John&age=20') = { name: 'John', age: '20' }

function getUrlQueries(url: string): Record<string, string> {
  const urlData = new URLSearchParams(url);
  const resultData: Record<string, string> = {};
  for (const [key, value] of urlData.entries()) {
    resultData[key] = value;
  }
  return resultData;
}

export const urlUtility = { getUrlQueries };
