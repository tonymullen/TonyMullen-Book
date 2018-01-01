$('#addReview').submit(function (e) {
  $('.alert.alert-danger').hide();
  if (!$('input#name').val() || !$('select#rating').val() || !$('textarea#review').val()) {
    if ($('.alert.alert-danger').length) {
      $('.alert.alert-danger').show();
    } else {
      console.log($('.alert.alert-danger').length)
      $(this).prepend('<div role="alert" class="alert alert-danger">Hold on there.  All fields required! Take a breath and try again</div>');
    }
    return false;
  }
});