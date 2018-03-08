// Select color input
var colorInput = $('#colorPicker').val();
console.log(colorInput);
// Select size input


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(evt){
        $('#pixelCanvas').text("");
    var sizeInputHeight = $('#inputHeight').val();
    var sizeInputWeight = $('#inputWeight').val();
    console.log(sizeInputHeight);
    console.log(sizeInputWeight);

    evt.preventDefault();
    for(var i=1; i<= sizeInputHeight; i++)
    {
        $('#pixelCanvas').append("<tr class='tableRow"+i+" row'></tr>");
        for(var j=1; j<= sizeInputWeight; j++)
        {
            $('.tableRow'+i+'').append("<td class='tableColumn"+j+" col'></td>");
        }   
    }
});

$('#colorPicker').on('change', function(){
    colorInput = $('#colorPicker').val();
    console.log(colorInput);
});

$('table').on('click','td',function(evt)
{
    console.log("Hello");

    $(this).css('background', colorInput);
});

// function makeGrid(event) {
//     console.log("You Clicked");
// // Your code goes here!

// }
