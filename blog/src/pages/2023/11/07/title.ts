export const fullDate = "2023/11/07";
export const titleNews =
  "Vue 3 + Vite - Adicionar alias de caminho @ na Src da configuração do Vite";

export const formateDate = () => {
  const parts = fullDate.split("/");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};

export const formateTitle = titleNews
  .toLowerCase()
  .replace(/[^\w\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");
