/* Formatos de loja do jogo e metadados das categorias da gondola de laticinios. */

/* Como o movel da loja e chamado nas telas do jogo. */
window.NOME_GONDOLA = "Geladeira";

window.CATEGORIAS = {
  leite:      { nome: "Leite UHT",              cor: "#004B85", icone: "🥛" },
  leitepo:    { nome: "Leite em pó e compostos", cor: "#0A6FB5", icone: "🥄" },
  condensado: { nome: "Leite condensado",       cor: "#1F84C9", icone: "🍮" },
  creme:      { nome: "Creme de leite e nata",  cor: "#5BC5F2", icone: "🍦" },
  manteiga:   { nome: "Manteigas",              cor: "#E0A82E", icone: "🧈" },
  requeijao:  { nome: "Requeijão e cream cheese", cor: "#C98A1B", icone: "🫙" },
  queijo:     { nome: "Queijos do dia a dia",   cor: "#E4B53F", icone: "🧀" },
  especiais:  { nome: "Queijos especiais",      cor: "#8C5A2B", icone: "🥖" },
  iogurte:    { nome: "Iogurtes e fermentados", cor: "#D9466B", icone: "🍓" },
  bebida:     { nome: "Bebidas lácteas",        cor: "#7A4B9E", icone: "🧃" },
  sobremesa:  { nome: "Sobremesas e petit suisse", cor: "#E2714A", icone: "🍫" },
  doce:       { nome: "Doce de leite",          cor: "#A8641F", icone: "🍯" },
  fit:        { nome: "Linha funcional",        cor: "#2E9E6B", icone: "💪" },
  molho:      { nome: "Molhos prontos",         cor: "#5C7A3F", icone: "🍝" }
};

window.CENARIOS = [
  {
    id: "viz",
    nome: "Loja de vizinhança",
    resumo: "Até 4 checkouts, bairro residencial",
    shopper: "Compra de reposição quase diária, ticket baixo",
    detalhe: [
      "Público das classes C e D, vai a pé até a loja",
      "Geladeira curta e pouca área de mercearia láctea",
      "Café da manhã e lanche das crianças mandam na compra"
    ],
    prateleiras: 4,
    colunas: 6,
    catsEsperadas: ["leite", "leitepo", "condensado", "creme", "manteiga", "requeijao", "queijo", "iogurte", "bebida"],
    aviso: "Pack grande e queijo importado não giram neste formato"
  },
  {
    id: "sup",
    nome: "Supermercado de bairro",
    resumo: "De 5 a 19 checkouts, praça competitiva",
    shopper: "Abastecimento quinzenal mais reposição de frescos",
    detalhe: [
      "Público das classes B e C, vai de carro",
      "Geladeira completa e espaço para sortimento longo",
      "É onde o shopper espera achar queijo especial e zero lactose"
    ],
    prateleiras: 4,
    colunas: 8,
    catsEsperadas: ["leite", "leitepo", "condensado", "creme", "manteiga", "requeijao", "queijo", "especiais", "iogurte", "bebida", "sobremesa", "doce"],
    aviso: "Sortimento longo exige cobrir todas as necessidades do shopper"
  },
  {
    id: "ata",
    nome: "Atacarejo",
    resumo: "Cash and carry, transformador e família grande",
    shopper: "Compra de volume, custo por quilo decide",
    detalhe: [
      "Mistura consumidor final, padaria, lanchonete e pizzaria",
      "Fardo, bag e peça inteira dominam o espaço",
      "Queijo fatiado de 1kg e leite em pó de saco puxam a venda"
    ],
    prateleiras: 4,
    colunas: 8,
    catsEsperadas: ["leite", "leitepo", "condensado", "creme", "manteiga", "requeijao", "queijo", "iogurte", "bebida", "doce"],
    aviso: "Embalagem de consumo individual perde espaço para o pack"
  }
];

/* Peso de cada tier no calculo do share de venda de referencia por categoria. */
window.PESO_TIER = { must: 1.0, core: 0.6, plus: 0.25, fora: 0 };
