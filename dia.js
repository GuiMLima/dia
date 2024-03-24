var agora = new Date()
var ano = agora.getFullYear()
var mes = agora.getMonth()
var dia = agora.getDate()
var diaSem = agora.getDay()
var hora = agora.getHours()
var minuto = agora.getMinutes()

switch (mes) {
    case 0:
        console.log(`Hoje é dia ${dia} de Janeiro de ${ano}.`)
    break
    case 1:
        console.log(`Hoje é dia ${dia} de Fevereiro de ${ano}.`)
    break
    case 2:
        console.log(`Hoje é dia ${dia} de Março de ${ano}.`)
    break
    case 3:
        console.log(`Hoje é dia ${dia} de Abril de ${ano}.`)
    break 
    case 4:
        console.log(`Hoje é dia ${dia} de Maio de ${ano}.`)
    break
    case 5:
        console.log(`Hoje é dia ${dia} de Junho de ${ano}.`)
    break
    case 6: 
        console.log(`Hoje é dia ${dia} de Julho de ${ano}.`)
    break 
    case 7:
        console.log(`Hoje é dia ${dia} de Agosto de ${ano}.`)
    break
    case 8:
        console.log(`Hoje é dia ${dia} de Setembro de ${ano}`)
    break
    case 9:
        console.log(`Hoje é dia ${dia} de Outubro de ${ano}.`)
    break
    case 10:
        console.log(`Hoje é dia ${dia} de Novembro de ${ano}`)
    break
    case 11:
        console.log(`Hoje é dia ${dia} de Dezembro de ${ano}.`)
}

switch (diaSem) {
    case 0: 
        console.log(`Estamos em um Domingo, e você está acessando às ${hora}:${minuto}.`)
    break
    case 1:
        console.log(`Estamos em uma Segunda, e você está acessando às ${hora}:${minuto}.`)
    break
    case 2:
        console.log(`Estamos em uma Terça, e você está acessando às ${hora}:${minuto}.`)
    break
    case 3:
        console.log(`Estamos em uma Quarta, e você está acessando às ${hora}:${minuto}.`)
    break
    case 4:
        console.log(`Estamos em uma Quinta, e você está acessando às ${hora}:${minuto}.`)
    break
    case 5:
        console.log(`Estamos em uma Sexta, e você está acessando às ${hora}:${minuto}.`)
    break
    case 6:
        console.log(`Estamos em um Sábado, e você está acessando às ${hora}:${minuto}.`)
}