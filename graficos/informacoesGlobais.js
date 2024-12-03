const url = 'https://raw.githubusercontent.com/gabrieledeidara/ci-ncia_de_dados/refs/heads/main/base%20de%20dados/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json(url)
    const pessoasEstudando = (dados.total_pessoas_com_acesso_a_educacao/ 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    const minutos = Math.round((dados.tempo_medio_dia_estudando - horas) * 100)
    const porcentagemEstudando = ((pessoasEstudando / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente 
    span>${pessoasEstudando} bilhões</span> estão estuano passam e pasam  em média <span>${horas} horas</span> e <span>${minutos} 
    minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemEstudando}%</span> de pessoas estão matriculadas em alguma ecola.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()