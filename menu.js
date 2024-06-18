import prompt from "prompt-sync";
let ler = prompt()

export function menu() {
    console.clear()
    console.log(
        `Selecione uma opção:
        1 - Depositar
        2 - Sacar
        3 - Exibir saldo
        4 - Simulador de Investimentos
        0 - Sair
        `);

    let opcaoEscolhida = ler()

    return opcaoEscolhida
}
export function SimulaçãoDeInvestimentos() {
    console.clear()
    
    console.log('Qual será o valor(percentual) do juros');
    let Juros = Number(ler())
    
    console.log('Qual será o tempo(mensal) investido ?');
    let TempoInvestido = Number(ler())
    
    console.log('Qual é o capital inicial(o valor a ser investido) ? ');
    let CapitalInicial = Number(ler())
    
    let conta =  CapitalInicial * ( 1 + Juros / 100)**TempoInvestido

    return conta
}