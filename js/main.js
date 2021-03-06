window.onload = () => {
    console.log('Tela Carregou')
    const btn = document.getElementById('btnCalcular')
    btn.onclick = click
    function obterValorInput(id) {        
        const item = document.getElementById(id)
        return item.value
    }

    function click() {
        const tipoOperacao= obterValorInput('tipoOperacao')
        const valor1 = parseInt(obterValorInput('valor1'))
        const valor2 = parseInt(obterValorInput('valor2'))
        const resultado = Matematica[tipoOperacao](
            valor1, valor2
        )
        document.getElementById('resultado')
        .innerText = `
        A operacao de ${tipoOperacao}, ${valor1} por ${valor2} é ${resultado}
        `
    }
}