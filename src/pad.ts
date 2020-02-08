export const pad = (num: string, totalChars: number) => {
  num = num + "";
  while (num.length < totalChars) {
    num = "0" + num;
  }
  return num;
};
