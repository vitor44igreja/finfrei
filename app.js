import prompt from "prompt-sync";
let ler = prompt()

import { Depositar, ExibirSaldo, Sacar } from "./financeiro.js"
import { menu, SimulaçãoDeInvestimentos } from "./menu.js"
console.clear()

let saldo = 0
let continuar = true

while (continuar) {
    let opcao = menu()

    if (opcao == 1 || opcao == 'depositar') {
        saldo = Depositar(saldo)
    }else if(opcao == 2 || opcao == 'sacar'){
        saldo = Sacar(saldo)
    }
    else if(opcao == 3 || opcao == 'saldo'){
        ExibirSaldo(saldo)
    }else if (opcao == 4 || opcao == 'simulador de investimentos') {
        let simulacao = SimulaçãoDeInvestimentos()
        console.log(`O retorno é de R$${simulacao.toFixed(2)} `);
        console.log('Digite "c" para continuarmos ou 0 para sair');
        let respos = ler()
        
            if(respos == 0){
                continuar = false
            }
    }
    else if (opcao == 0) {
        continuar = false
    }
}