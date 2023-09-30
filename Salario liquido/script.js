function calcular() {
    let salariob = document.getElementById('salariobruto')
    let res = document.getElementById('res')  

    if (salariob.value == 0) {
        res.innerHTML = `Valor Inválido!`
        window.alert('[Erro] Faltam dados!')
    }else {
        let sb = Number(salariob.value)
        let inss = sb * 0.08
        let ir = sb * 0.11
        let liq = sb - inss - ir

        res.innerHTML += `<strong>Salário Bruto</strong>: ${sb.toFixed(2)}<br><strong>INSS</strong>: ${inss.toFixed(2)}<br><strong>IR</strong>: ${ir.toFixed(2)}<br><strong>Salário Líquid</strong>o: ${liq}`
    }
    
    res.style.textAlign = 'center' 
}
