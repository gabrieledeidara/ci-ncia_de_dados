import { getCSS, tickConfig } from "./common.js"

async function quantidadePessoasEstudando() {
    const url = 'https://raw.githubusercontent.com/gabrieledeidara/ci-ncia_de_dados/refs/heads/main/base%20de%20dados/educacao-etapas-de-ensino.json';
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasEscolas = Object.keys(dados)
    const quantidadeDeAlunos = Object.values(dados)


    const data = [
        {
            x: nomeDasEscolas,
            y: quantidadeDeAlunos,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Escolas com mais alunos',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das escolas',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de estudantes ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}
quantidadePessoasEstudando();
