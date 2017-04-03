ProfileController.$inject = ["$location", "UserService"];

function ProfileController ($location, UserService) {
  var vm = this;
  vm.new_profile = {}; 

  vm.updateProfile = function() {
    UserService
      .updateProfile(vm.new_profile)
      .then(function onSuccess() {
        vm.showEditForm = false;
      });
  };
}
