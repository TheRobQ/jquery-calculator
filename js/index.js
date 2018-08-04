$(document).ready(function() {
  var result = 0;
  var doThings = "";

  $('span').on('click', (event) => {
    var digit = $(event.target).text();
    if (digit === 'C') {
      result = 0;
      doThings = "";
      $('#screen').text(result);
      console.log('is C');
    } else if (digit === '=') {
      result = eval(doThings);
      if (result === Infinity) {
        $('#screen').text('Error')
      } else if (result === NaN) {
        $('#screen').text('Error')
      } else {
        $('#screen').text(result)
      }
      console.log('= was hit')
      console.log(result);
    } else {
      if (digit === 'x') {
        doThings += ' * '
        $('#screen').text(doThings)
      } else if (digit === "÷") {
        doThings += ' / '
        $('#screen').text(doThings)
      } else {
        doThings += digit
        $('#screen').text(doThings)
      }

    }

    console.log(doThings);
  })
})
