$(document).ready(function(){
    $('#more-input-button').on('click', function(){
      $('#name-inputs').append("<input type='text'>");
      $('#name-inputs input:last-child').focus();
        });
      //});

function validateInputs(){
  $('#name-inputs > input').each(function(){
    if ($(this).val() === ""){
      $(this).removeClass().addClass('alert');
    }
    else {
      $(this).removeClass().addClass('ok');
    }
  });
}
$('#name-inputs').delegate('input[type="text"]', 'keyup blur', function(){
  validateInputs();
});

$('#submit-button').on('click',function(){
  validateInputs();
  $('input').prop('readonly', true);
  $('input[type="submit"],button').prop('disabled',true);
  var values = [];
  $('#name-inputs > input').each(function(){
    values.push($(this).val());
  });
  var result = confirm('Please confirm: '+ values.join(', '));
  if (result){
  $('#name-inputs').html('<input[type="text"]');
  $('input[type="submit"],button').prop('disabled',false);
  $('#name-inputs input').focus();
  }
  else {
    $('input').prop('readonly', false);
    $('input[type="submit"],button').prop('disabled',false);
  }

});
});
