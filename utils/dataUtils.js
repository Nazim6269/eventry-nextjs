export const removeMongoId = (array) => {
  const mappedArray = array.reduce((acc, cur) => {
    const id = cur._id.toString();
    delete cur._id;
    const newObj = { id: id, ...cur };
    acc.push(newObj);

    return acc;
  }, []);

  return mappedArray;
};

export const removeIdInObj = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };

  return updatedObj;
};
