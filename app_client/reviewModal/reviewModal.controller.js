(function() {

  angular
    .module('loc8rApp')
    .controller('reviewModalCtrl', reviewModalCtrl);

  reviewModalCtrl.$inject = ['$uibModalInstance', 'locationData','loc8rData']; //we can inject locationData because it was passed by resolve
  function reviewModalCtrl($uibModalInstance, locationData, loc8rData) {
    var vm = this;
    vm.formData = {};
    vm.locationData = locationData;
    vm.modal = {
      cancel : function() {
        $uibModalInstance.dismiss('cancel');
      },
      close : function(result) {
        $uibModalInstance.close(result);
      }
    };
    vm.onSubmit = function() {
      vm.formError = "";
      if(!vm.formData.name || !vm.formData.rating || !vm.formData.reviewText) {
        vm.formError = "All fields required, please try again.";
        return false;
      } else {
        console.log(vm.formData);
        vm.doAddReview(vm.locationData.locationid, vm.formData);
      }
    };

    vm.doAddReview = function(locationid, formData) {
      loc8rData.addReviewById(locationid, {
        author: formData.name,
        rating: formData.rating,
        reviewText: formData.reviewText
      })
      .success(function(data) {
        vm.modal.close(data)
      })
      .error(function(data) {
        vm.formError = "Your review has not been saved. Try again";
      });
      return false;
    };
  }
})();
