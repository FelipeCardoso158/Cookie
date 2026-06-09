// --- BANCO DE DADOS DO LABIRINTO EXPANDIDO (12 SALAS) ---
const labirinto = {
  entrada: {
    texto:
      "Você acorda em uma sala de pedra úmida. Tochas fracas iluminam duas saídas. O ar cheira a mofo.\n\nPara onde você deseja ir?",
    opcoes: [
      {
        texto:
          "Seguir pelo túnel da ESQUERDA, onde ecoa um som de água gotejando.",
        destino: "sala_agua",
      },
      {
        texto: "Seguir pelo túnel da DIREITA, de onde sopra um vento quente.",
        destino: "sala_fogo",
      },
    ],
  },
  sala_agua: {
    texto:
      "Você chega a uma caverna com um lago subterrâneo cristalino. Há uma fenda estreita na parede e uma escadaria que desce para a escuridão.",
    opcoes: [
      {
        texto: "Mergulhar no lago para investigar o fundo.",
        destino: "fim_afogado",
      },
      {
        texto: "Espremer-se através da fenda estreita na parede.",
        destino: "sala_raizes",
      },
      { texto: "Descer a escadaria escura.", destino: "sala_eco" },
      { texto: "Voltar para a entrada.", destino: "entrada" },
    ],
  },
  sala_fogo: {
    texto:
      "O calor é quase insuportável. Rachaduras revelam lava correndo abaixo. Uma ponte de cordas velha cruza o abismo e há uma passagem lateral estreita.",
    opcoes: [
      {
        texto: "Atravessar a ponte de cordas com cuidado.",
        destino: "sala_estatuas",
        dano: 20,
      },
      {
        texto: "Seguir pela passagem lateral estreita.",
        destino: "sala_cripta",
      },
      {
        texto: "Tentar pular pelas pedras soltas no chão de lava.",
        destino: "fim_lava",
      },
      { texto: "Retornar correndo para a entrada fria.", destino: "entrada" },
    ],
  },
  sala_raizes: {
    texto:
      "Você entra em uma câmara tomada por raíces gigantes que quebram o teto. O chão está escorregadio. Você vê uma porta de madeira apodrecida e um buraco no chão.",
    opcoes: [
      {
        texto: "Chutar a porta de madeira para abri-la.",
        destino: "sala_biblioteca",
        dano: 15,
      },
      {
        texto: "Descer cuidadosamente pelo buraco entre as raízes.",
        destino: "sala_eco",
      },
      { texto: "Voltar para a sala do lago.", destino: "sala_agua" },
    ],
  },
  sala_eco: {
    texto:
      "Uma sala gigantesca onde qualquer som ecoa por segundos. O teto parece instável. Há três portas idênticas à sua frente marcadas com símbolos antigas.",
    opcoes: [
      {
        texto: "Entrar na porta com o símbolo do SOL.",
        destino: "sala_estatuas",
      },
      {
        texto: "Entrar na porta com o símbolo da LUA.",
        destino: "sala_biblioteca",
      },
      {
        texto: "Gritar bem alto para testar o eco.",
        destino: "fim_desabamento",
      },
      { texto: "Subir as escadas de volta para o lago.", destino: "sala_agua" },
    ],
  },
  sala_cripta: {
    texto:
      "Túmulos de pedra antigos cercam você. Um silêncio sepulcral domina o ambiente. No centro, uma estátua segura uma chave de ferro brilhante. Há uma porta de ferro trancada adiante.",
    opcoes: [
      {
        texto: "Pegar a chave de ferro da mão da estátua.",
        destino: "sala_cripta_com_chave",
      },
      {
        texto: "Ignorar a chave e tentar forçar a porta de ferro.",
        destino: "sala_estatuas",
      },
      { texto: "Voltar correndo para a sala de calor.", destino: "sala_fogo" },
    ],
  },
  sala_cripta_com_chave: {
    texto:
      "Ao pegar a chave, as órbitas da estátua brilham em vermelho! Mas nada acontece... Você agora tem a chave. A porta de ferro se abre com um estalo.",
    opcoes: [
      {
        texto: "Atravessar a porta de ferro agora aberta.",
        destino: "sala_laboratorio",
      },
    ],
  },
  sala_biblioteca: {
    texto:
      "Uma biblioteca perdida no tempo. Milhares de livros apodrecem nas estantes. Em uma mesa central, um livro dourado está aberto. Há uma passagem que desce.",
    opcoes: [
      {
        texto: "Ler a página aberta do livro dourado.",
        destino: "sala_biblioteca_pista",
      },
      {
        texto: "Ignorar os livros e descer a passagem escura.",
        destino: "sala_laboratorio",
      },
      { texto: "Voltar para a sala das raízes.", destino: "sala_raizes" },
    ],
  },
  sala_biblioteca_pista: {
    texto:
      "O livro diz: 'A ilusão reside no brilho do ouro. Siga o caminho do ferro para a liberdade'. Você memoriza a pista.",
    opcoes: [
      {
        texto: "Seguir em frente descendo a passagem oculta.",
        destino: "sala_laboratorio",
      },
    ],
  },
  sala_estatuas: {
    texto:
      "Um longo corredor guardado por estátuas de guerreiros com espadas afiadas. O chão está cheio de armadilhas de pressão. No final do corredor há duas portas.",
    opcoes: [
      {
        texto: "Correr o mais rápido que puder até a porta da esquerda.",
        destino: "fim_armadilha",
      },
      {
        texto:
          "Caminhar devagar, pisando apenas nas pedras escuras até a porta da direita.",
        destino: "sala_laboratorio",
      },
    ],
  },
  sala_laboratorio: {
    texto:
      "Um antigo laboratório de alquimia cheio de frascos quebrados. Na parede ao fundo, existem dois portais mágicos ativos emitindo luz e energia.",
    opcoes: [
      {
        texto: "Entrar no Portal AZUL, que emite um som suave.",
        destino: "sala_tesouro",
      },
      {
        texto: "Entrar no Portal ROXO, que cheira a ozônio e eletricidade.",
        destino: "fim_portal",
      },
    ],
  },
  sala_tesouro: {
    texto:
      "Incrível! Você encontrou a mística Câmara de Ouro. Baús cheios de joias cobrem o chão e uma grande escadaria leva de volta à superfície!",
    opcoes: [
      {
        texto: "Subir as escadas eaa reivindicar sua vitória! (Fim de Jogo)",
        destino: "vitoria",
      },
    ],
  },
  // --- NÓS FINAIS (GAME OVER E VITÓRIA) ---
  fim_afogado: {
    texto:
      "O lago era fundo demais e criaturas com tentáculos puxaram você para o abismo.\n\nGAME OVER.",
    opcoes: [],
  },
  fim_lava: {
    texto:
      "A pedra que você pisou era falsa. Você caiu diretamente no fluxo de lava.\n\nGAME OVER.",
    opcoes: [],
  },
  fim_desabamento: {
    texto:
      "O som alto do seu grito fez o teto instável desabar completamente sobre você.\n\nGAME OVER.",
    opcoes: [],
  },
  fim_armadilha: {
    texto:
      "Você pisou em falso e acionou lâminas giratórias nas paredes.\n\nGAME OVER.",
    opcoes: [],
  },
  fim_portal: {
    texto:
      "O portal roxo estava instável e desintegrou sua matéria pelo espaço-tempo.\n\nGAME OVER.",
    opcoes: [],
  },
  vitoria: {
    texto:
      "Você escapou do labirinto rico, vivo e a salvo! Sua jornada foi gravada na história.\n\nVOCÊ VENCEU!",
    opcoes: [],
  },
};

// --- ESTADO GLOBAL DA VIDA ---
let vidaAtual = 100;

// --- FUNÇÕES DE GERENCIAMENTO DE COOKIES ---

function salvarProgresso(salaId) {
  const data = new Date();
  data.setTime(data.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 dias
  document.cookie = `labirinto_sala=${encodeURIComponent(salaId)}; expires=${data.toUTCString()}; path=/; SameSite=Lax`;
}

function obterProgresso() {
  const nomeChave = "labirinto_sala=";
  const cookiesArray = document.cookie.split(";");
  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();
    if (cookie.indexOf(nomeChave) === 0) {
      return decodeURIComponent(
        cookie.substring(nomeChave.length, cookie.length),
      );
    }
  }
  return null;
}

function salvarVida(pontosVida) {
  const data = new Date();
  data.setTime(data.getTime() + 7 * 24 * 60 * 60 * 1000);
  document.cookie = `labirinto_vida=${pontosVida}; expires=${data.toUTCString()}; path=/; SameSite=Lax`;
}

function obterVidaSalva() {
  const nomeChave = "labirinto_vida=";
  const cookiesArray = document.cookie.split(";");
  for (let i = 0; i < cookiesArray.length; i++) {
    let cookie = cookiesArray[i].trim();
    if (cookie.indexOf(nomeChave) === 0) {
      return parseInt(cookie.substring(nomeChave.length, cookie.length));
    }
  }
  return null;
}

// AQUI ESTÁ A SUA FUNÇÃO DE LIMPEZA CORRIGIDA:
function limparTodosCookies() {
  document.cookie =
    "labirinto_sala=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax";
  document.cookie =
    "labirinto_vida=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax";
}

// --- ATUALIZAÇÃO VISUAL DA INTERFACE ---

function atualizarInterfaceVida() {
  const barra = document.getElementById("barra-vida-progresso");
  const textoHp = document.getElementById("texto-hp");
  if (!barra || !textoHp) return;

  const porcentagem = Math.max(0, vidaAtual);
  barra.style.width = `${porcentagem}%`;
  textoHp.innerText = `${porcentagem}/100`;

  if (porcentagem <= 30) {
    barra.classList.add("barra-vida-baixa");
  } else {
    barra.classList.remove("barra-vida-baixa");
  }
}

// --- MOTOR DE RENDERIZAÇÃO DO JOGO ---

function carregarSala(salaId, danoSofrido = 0) {
  if (danoSofrido > 0) {
    vidaAtual -= danoSofrido;
    salvarVida(vidaAtual);
    atualizarInterfaceVida();
  }

  if (vidaAtual <= 0) {
    limparTodosCookies();
    document.getElementById("narrativa").innerText =
      "Seus ferimentos foram graves demais. Você perdeu todas as suas forças e desmaiou na escuridão do labirinto.\n\nGAME OVER.";
    document.getElementById("opcoes-container").innerHTML = "";
    atualizarInterfaceVida();
    return;
  }

  const sala = labirinto[salaId];
  if (!sala) {
    carregarSala("entrada");
    return;
  }

  document.getElementById("narrativa").innerText = sala.texto;
  const opcoesContainer = document.getElementById("opcoes-container");
  opcoesContainer.innerHTML = "";

  if (sala.opcoes.length === 0) {
    limparTodosCookies();
  } else {
    salvarProgresso(salaId);
  }

  sala.opcoes.forEach((opcao) => {
    const botao = document.createElement("button");
    botao.innerText = opcao.texto;
    botao.addEventListener("click", () => {
      carregarSala(opcao.destino, opcao.dano || 0);
    });
    opcoesContainer.appendChild(botao);
  });
}

// --- INICIALIZAÇÃO DO JOGO ---

const salaSalva = obterProgresso();
const vidaSalva = obterVidaSalva();

if (vidaSalva !== null) {
  vidaAtual = vidaSalva;
} else {
  vidaAtual = 100;
}

atualizarInterfaceVida();

if (salaSalva && vidaAtual > 0) {
  carregarSala(salaSalva, 0);
} else {
  vidaAtual = 100;
  salvarVida(vidaAtual);
  atualizarInterfaceVida();
  carregarSala("entrada", 0);
}

// CONFIGURAÇÃO DO BOTÃO MANUAL DE REINICIAR
document.getElementById("btn-reiniciar").addEventListener("click", () => {
  limparTodosCookies();
  vidaAtual = 100;
  atualizarInterfaceVida();
  carregarSala("entrada", 0);
});
