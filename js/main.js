$(document).ready(function(){
    $('#searchButton').click(function(){
        const dateOptios = document.getElementById('date')
        const dateValue = dateOptios.options[dateOptios.selectedIndex].value
        console.log('value = ' + dateValue)
        const playerOptios = document.getElementById('player')
        const playerValue = playerOptios.options[playerOptios.selectedIndex].value
        console.log('player = ' + playerValue)
        if ((playerValue == 0) || (dateValue == 0)){
            alert('Elija una opcion para mostrar')
            return
        }
        const display = $('#table').attr("style")
        if (display){
            $('table').show('slow')
        }
        else{
            $('table').fadeOut('slow').delay(100).fadeIn('slow')
        }
        
    })
})

function commingSoon() {
    alert('This feature is comming soon')
}