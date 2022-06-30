let nome = document.getElementById("nome");
let cargo = document.getElementById("cargo");
let departamento = document.getElementById("departamento");
let salario = document.getElementById("salario");
let relatorio = document.getElementById("relatorio");
let aumento = document.getElementById("aumento");




function folhaPagamento() {
    if (nome.value == "") {
        alert('Preencha o nome!!!')
    } else if (cargo.value == "") {
        alert('Preencha o cargo!!!')
    } else if (departamento.value == "") {
        alert("Preencha o departamento!!!")
    } else if (salario.value == "") {
        alert("Preencha o salário!!!")
    } else {
        relatorio.innerHTML = `<p> O funcionário ${nome.value} que ocupa o cargo de ${cargo.value}
        no departamento${departamento.value} com o salário de ${salario.value}</p>`
    }
    if ((salario.value >= 1212.01) && (salario.value <= 2427.35)) {
        let liquido = (salario.value - (salario.value * 0.30));
        relatorio.innerHTML = `<p> O funcionário ${nome.value} que ocupa o cargo de ${cargo.value}
        no departamento ${departamento.value} com o salário bruto de ${salario.value} ficará com um salário liquido de ${liquido} </p>`

    } else if ((salario.value >= 2427.36) && (salario.value <= 3641.03)) {
        let liquido = (salario.value - (salario.value * 0.45));
        relatorio.innerHTML = `<p> O funcionário ${nome.value} que ocupa o cargo de ${cargo.value}
        no departamento ${departamento.value} com o salário bruto de ${salario.value} ficará com um salário liquido de ${liquido} </p>`
    
    } else if ((salario.value >= 3641.04) && (salario.value <= 7087.22)) {
        let liquido = (salario.value - (salario.value * 0.475));
        relatorio.innerHTML = `<p> O funcionário ${nome.value} que ocupa o cargo de ${cargo.value}
        no departamento ${departamento.value} com o salário bruto de ${salario.value} ficará com um salário liquido de ${liquido} </p>`
    
    } else if (salario.value >= 7087.23) {
        let liquido = (salario.value - (salario.value * 0.275));
        relatorio.innerHTML = `<p> O funcionário ${nome.value} que ocupa o cargo de ${cargo.value}
        no departamento ${departamento.value} com o salário bruto de ${salario.value} ficará com um salário liquido de ${liquido - 466} </p>`
    }
}