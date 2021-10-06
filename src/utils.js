import { createWriteStream } from "fs";

export const processCategory = (categories) => {
    const slug = categories
      .match(/[^\s,]+/g)
      ?.join('-')
      .toLowerCase()

    const listCategory = categories.split(",").map(item => item.trim());
    return listCategory.map(category => ({
        where: { name: category },
        create: { name: category, slug },
    }));  
};

export const handlePhoto = async(obj, id) =>  {
  let urlList = [];
  if(obj instanceof Array){
    obj.map(async(photo) => {
      const {filename, createReadStream} = await photo;
      const newFilename = `${id}-${Date.now()}-${filename}`;
      const readStream = createReadStream();
      const writeStream = createWriteStream(process.cwd() + "/uploads/" + newFilename);
      readStream.pipe(writeStream);
      urlList.push(`http://localhost:4000/static/${newFilename}`);
    });
    return urlList;

  } else {
    const {filename, createReadStream} = await obj;
    const newFilename = `${id}-${Date.now()}-${filename}`;
    const readStream = createReadStream();
    const writeStream = createWriteStream(process.cwd() + "/uploads/" + newFilename);
    readStream.pipe(writeStream);
    return `http://localhost:4000/static/${newFilename}`;
  }

}