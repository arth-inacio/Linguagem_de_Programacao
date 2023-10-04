function calcular() {
    let salariob = document.getElementById('salariobruto')
    let res = document.getElementById('res')  

    if (salariob.value == 0) {
        res.innerHTML = `Valor Inválido!`
        window.alert('[Erro] Faltam dados!')
    }else {
        let sb = Number(salariob.value)
        let inss
        let ir 
        let liq
        if (sb <= 1200) {
            inss = sb*0.07
        }else if (sb > 1200 && sb <= 2500) {
            inss = sb*0.09
            ir = sb*0.075
        }else if (sb > 2500 && sb <= 3000) {
            inss = sb*0.10
            ir = sb*0.1
        }else if (sb > 3001) {
            inss = sb*0.10
            ir = sb*0.12
        }
      
        liq = sb - inss - ir

        res.innerHTML += `<strong>Salário Bruto</strong>: ${sb.toFixed(2)}<br><strong>INSS</strong>: ${inss.toFixed(2)}<br><strong>IR</strong>: ${ir.toFixed(2)}<br><strong>Salário Líquido</strong>: ${liq}`
    }
    res.style.textAlign = 'center' 
}

function ferias() {
    let salariob = document.getElementById('salariobruto')
    let res = document.getElementById('res')

    if (salariob.value == 0) {
        res.innerHTML = `Valor Inválido!`
        window.alert('[Erro] Faltam dados!')
    }else {
        let sb = Number(salariob.value)
        let val_ferias
        let inss
        let ir 
     
        if (sb <= 1200) {
            inss = sb*0.07
        }else if (sb > 1200 && sb <= 2500) {
            inss = sb*0.09
            ir = sb*0.075
        }else if (sb > 2500 && sb <= 3000) {
            inss = sb*0.10
            ir = sb*0.1
        }else if (sb > 3001) {
            inss = sb*0.10
            ir = sb*0.12
        }
        val_ferias = sb + (1/3*sb) - inss - ir
        res.innerHTML += `<strong>Salário Bruto</strong>: ${sb.toFixed(2)}<br><strong>Ferias</strong>: ${val_ferias.toFixed(2)}`
    }
    res.style.textAlign = 'center'
}

function recisao() {
    let salariob = document.getElementById('salariobruto')
    let res = document.getElementById('res')

    if (salariob.value == 0) {
        res.innerHTML = `Valor Inválido!`
        window.alert('[Erro] Faltam dados!')
    }else {
        let sb = Number(salariob.value)
        let recis 
    
        res.innerHTML += `<strong>Salário Bruto</strong>: ${sb.toFixed(2)}<br><strong>Ferias</strong>: ${recis.toFixed(2)}`
    }
    res.style.textAlign = 'center'
}
