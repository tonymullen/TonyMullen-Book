(function(){
  angular
    .module('loc8rApp')
    .controller('aboutCtrl', aboutCtrl);

function aboutCtrl() {
  var vm = this;

  vm.pageHeader = {
    title: 'About Loc8r',
  };
  vm.main = {
    content: 'Loc8r was created to help people find places to sit and work \n\n Lorem ipsum dolor sic amet consectetur idipiscing elit. Nunc sed lorem ac nisi dignissim acumsan. \n\n Lorem ipsum dolor sic amet consectetur idipiscing elit. Nunc sed lorem ac nisi dignissim acumsan. \n\n Lorem ipsum dolor sic amet consectetur idipiscing elit. Nunc sed lorem ac nisi dignissim acumsan.'
  };
}
})();
