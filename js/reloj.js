const mostrarReloj = () =>{
const reloj = new Date()
const hora = formatoHoras(reloj.getHours())
const minutos = formatoHoras(reloj.getMinutes())
const segundos = formatoHoras(reloj.getSeconds())

document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`

const diaSemana = ['Dom', 'Lun', 'Mar', 'Mie','Jue', 'Vie', 'San']
const meses = ['Ene', 'Feb', 'Mar','Abri', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'];

const dia = diaSemana[reloj.getDay()]
const numDia = reloj.getDate()
const mes = meses[reloj.getMonth()]
const año = reloj.getFullYear()

document.getElementById('fecha').innerHTML = `${dia},${numDia},${mes},${año}`

}

function formatoHoras(valor){
    if(valor < 10){
        return '0' + valor
    }else{
        return valor
    }
}


setInterval(mostrarReloj, 1000)