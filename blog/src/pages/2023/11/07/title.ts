export const fullDate_01 = "2023/11/07";
export const titleNews_01 =
  "Vue 3 + Vite - Adicionar alias de caminho @ na Src da configuração do Vite";

export const formateDate_01 = () => {
  const parts = fullDate_01.split("/");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

export const formateTitle_01 = titleNews_01
  .toLowerCase()
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");
