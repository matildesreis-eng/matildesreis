/*
  ÁREA FÁCIL DE EDITAR — MATILDES REIS
  Aqui ficam os dados que mudam com mais frequência.
*/

const SITE = {
  nome: "Matildes Reis",
  slogan: "Soluções integradas: mobilidade, meio ambiente e estilo de vida.",
  whatsapp: "", // coloque somente os números, ex.: 5571999999999
};

const IMOVEIS = [
  {
    titulo: "Apartamento 1",
    quartos: 2,
    andar: "1º andar",
    preco: "R$ 800/mês",
    foto: "../imagens/apartamento1.jpg",
    linkQuintoAndar: ""
  },
  {
    titulo: "Apartamento 2",
    quartos: 2,
    andar: "2º andar",
    preco: "R$ 700/mês",
    foto: "../imagens/apartamento2.jpg",
    linkQuintoAndar: ""
  }
];

const PRESENTES = [
  // Exemplo:
  // { nome: "Produto 1", preco: "R$ 00,00", foto: "../imagens/produto1.jpg", link: "" }
];

function whatsappLink(mensagem = "Olá! Gostaria de mais informações.") {
  if (!SITE.whatsapp) return "#";
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
