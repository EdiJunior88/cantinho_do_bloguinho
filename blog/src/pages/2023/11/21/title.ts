export const fullDate_02 = "2023/11/21";
export const titleNews_02 =
  "NextJS 14 + Styled Components - Carregando primeiro os estilos do CSS ao renderizar a página";

export const formateDate_02 = () => {
  const parts = fullDate_02.split("/");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

export const formateTitle_02 = titleNews_02
  .toLowerCase()
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");
