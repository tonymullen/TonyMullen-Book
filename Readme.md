# Getting MEAN book project

This is the project described in the book Getting MEAN by Simon Holmes. Your Readme.md should look something approximately like this one.

For each chapter, add a note with the following:
* a description in your own words (>= 80 words) of the functionality you implemented and how it works, and list any challenges or problems you encountered.
* a screenshot of the current state of your work (see my chapter notes for each chapter for specifics on what you should include in the screenshot).

Add your chapter notes in descending order, with the latest on top, as I've done below. If there are any specific questions to answer in the chapter's assignment answer them in the corresponding comments. Scroll to the bottom of this Readme.md to see some tips on how to use the Markdown notation to get the elements you need.

**The screenshot(s) must also be uploaded to Moodle** by the appropriate assignment deadline.

### Committing and tagging

While working through the book, you should be doing **regular Git commits** (at least 4 per chapter) so I can view the specifics of your progress. This is done like this:

```
git add .
git commit -m "your comment here"
```

Always include a brief but *meaningful* comment. Do not make comments like "blahblah" or "some stuff". [Here's some good advice on commit messages](http://chris.beams.io/posts/git-commit/).

In addition, as you complete each chapter, you should **commit and tag** the release representing that chapter, so I can quickly go to the last commit for each chapter. Look at the commit history of this repository to see an example. [Here's the documentation on tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging). You must also push your commits to GitHub and Heroku. Pushing to GitHub (with tags) should look something like this:

```
git push origin master --tags
```

**Always ensure that your code is working before committing it.** You should be manually testing your work **frequently** so that you don't write too much code to quickly debug it if it's not working properly.

This Readme has been modified throughout the process of implementing the project, so please always refer to the latest version of the Readme, rather than tagged chapter releases.

# <a name="ch10"></a>Chapter 10
**Building out the SPA**

Heroku link: [Heroku app](https://warm-plateau-96144.herokuapp.com/).

Notes:
* Since the book was written, there have been some changes in the automatically generated (by Express) app.js file, so the edits described on p. 307 are slightly different from what you need to actually do. Instead of commenting out `require('./routes')(app)` you must comment out two lines, `var routes = require('./app_server/routes/index');` (somewhere around line 11) and `app.use('/', routes);` (somewhere around line 52). Add the new `app.use` code from the book somewhere *below* the `app.use('/api', routesApi);` line in the code.
* In the code for setting HTML5 mode on p. 313-314, instead of `$locationProvider.html5Mode(true);` the line should be `$locationProvider.html5Mode({enabled: true, requireBase: false});`.
* P. 316 refers to app_server/controllers/main.js. It appears that this should refer to app_erver/controllers/others.js.
* Remember to include your Google API key in the query string for the map image, as mentioned in the Chapter 5 notes.
* The `$modal` component of Angular Bootstrap (introduced on p. 331) and the `$modalInstance` component (introduced on p. 335) are now called `$uibModal` and `$uibModalInstance`, respectively. These need to be replaced any time they appear in the code.
* The validation method on p. 339 is redundant if the name and review fields have `required` values in the HTML, and the submission won't be processed if they aren't filled in. You can see the validation in action by leaving the number rating blank and puttint values in the name and review fields, or by removing the `required` tag on those fields.


Include a screenshot of your application with the modal window open and the validation warning (for unselected rating number) displaying, like this:

![ch10](/readme_images/ch10.png)

# <a name="ch9"></a>Chapter 9
**Building an Angular SPA**

Heroku link: [Heroku app](https://warm-plateau-96144.herokuapp.com/).

There do not seem to be any issues or sticky points in Chapter 9.

Include a screenshot of the top page of your application at this point. It should look something like this:

![ch9](/readme_images/ch9.png)

# <a name="ch8"></a>Chapter 8
**Adding Angular components to the Express application**

Heroku link: [Heroku app](https://warm-plateau-96144.herokuapp.com/).

Notes:
* As of this writing, geolocation in Chrome appears to be (temporarily?) broken. I'm seeing an identical issue to what was discussed [here](https://www.reddit.com/r/webdev/comments/3j8ipj/anyone_else_had_issues_with_the_html5_geolocation/) some time ago. If you experience this, test your application in Firefox, Safari, and/or IE instead of Chrome and turn in a screenshot using one of those browsers.

Include a screenshot of the filtering functionality in action, as shown here:

![ch8](/readme_images/ch8.png)

# <a name="ch7"></a>Chapter 7
**Using the REST API**

Heroku link: [Heroku app](https://warm-plateau-96144.herokuapp.com/).

Notes:
* As mentioned in Ch 6 notes, distances are expressed in meters. You will need to alter the `_formatDistance` function accordingly to format them properly.
* On p. 217, the reference to locations.js in the /routes folder should refer to index.js.
* At the bottom of p. 235, the code referenced is from app_api/controllers/reviews.js, not locations.js.
* The necessary ID tag for jQuery browser validation described on p. 240 is not present in the author's code online and it's not shown how to put it into the view. To make this work add the `#addReview` tag to the `form` element like this:
    ```
    form#addReview.form-horizontal(action="", method="post", role="form")
    ```

If your form validation is working properly, trying to submit an empty review form will result in an error message as shown in the screenshot below. Include a screenshot of this behavior in your own application:

![ch7](/readme_images/ch7-val.png)


# <a name="ch6"></a>Chapter 6
**Setting up the RESTful API**

Heroku link: [Heroku app](https://warm-plateau-96144.herokuapp.com/).

Notes:
* Listing 6.1 should be named `index.js` rather than `locations.js`.
* The Postman in-tab REST Client application (shown on p. 173) is deprecated in Chrome. Use the packaged app available at [here](https://www.getpostman.com/).
* Contrary to the discussion on p. 182-183, MongoDB carries out geoNear calculations in meters, rather than radians. For this reason the `theEarth` function described in the top half of p. 183 should be ignored. Calls to this function with km arguments, such as the `maxDistance: theEarth.getRadsFromDistance(20),` line near the bottom of p. 183 should be replaced by the equivalent value in meters, so in this example the code should be `maxDistance: 20000,`. The same goes for anywhere else that function is used in the text.


Nothing has changed in on the Heroku app front-end. You should have successfully managed to use Postman to call RESTful methods on your local database. Add a screenshot showing a successful POST method call which adds a new location, similar to this one (if necessary, you can include more than one screenshot to show both the request body and the response):

![ch6](/readme_images/ch6-post.png)

# <a name="ch5"></a>Chapter 5
**Data model with MongoDB and Mongoose**

Heroku link: [Heroku app](https://warm-plateau-96144.herokuapp.com/).

For Chapter 5, you will be adding some locations to your database. You'll use these locations throughout the project. In addition to adding Oppenheimer Cafe, add at least 3 more locations that are physically nearby (within a couple of miles of) the university, and one location which is more than 20 miles away. These should be real places, **with real longitude and latitude values**. Later, when you implement the location aware functionality of the application, you will check to see that these locations show up as expected.

Notes
* The default interface for the Mongo command line seems to have changed slightly. Specifically, empty databases are not shown when `show dbs` is called, and the amount of memory listed for the empty databases is 0.000GB rather than what is shown in the book on page 149. You won't see your new Loc8r database listed until after you carry out the `db.locations.save()` instructions later on the page. After that, your database should be listed as expected. 
* On page 151, about the middle of the page, the `id` attribute listed should be `_id`. Missing the underscore here will not cause immediate problems, but it will cause problems later.
* Follow the instructions to use Mongo from the command line. However, for future work with the database, I strongly recommend downloading the [Robomongo](https://robomongo.org/) GUI-based MongoDB client.
* MongoLab (p. 152) is now [mLab](http://docs.mlab.com/).
* On p. 153, `herou addons:add mongolab` is obsolete, use `heroku addons:create mongolab` (and yes, it's still "mongolab" rather than "mlab").
* On p. 153, `heroku config:get MONGOLAB_URI` should now be `heroku config:get MONGODB_URI`. This is also relevant on p. 157. Set the `dbURI` variable using `process.env.MONGODB_URI`.
* Read the top of p. 154 closely. The MONGODB_URI contains a *username* and a *password* for the database. This is **not** related to your account username and password for mLab (or Heroku).
* During `mongorestore` (p. 155) you may encounter an error like the following:

    ```
    Failed: heroku_7trd9m4t.locations: error creating indexes for heroku_7trd9m4t.locations: createIndex error: exception: unsupported geo index version { 2dsphereIndexVersion : 2dsphereIndexVersion: 3 }, only support versions: [1,2]
    ```

    In order to fix this, edit the `locations.metadata.json` file that was generated in `~/tmp/mongodump/Loc8r/`. Open the file in Atom and change the `2dsphereIndesVersion` value from 3 to 2.

    ```
    {"options":{},"indexes":[{"v":1,"key":{"_id":1},"name":"_id_","ns":"Loc8r.locations"},{"v":1,"key":{"coords":"2dsphere"},"name":"coords_2dsphere","ns":"Loc8r.locations","background":true,"2dsphereIndexVersion":2}]}
    ```

Nothing has changed in Chapter 5 with the front-end of your application on Heroku. Your mLab control panel should display the locations collection like this (Add a screenshot similar to this one to your Readme):

![ch5](/readme_images/ch5.png)

# <a name="ch4"></a>Chapter 4
**A site with Node and Express**

Always include the link to the [Heroku app](https://warm-plateau-96144.herokuapp.com/) at the beginning of you chapter comments!

For this chapter, you will make some small changes and diverge slightly from the book project. Rather than using the 'Starcups' example in Reading, England, you'll use 'Oppenheimer Cafe'. Change the longitude and latitude values of the location appropriately so that the display image shows the correct location.

Also, keep your eye out for a misprint in the book. A file listing is printed using the wrong filetype suffix. Make a note of what the file is in your comments.

Notes
* Pay attention to indentation for Jade files. Wrongly indented Jade/Bootstrap will mess up the layout of your pages.
* I did not have the overlap issue shown on page 93. Consequently, I removed the `.row.page-header` line from the Jade views introduced later in the chapter, which moved the content down a row.  
* This chapter work includes the wrapping up process described in Appendix C.
* [**As of June 22, 2016 GoogleMaps requires an API key to embed**](http://googlegeodevelopers.blogspot.com.es/2016/06/building-for-scale-updates-to-google.html). This means that your application may not display the generated map image correctly, using only the URL from the book. To resolve this, you will need to get an API key from Google. You can do that [here](https://developers.google.com/maps/documentation/javascript/get-api-key?utm_source=geoblog&utm_medium=social&utm_campaign=2016-geo-na-website-gmedia-blogs-us-blogPost&utm_content=TBC) (click "Get A Key"). Follow the steps to generate a key. They key will look like a string of random letters and numbers. Include this in your link as part of the query string in the form `&key=<your_key>`, something like this:

     ```
http://maps.googleapis.com/maps/api/staticmap?center=51.455041,-0.9690884&zoom=17&size=400x350&sensor=false&markers=51.455041,-0.9690884&scale=2&key=AIzxSyBqUF6InQDrBA8940pAjAZkG23qPMki-hE
```

    Also, you'll need to enable the Google Static Maps API. To do this, go to the API Manager Dashboard and click on "Enable API" at the top of the screen. Find Google Static Maps API (you may need to click "More" under the Maps APIs), view the API page and click "Enable". Your application should display the graphic correctly.

The app now has several pages. Include a screenshot of the location info page (with the map). Here notice that the map displays the location of Oppenheimer Cafe:

![ch4](/readme_images/ch4.png)

# <a name="ch3"></a>Chapter 3

Don't forget to include the link to the [Heroku app](https://warm-plateau-96144.herokuapp.com/)!

Notes
* Installations from appendix A & Appendix B are necessary to get Ch 3 code working.
* The `foreman start` command (p. 75) is obsolete. Run `heroku local` instead.

The app so far should look like this on Heroku (include a screenshot with each chapter's update!):

![ch3](/readme_images/ch3.png)

### Markdown

This Readme file was written in the (GitHub Flavored) [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) (`.md`) language. Look at this Readme in "raw" view to see [the markup code](https://raw.githubusercontent.com/UPS-CSCI240-F16/GM/master/Readme.md).
