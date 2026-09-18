# Monte sua gôndola ideal | Lactalis Brasil

Experiência interativa para espaço de convenção: o participante se cadastra, recebe uma loja,
monta o sortimento que considera ideal na gôndola virtual e no final vê o próprio diagnóstico de
execução, os gaps de positivação e a comparação com o planograma de referência.

**Página pública:** https://projetos.75lab.com.br/lactalis-gondola-ideal/
**Painel de dados:** https://projetos.75lab.com.br/lactalis-gondola-ideal/painel.html

## Fluxo da experiência

1. **Abertura** com a marca e a promessa do jogo.
2. **Cadastro obrigatório** (nome, telefone, e-mail, empresa, área e aceite de uso dos dados).
   Sem preencher, o jogo não abre. O registro é gravado já nesse momento, então mesmo quem
   desiste no meio continua na base.
3. **Escolha do formato de loja**: vizinhança, supermercado de bairro ou atacarejo.
4. **Jogo**: 101 SKUs reais de quatro marcas do grupo (Parmalat, Président, Itambé e Elegê),
   com busca, filtro por marca e por categoria. O participante **arrasta** o produto do catálogo
   para o espaço que quiser da gôndola, arrasta entre espaços para reorganizar e arrasta para
   fora para tirar. Um toque simples também posiciona no primeiro vão livre.
   Cronômetro de 5 minutos, configurável.
5. **Resultado**: pontuação de 0 a 1000, nível, a gôndola montada, o planograma de referência,
   os gaps de obrigatórios com venda estimada perdida, os excessos de espaço, o comparativo de
   share de espaço contra share de venda e o ranking do evento.

## Como a pontuação é calculada

| Bloco | Peso | O que mede |
| --- | --- | --- |
| Positivação do obrigatório | 400 | Percentual dos itens obrigatórios do formato que estão na gôndola |
| Cobertura das necessidades | 150 | Categorias esperadas pelo shopper daquele formato que foram atendidas |
| Espaço proporcional à venda | 250 | Desvio entre o share de espaço e o share de venda de referência |
| Qualidade do mix | 200 | Penaliza item fora do formato, excesso de espaço no mesmo SKU e gôndola vazia; premia lançamento e item de rentabilidade |

Regras no arquivo [js/motor.js](js/motor.js).

## Dados dos produtos

Nome, EAN (quando o site publica) e packshot vêm dos sites oficiais das marcas do grupo:
parmalat.com.br, queijospresident.com.br, itambe.com.br e elege.com.br.
São 101 SKUs: 38 Itambé, 28 Président, 19 Parmalat e 16 Elegê, em 14 categorias.
As imagens ficam em `assets/produtos/`.

Os atributos de trade (`giro`, `preco`, `papel`, `tier` por formato) são **base de referência do
jogo**, não sell out real. Para plugar os números reais da Lactalis, edite `js/data.js`:

```js
{
  "id": "7891097000737",
  "ean": "7891097000737",
  "nome": "Mussarela Fatiado 150g",
  "marca": "Président",
  "cat": "queijo",
  "papel": "trafego",       // trafego | destino | rentabilidade | conveniencia | sazonal | inovacao | expansao
  "preco": 15.9,            // preço médio de gôndola
  "giro": 92,               // índice de giro de 0 a 100 dentro do portfólio
  "tier": { "viz": "must", "sup": "must", "ata": "must" },  // must | core | plus | fora
  "lancamento": false,
  "arquivo": "assets/produtos/p7891097000737.webp"
}
```

Com `giro` alimentado pelo sell out e `tier` vindo do sortimento obrigatório por formato,
o planograma de referência, os gaps e o comparativo passam a rodar sobre dado real.

Os formatos de loja ficam em [js/cenarios.js](js/cenarios.js).

## Coleta de dados

O arquivo [config.js](config.js) controla tudo. Três modos:

| Modo | Quando usar | O que fazer |
| --- | --- | --- |
| `local` (padrão) | Totem único no estande | Nada. Os registros ficam no aparelho e o painel lê dali. |
| `firebase` | Vários celulares, painel ao vivo | Crie um projeto no Firebase, ative o Firestore e cole as chaves em `config.js`. |
| `sheets` | Vários celulares, sem cartão de crédito | Publique `apps-script/Codigo.gs` como app da web e cole a URL em `config.js`. |

Em qualquer modo, o registro também fica salvo no aparelho: se a rede cair, o dado não se perde.

### Regras sugeridas do Firestore

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /participantes/{doc} {
      allow create: if true;
      allow update: if true;
      allow read: if true;   // troque por false e leia pelo console se não quiser painel público
    }
  }
}
```

## Painel

`painel.html`, protegido pela senha definida em `config.js` (padrão `lactalis2026`). Mostra
cadastros, gôndolas montadas, pontuação média, gap médio em reais, tempo médio,
itens obrigatórios mais esquecidos, SKUs mais escolhidos, desempenho por formato,
ranking e a base completa. Exporta CSV e JSON.

## Rodar localmente

```bash
python3 -m http.server 8000
```

Depois abra `http://localhost:8000`.

## Estrutura

```
index.html          experiência completa (abertura, cadastro, briefing, jogo, resultado)
painel.html         painel de dados do evento
config.js           evento, senha, tempo de jogo e modo de armazenamento
js/data.js          catálogo de 101 SKUs Lactalis
js/cenarios.js      formatos de loja e categorias
js/motor.js         planograma de referência e pontuação
js/store.js         gravação e leitura dos registros
js/app.js           fluxo do jogo, arrastar e soltar
js/painel.js        painel
assets/produtos/    packshots oficiais
assets/marcas/      logos das marcas do grupo
apps-script/        coletor opcional em planilha do Google
```

Projeto 75 LAB.
