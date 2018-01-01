# Getting MEAN 2nd Edition book project

This is the project described in the book Getting MEAN (2nd Ed) by Simon Holmes. Your Readme.md should look something approximately like this one.

For each chapter, add a note with the following:
* A description in your own words (>= 80 words) of the functionality you implemented and how it works, and list any challenges or problems you encountered.
* The answer to all **readme questions** listed on this page for the chapter. 
* A screenshot of the current state of your work (see my chapter notes on this page for each chapter for specifics on what you should include in the screenshot).

Add your chapter notes **in descending order, with the latest on top,** as I've done below. Scroll to the bottom of this readme to see some tips on how to use the Markdown notation to get the elements you need.

**Submit the link to Moodle** by the appropriate assignment deadline. 

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

Always ensure that your code is working before committing it and before adding more code. You should be manually testing your work frequently so that you don't write too much code to quickly debug it if it's not working properly. In general, `nodemon` should be running all the time as you develop, and you should stop and fix anything that makes your server stop working **immediately**. If come to me for troubleshooting help, you can expect me to ask you what you've done since the last time the application was working. **You will make more work for yourself if you keep adding to broken code.**

## Chapter notes

This Readme has been modified throughout the process of implementing the project, so please always refer to the latest version of the Readme, rather than tagged chapter releases. The notes for the 2nd Edition of the book are based upon a work-in-progress copy of the book, so issues described in the notes may have been fixed by the time you read the book. Please let me know if the notes need updating.  

# <a name="ch6"></a>Chapter 7

**Consuming a REST API: Using an API from inside Express**

Heroku link: [Live app](https://getting-mean2e.herokuapp.com/)

Notes:

* At the time I'm going through it, listing 7.22 has some remaining cruft from the previous edition in it that you should ignore. The `var reviewSchema` stuff at the bottom of the listing is redundant and out-of-date.
* In section 7.5.1, the text refers to `_doAddReview` as being found in the `locations.js` file. It is actually in the `reviews.js` file.  

**Ch 7 Things to change**

For your own Chapter 7 work, your proximity-based searches should be based on your home or university location. This is hard coded into the homelist functionality at this point, so make sure the correct coordinates are used.

Also, the author uses the European style of formatting dates for the customer reviews, day, month, year. You should adjust this to the US style: month, day, comma, year. So instead of "3 January 2017" the date on your customer review should read "January 3, 2018". 

**Ch 7 Readme Questions**

1. The title of the chapter is "Consuming a REST API". What does this mean? In what sense is what you're doing in this chapter "consuming" the API you set up in chapter 6?
2. Assuming your application is working properly, what's a single line of code you can delete to test the "API Lookup Error" message?
3. There's an interesting bug described (and fixed) in the chapter that would affect people located at certain specific latitudes or longitudes, yielding an API error when there shouldn't be one. How does JavaScript's approach to truthiness relate to this problem?

![ch7](/readme_images/ch7.png)

# <a name="ch6"></a>Chapter 6

**Writing a REST API: Exposing the MongoDB database to the application**

Heroku link: [Live app](https://getting-mean2e.herokuapp.com/)

Notes:

* Listing 6.1 should be named `index.js` rather than `locations.js`.
* In section 6.2.2, you need to create placeholders for *all* of the controller functions called by your routes. Only one is shown explicitly. 
* The current edition of the book does not include a definition for `sendJsonResponse`, although at the time I'm going through it, some references to this function remain in the listing code, for example in Listing 6.3. Instead, use the `res.status().json()` format discussed in the text and shown elsewhere in the listing. The second and third arguments to `sendJsonResponse` are the arguments to `status` and `json`, respectively.
* The `x-www-form-urlencoded` POST form data in your request from Postman described in section 6.4.1 (Figure 6.11) needs to be input by you in Postman and submitted *to* the server. Look closely at that figure. Also, the Postman form is *very* sensitive to whitespace. Make sure that your key values such as name, address etc do not have any trailing spaces.

**Ch 6 Things to change**

For your own Chapter 6 work, your proximity-based searches should be based on your home or university location. Test to make sure that locations are or aren't showing up as they should, based on the distance value in meters. 

**Ch 6 Readme Questions**

1. According to your API routing, what is the name of the function that will be called when the server receives a POST request at the `/api/locations` URL?
2. What is the format of the data that the server returns when you make a request to the api URLs?
3. What is Postman for and why is it useful? How is its functionality similar to and different from a web browser like Chrome?

![ch6](/readme_images/ch6-post.png)

# <a name="ch5"></a>Chapter 5

**Data model with MongoDB and Mongoose**

Heroku link: [Live app](https://getting-mean2e.herokuapp.com/)

For Chapter 5, you will be adding some locations to a database. You'll use these locations throughout the project. In addition to adding Oppenheimer Cafe, add at least 3 more locations that are physically nearby (within a couple of miles of) the university, and one location which is more than 20 miles away. These should be real places, with real longitude and latitude values. Later, when you implement the location aware functionality of the application, you will check to see that these locations show up as expected.

Notes:

* The `mongo` client and other Mongo related commands (e.g. `mongod` and `mongodump`) sometimes misbehave when run from Git Bash on Windows. If you have trouble running these with Git Bash, run them through the native Windows command prompt. You can use a separate Git Bash terminal to do other things. 
* At the time I am working through this, the code used in `db.js` for opening the database connection yields a deprecation warning in the command line with the latest mongoose. You can safely ignore this warning for now, or you can follow the link to find out how to change your code to get rid of the warning. 
* Follow the instructions to use Mongo from the command line. However, for future work with the database, I strongly recommend downloading the [Robo 3T](https://robomongo.org/) GUI-based MongoDB client which will allow you to view, edit, add, and delete documents from your local MongoDB database without needing to use the `mongo` command line client.
* For setting up your mLab database for use with your Heroku database, you have two choices. **Choose one method or the other, but not both**. The first is the simplest, but it requires use of a credit card (it is free of charge, but you need to submit credit card info to Heroku). This method, the Heroku add-on method, is described in the main text of the book. The sidebar (gray area) describes setting up your mLab database directly through the mLab website, which does not require a credit card. 
* Read the section on the database URI closely. The MONGODB_URI contains a username and a password for the *database*. This is not related to your account username and password for mLab (or Heroku).

**Ch 5 Things to change**

For your own Chapter 5 work, add at least one location to the database which is nearby to the university, and at least one location that is further away from the university, so that you can test that the distance search is working correctly. 

**Ch 5 Readme Questions**

1. This chapter uses some EcmaScript 6 syntax which is a bit strange if you're accustomed to other programming languages (although it is covered in the Codecademy tutorial), specifically the `=>` (arrow) operator, which makes several appearances in `db.js`. What does this operator do, in general? You may, of course, look it up online to answer this question.
2. What are individual database entries (items in a collection) called in MongoDB?
3. What's the difference between the command line commands `mongo` and `mongod`? Which of these two needs to be running all the time in order for your application to work?

Nothing has changed in Chapter 5 with the front-end of your application on Heroku. Your mLab control panel should display the locations collection like this (Add a screenshot similar to this one to your Readme):

![ch5](/readme_images/ch5.png)

# <a name="ch4"></a>Chapter 4

**A site with Node and Express**

Don't forget to include the link to the [Heroku app](https://getting-mean2e.herokuapp.com/) near the top of the readme section for each chapter!

Notes:

* At the time I'm going through it, the WIP version of the book uses Bootstrap version 4.0.0-alpha.6 (this is mentioned in Appendix B). However, Bootstrap version 4.0 is now out of alpha stage and the layout of the navbar element has changed. I had some problems with the alpha version described in the book, and since the non-alpha version is probably going to be more future proof, I've updated my code to use it. I'm using Bootstrap 4.0.0-beta.2. The documentation I'm following is [here](https://getbootstrap.com/docs/4.0/components/navbar/). The Pug code for the navbar is as follows (starting with the `body` tag above the navbar)
    ```
  body
    nav.navbar.navbar-fixed-top.navbar-expand-lg.navbar-dark
      .container
        a.navbar-brand(href='/ ') Loc8r
        button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarMain')
          span.navbar-toggler-icon
        #navbarMain.navbar-collapse.collapse
          ul.navbar-nav.mr-auto
            li.nav-item
              a.nav-link(href='/about/') About
    .container
      block content
    ```

* This doesn't seem to be mentioned outright in the text, but you'll need to add the appropriate styles to your `style.css` file in order to get the app looking right. You can find the styles in my `style.css`. My own css is slightly modified from what I'm currently seeing in the author's GitHub.
* Finishing hooking up the views to the controllers as described in Appendix C is part of the Chapter 4 assignment. Make sure this is also done. 
* In Appendix C, the src value for the Google Maps element is enclosed in back-ticks. These are not the same as single quotes, so be careful. 
* [As of June 22, 2016 GoogleMaps requires an API key to embed](https://maps-apis.googleblog.com/2016/06/building-for-scale-updates-to-google.html). This means that your application may not display the generated map image correctly, using only the URL from the book. To resolve this, you will need to get an API key from Google. You can do that [here](https://developers.google.com/maps/documentation/javascript/get-api-key?utm_source=geoblog&utm_medium=social&utm_campaign=2016-geo-na-website-gmedia-blogs-us-blogPost&utm_content=TBC) (click "Get A Key"). Follow the steps to generate a key. They key will look like a string of random letters and numbers. Include this in your link as part of the query string in the form `&key=<your_key>`, something like this:

        http://maps.googleapis.com/maps/api/staticmap?center=51.455041,-0.9690884&zoom=17&size=400x350&sensor=false&markers=51.455041,-0.9690884&key=AIzxSyBqUF6InQDrBA8940pAjAZkG23qPMki-hE

    You may also need to enable the Google Static Maps API. To do this, go to the API Manager Dashboard and click on "Enable API" at the top of the screen. Find Google Static Maps API (you may need to click "More" under the Maps APIs), view the API page and click "Enable". Your application should display the graphic correctly.
    
**Ch 4 Things to change**

For your own Chapter 4 work, you should replace the author's *Starcups* cafe with an existing nearby cafe. I've used Oppenheimer cafe. You should be sure to also replace the latitude and longitude in the controller, so that by the end of the chapter, the correct location is displayed on your webpage's map, as shown in my screenshot below. 

**Ch 4 Readme Questions**

1. In class, we've talked about code re-use, and avoiding unnecessary repetition of code. How do the Pug templates you've worked with in Chapter 4 help to accomplish this?
2. According to the routing we have set up, what function is called when the `/location` url request is received? What file is this function defined in?
3. In Appendix C, you needed to use back-ticks instead of single quotes. What is the significance of back-ticks in EcmaScript 6?

![ch3](/readme_images/ch4-1.png)

![ch3](/readme_images/ch4-2.png)

# <a name="ch3"></a>Chapter 3

Don't forget to include the link to the [Heroku app](https://getting-mean2e.herokuapp.com/)!

Notes:

* Installations from appendix A & Appendix B are necessary to get Ch 3 code working.
* Any reference to any file with the extension `.jade` should be changed to `.pug`.
* Jade/Pug files are indentation based. Wrong indentation in these files will throw your layout out of wack. Turn on Show Indent Guide and Show Invisibles in Atom (Preferences > Editor) to see the spaces in your editor. Also, refer to the author's GitHub code directly to check the indentation when the indentation is borked in the book or e-book (as I write this, Listing 3.7 in the epub version is an example of this).
* In section 3.3.3 the line of code `var routes = require('./routes/index');` actually appears in the generated express app as `var index = require('./routes/index');`. This variable is used a few lines later and must be consistent. The author goes with `routes`. If you use `routes`, be sure to change the line `app.use('/', index);` below to `app.use('/', routes);`.

**Ch 3 Readme Questions**

1. The default `app.js` file generated by Express declares variables using the `var` keyword. What are the two new keywords introduced in EcmaScript 6 that the author discusses, and what is his recommendation for declaring variables in `app.js`?
2. What do we call the process of mapping URL requests to the functionality we want to associate with the URL? For example, when the URL `/` is requested (this represents the base URL for our application's domain), we want to execute the controller function that renders our title page. What do we call the code that connects a URL request to our controller code?

The app so far should look like this on Heroku (include a screenshot with each chapter's update!):

![ch3](/readme_images/ch3.png)

### Markdown

This Readme file was written in the (GitHub Flavored) [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) (`.md`) language. Look at this Readme in "raw" view to see [the markup code](https://raw.githubusercontent.com/UPS-CSCI240-F16/GM/master/Readme.md).
