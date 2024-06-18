import prompt from "prompt-sync";
let ler = prompt()

import { Repetir, confirmar, deposito, saque } from "./exibicao.js";

export function Depositar(saldoAtual) {
    console.clear()
    
    let saldo = saldoAtual
    let continuar = true

    while (continuar == true) {
        //Novo deposito
        let depositar = deposito()

        //Confirmar deposito
        let confirmarDeposito = confirmar()

        if (confirmarDeposito == 'OK' || confirmarDeposito == 'ok') {
            console.log('Valor depositado!');
            saldo +=  depositar
        } else if (confirmarDeposito == 'C' || confirmarDeposito == 'c') {
            console.log('deposito cancelado!');
        }

        //Realiza outro deposito
        let DepositarNovamente = Repetir('Depositar')

        if (DepositarNovamente == 's') {
            continuar = true
        } else {
            continuar = false
        }
        depositar = 0
    }
    return saldo
}

export function Sacar(saldoAtual) {
    console.clear()
    
    let saldo = saldoAtual
    let continuar = true
    
    while (continuar) {

        //Novo saque
        let sacar = saque()

        //Confirmar saque
        let confirmarSaque = confirmar()

        if (confirmarSaque == 'ok' || confirmarSaque == 'OK') {
            if (saldo < sacar) {
                console.log('saldo insuficiente!');
            }else{
                console.log('valor retirado!');
                saldo -= sacar
            }
        } else {
            console.log('Saque cancelado!');
        }

        //Realiza outro saque
        let sacarNovamente = Repetir('Sacar')

        if (sacarNovamente == 's' || sacarNovamente == 'S') {
            continuar = true
        } else {
            continuar = false
        }
        sacar = 0
    }
    return saldo
}

export function ExibirSaldo(saldoAtual) {
    console.clear()
    let saldo = Number(saldoAtual)

console.log(`
==================================

    Saldo Atual: R$ ${(saldo.toFixed(2))}

==================================
`);

    console.log('Pressione enter para continuar...');
    ler()
}