/*GET 'about' page */
module.exports.about = function(req, res) {
  res.render('generic-text', {
    title: 'About Loc8r',
    content: 'Loc8r was created to help people find places to sit and work \n\n Lorem ipsum dolor sic amet consectetur idipiscing elit. Nunc sed lorem ac nisi dignissim acumsan. \n\n Lorem ipsum dolor sic amet consectetur idipiscing elit. Nunc sed lorem ac nisi dignissim acumsan. \n\n Lorem ipsum dolor sic amet consectetur idipiscing elit. Nunc sed lorem ac nisi dignissim acumsan.'
  });
};

module.exports.angularApp = function(req, res) {
  res.render('layout', {title: 'Loc8r'});
};
