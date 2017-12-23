/* GET 'about' page */
const about = function(req, res) {
  res.render('generic-text', { 
    title: 'About Loc8r',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\n What\'s he building in there? What the hell is he building In there? He has subscriptions to those Magazines He never Waves when he goes by He\'s hiding something from The rest of us He\'s all To himself I think I know why He took down the Tire swing from the Peppertree He has no children of his Own you see He has no dog And he has no friends and His lawn is dying and What about all those packages He sends. What\'s he building in there?'
  });
}

module.exports = {
  about
}