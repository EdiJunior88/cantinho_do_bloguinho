const fullDate = "2023/11/07";
const titleNews = "Vue 3 + Vite - Adicionar alias de caminho @ na Src da configuração do Vite";
const formateDate = () => {
  const parts = fullDate.split("/");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
};
const formateTitle = titleNews.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");

export { formateDate, formateTitle, fullDate, titleNews };
