export const fullDate_03 = "2023/11/22";
export const titleNews_03 =
  "NextJS 14 - Deixando as imagens responsivas com 100% de altura (height)";

export const formateDate_03 = () => {
  const parts = fullDate_03.split("/");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

export const formateTitle_03 = titleNews_03
  .toLowerCase()
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");
