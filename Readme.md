# Getting MEAN book project

This is the project described in the book Getting MEAN by Simon Holmes

Your Readme.md should look something like this.

For each chapter you complete, add comments below (in descending order, with latest on top) describing what you did and what challenges or problems you encountered. If there are any specific questions to answer in the chapter's assignment answer them in the corresponding comments. Include a screenshot of the Heroku deployment of your application at the time of the commit.

Scroll to the bottom of this Readme.md to see some tips on how to use the Markdown notation to get the elements you need.

While working through the book, you should be doing **regular Git commits** (at least 3 or 4 per chapter, so I can view the specifics of your progress). In addition, as you complete each chapter, you should **commit and tag** the release representing that chapter, so I can quickly go to the last commit for each chapter. Look at the commit history of this repository to see an example.

I strongly recommend you ensure that your code is working before committing it. You should be manually testing your work **frequently** so that you don't write too much code to quickly debug it if it's not working properly. 

## Chapter 4

Always include the link to the [Heroku app](https://warm-plateau-96144.herokuapp.com/) at the beginning of you chapter comments!

For this chapter, you will make some small changes and diverge slightly from the book project. Rather than using the 'Starcups' example in Reading, England, you'll use 'Oppenheimer Cafe'. Change the longitude and latitude values of the location appropriately so that the display image shows the correct location.

Notes
* Pay attention to indentation for Jade files. Wrongly indented Jade/Bootstrap will mess up the layout of your pages.
* I did not have the overlap issue shown on page 93. Consequently, I removed the `.row.page-header` line from the Jade views introduced later in the chapter, which moved the content down a row.  

## Chapter 3

Don't forget to include the link to the [Heroku app](https://warm-plateau-96144.herokuapp.com/)!

Notes
* Installations from appendix A & Appendix B are necessary to get Ch 3 code working.
* The `foreman start` command (p. 75) is obsolete. Run `heroku local` instead.

The app so far should look like this on Heroku (include a screenshot with each chapter's update!):

![ch1](/readme_img/ch1.png)

### Markdown

The following code shows how this Readme file was written in the [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) (`.md`) language.

    # Getting MEAN book project

    This is the project described in the book Getting MEAN by Simon Holmes

    ## Chapter 3

    Don't forget to include the link to the [Heroku app](https://warm-plateau-96144.herokuapp.com/)!

    Notes
    * Installations from appendix A & Appendix B are necessary to get Ch 3 code working.
    * The `foreman start` command (p. 75) is obsolete. Run `heroku local` instead.

    The app so far should look like this on Heroku (include a screenshot with each chapter's update!):

    ![ch1](/readme_img/ch1.png)

    ### Markdown

    The following code shows how this Readme file was written in the [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) (`.md`) language.
