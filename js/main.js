$(document).ready(function() {
  var clearData = function() {
    $('#num1').val('');
    $('#operator').val('');
    $('#num2').val('');
    $('#temp').val('');
  };

  var clearOutput = function() {
    $('#output').html('');
    $('#output2').html('');
  };

  $('.nums').click(function() {
    if (('+-*/').indexOf($('#output').html()) != -1) {
      $('#output').html('');
    }

    if ($('#output').html() == '0' || $('#output2').html() == 'Reach Digit Limit') {
      clearOutput()
    }

    if ($('#temp').val() !== '') {
      clearOutput()
      clearData();
    }

    $('#output').append($(this).val());
    $('#output2').append($(this).val());
    if ($('#output').html().length > 12) {
      $('#output').html('0');
      $('#output2').html('Reach Digit Limit');
    }
  });

  $('#clearButton').click(function() {
    $('#output').html('0');
    $('#output2').html('');
    clearData();
  });

  $('.btn-operate').click(function() {
    var newOperator = $(this).val();
    if ($('#num1').val() !== '' && $('#operator').val() !== '') {
      $('#num2').val($('#output').html());
      var num1 = parseFloat($('#num1').val());
      var operator = $('#operator').val();
      var num2 = parseFloat($('#num2').val());
      var result;
      if (operator == '+') {
        result = num1 + num2;
      } else if (operator == '-') {
        result = num1 - num2;
      } else if (operator == '*') {
        result = num1 * num2;
      } else if (operator == '/') {
        result = parseFloat(num1 / num2);
      }

      if (result.toString().length > 16) {
        $('#output').html('0');
        $('#output2').html('Reach Digit Limit');
        $('#temp').val(0);
      } else {
        $('#output').html(newOperator);
        $('#output2').html(result + newOperator);
        $('#num1').val(result);
        $('#operator').val(newOperator);
      }

    } else {
      $('#num1').val($('#output').html());
      $('#operator').val(newOperator);
      $('#output').html(newOperator);
      $('#output2').append(newOperator);
    }
  });

  $('#resultButton').click(function() {
    $('#num2').val($('#output').html());
     var num1 = parseFloat($('#num1').val());
      var operator = $('#operator').val();
      var num2 = parseFloat($('#num2').val());
      var result;
      if (operator == '+') {
        result = num1 + num2;
      } else if (operator == '-') {
        result = num1 - num2;
      } else if (operator == '*') {
        result = num1 * num2;
      } else if (operator == '/') {
        result = parseFloat(num1 / num2);
      }
      if (result.toString().length > 16) {
        $('#output').html('0');
        $('#output2').html('Reach Digit Limit');
        $('#temp').val(0);
      } else {
        $('#output').html(result);
        $('#output2').html('');
        $('#temp').val(result);
      }
  });
});