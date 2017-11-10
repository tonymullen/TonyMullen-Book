# Getting MEAN 2nd Edition book project

This is the project described in the book Getting MEAN (2nd Ed) by Simon Holmes. Your Readme.md should look something approximately like this one.

For each chapter, add a note with the following:
* a description in your own words (>= 80 words) of the functionality you implemented and how it works, and list any challenges or problems you encountered.
* a screenshot of the current state of your work (see my chapter notes for each chapter for specifics on what you should include in the screenshot).

Add your chapter notes in descending order, with the latest on top, as I've done below. If there are any specific questions to answer in the chapter's assignment answer them in the corresponding comments. Scroll to the bottom of this Readme.md to see some tips on how to use the Markdown notation to get the elements you need.

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

**Always ensure that your code is working before committing it.** You should be manually testing your work **frequently** so that you don't write too much code to quickly debug it if it's not working properly.

This Readme has been modified throughout the process of implementing the project, so please always refer to the latest version of the Readme, rather than tagged chapter releases.

# <a name="ch3"></a>Chapter 3

Don't forget to include the link to the [Heroku app](https://getting-mean-book-tm.herokuapp.com/)!

Notes
* Installations from appendix A & Appendix B are necessary to get Ch 3 code working.

The app so far should look like this on Heroku (include a screenshot with each chapter's update!):

![ch3](/readme_images/ch3.png)

### Markdown

This Readme file was written in the (GitHub Flavored) [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) (`.md`) language. Look at this Readme in "raw" view to see [the markup code](https://raw.githubusercontent.com/UPS-CSCI240-F16/GM/master/Readme.md).
