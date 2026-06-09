# Cookie
Manipulação dos cookies
# O Enigma do Labirinto por Passos 🧭🎮

Um mini-RPG de texto interativo construído com foco na demonstração e manipulação prática de **Cookies HTTP através do JavaScript assíncrono e nativo**.

## 📝 Sobre o Projeto
O jogo desafia o usuário a navegar por um labirinto místico tomando decisões sequenciais. O grande diferencial técnico é a **persistência de estado sem banco de dados no servidor**: se o usuário fechar a aba do navegador no meio da exploração e retornar dias depois, o motor do script lerá os Cookies locais e o recolocará na exata sala onde ele parou.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação semântica da caixa de terminal do jogo.
* **CSS3:** Estilização temática simulando terminais antigos com efeitos de animação *glow* e *blink*.
* **JavaScript (ES6):** Manipulação dinâmica do DOM, mapeamento de nós (grafos de decisão) e engenharia de cookies.

## ⚙️ Como os Cookies funcionam neste projeto
1. **Salvamento em Tempo Real:** Toda vez que a função `carregarSala()` é disparada por uma escolha do usuário, o JavaScript invoca a propriedade `document.cookie`, registrando a chave `labirinto_sala` com o ID correspondente.
2. **Persistência Temporizada:** Os cookies deste jogo são gerados com o atributo `expires` configurado para **7 dias**, sobrevivendo ao encerramento do processo do navegador.
3. **Gerenciamento de Ciclo de Vida:** Ao atingir nós finais de histórico (`GAME OVER` ou `VITÓRIA`), o cookie é deletado intencionalmente alterando sua data de expiração para o ano de `1970`. Isso limpa o cache do navegador e resguarda que um novo jogo limpo se inicie no próximo acesso.

## 🚀 Como Executar
1. Baixe os arquivos `index.html`, `style.css` e `script.js` na mesma pasta.
2. Dê um duplo clique no arquivo `index.html` para abrir em qualquer navegador moderno.
3. Para testar a persistência: Avance até a **Sala da Água** ou **Sala do Fogo**, feche o navegador, abra-o novamente e veja o seu progresso intacto!
