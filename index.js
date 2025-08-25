//Calculado de Partidas Rankeadas//

let saldoVitorias = quantidadeVitorias (200, 5)
let nivel = ""

function quantidadeVitorias (vitorias, derrotas) {
	let calculo = vitorias - derrotas
	return calculo
}

switch (true) {
    case saldoVitorias <= 10 :
    nivel = "Ferro"
    break

    case saldoVitorias >= 11 && saldoVitorias <= 20:
    nivel = "Bronze"
    break

    case saldoVitorias >= 21 && saldoVitorias <= 50:
    nivel = "Prata"
    break

    case saldoVitorias >= 51 && saldoVitorias <= 80:
    nivel = "Ouro"
    break

    case saldoVitorias >= 81 && saldoVitorias <= 90:
    nivel = "Diamante"
    break

    case saldoVitorias >= 91 && saldoVitorias <= 100:
    nivel = "Lendario"
    break

    default:
    nivel = "Imortal"
    break
}
console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}.`);
