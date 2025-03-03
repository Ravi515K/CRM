const convertFileToBase64 = (file: File | Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader?.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const validateFileType = (types: string[], value: any) => {
  if (
    types.includes(value?.type) ||
    types.includes(value?.[0]?.name?.split(".")?.pop())
  ) {
    return value;
  }
  return `Wrong image format. Only ${types} files are allowed`;
};

const getFileTypeAndBaseContent = (base64: string) => {
  const getSplittedData = base64?.split(":");
  const getType = getSplittedData?.[1]?.split(";")?.[0]?.split("/")?.[1];
  const getBase64Content = getSplittedData?.[1]?.split(",")?.[1];

  return { type: getType, base64Content: getBase64Content };
};

export const fileUtility = {
  convertFileToBase64,
  validateFileType,
  getFileTypeAndBaseContent,
};
