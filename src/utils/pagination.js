export const pagination = (list) => {
  const itemsPerPage = 8;
  const pages = Math.ceil(list.length / itemsPerPage);

  const newList = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return list.slice(start, start + itemsPerPage);
  });

  return newList;
};
