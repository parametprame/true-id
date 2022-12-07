export const fetcher = (url: any) =>
  fetch(url).then((res) => {
    return res.json();
  });
