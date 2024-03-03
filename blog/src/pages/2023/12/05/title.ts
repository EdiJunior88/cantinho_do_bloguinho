export const fullDate_05 = "2023/12/05";
export const titleNews_05 =
  "CSS - Utilize a nova sintaxe no Media Query e acabe de vez com as dúvidas";

export const formateDate_05 = () => {
  const parts = fullDate_05.split("/");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

export const formateTitle_05 = titleNews_05
  .toLowerCase()
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");
