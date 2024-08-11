import { getPlaiceholder } from 'plaiceholder';

const getBlurImage = async (imgSrc) => {
  const buffer = await fetch(imgSrc).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const data = await getPlaiceholder(buffer);

  return data;
};
export { getBlurImage };
