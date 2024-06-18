import prompt from "prompt-sync";
let ler = prompt()

export function deposito() {
    let depositar = 0
    
    while (depositar <= 0) {
        console.log("Digite o valor que deseja depositar: ")
        depositar = Number(ler())
    }

    return depositar
}

export function saque() {
    let sacar = 0

    while (sacar <= 0) {
        console.log("Digite o valor que deseja sacar: ")
        sacar = Number(ler())
    }

    return sacar
}

export function confirmar() {
    console.log('Digite "Ok" para confirmar ou "C" para cancelar');
    let confirmar = ler()

    return confirmar
}

export function Repetir(msg) {
    console.log(`${msg} novamente?(s/n)`);
    let res = ler()

    console.clear()

    return res
}

