export const fullDate_04 = "2023/11/27";
export const titleNews_04 =
  "Como contribuir pela primeira vez em um projeto Open-Source?";

export const formateDate_04 = () => {
  const parts = fullDate_04.split("/");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

export const formateTitle_04 = titleNews_04
  .toLowerCase()
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");
