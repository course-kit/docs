---
sidebar_position: 3
---

# Clone Site Template

Since CourseKit is a "headless" course platform, your course content is accessible through an API. So now you'll want to create a course website where your courses can be displayed.

Rather than creating a site from scratch, let's install a [site template](https://github.com/course-kit/guides/blob/master/templates.md). This will provide the basic features of a course out-of-the-box, and allow you to come back later and customize the UI and UX to your taste.

> Note: in this guide we'll be using the [Nuxt (Vue.js)](https://github.com/course-kit/nuxt-demo) template. Most of the directions can be followed even if you choose a different template.

To install the template, first, make a fork by clicking the "Fork" button in the top right. It's important to do this so that you have your own private repo that you can deploy from.

![quick-start-1-4.png](/img/quick-start-1-4.png)

Once you've forked the template, open a terminal and clone the template on your computer:

```bash
$ git clone https://github.com/<your-github-account>/nuxt-demo.git
```

Now, change into the directory and install NPM modules.

```bash
$ cd nuxt-demo
$ npm i
```

## Add config

After the NPM modules are installed, create a `.env` file where you can add environment variables for config.

```
$ touch .env
```

Firstly, set the `NODE_ENV` variable to `development` so that your site uses development features and the CourseKit API realizes you're in test mode. You'll also need to set the `COURSEKIT_SCHOOL_ID` here so CourseKit knows which school to link this site to.

> Note: You can find your school ID in the dashboard on the "Courses" page.

*.env*

```
NODE_ENV=development
COURSEKIT_SCHOOL_ID=<your school ID>
```

Now save the .env file.

## Run dev server

In this guide, we'll be using Netlify to deploy our course site. You'll need the [Netlify CLI](https://docs.netlify.com/cli/get-started/) installed as we'll be using several CLI features and commands.

Run this command from the project root:

```
$ netlify dev
```

After the dev server finishes compiling, Netlify CLI will open your site in the browser. If you've configured it correctly, the home page will display your two courses.

> Note: make sure you use the default port of 8888 for the Netlify dev server otherwise the redirect URLs in the dashboard will be wrong (this will be explained later in the guide).

![quick-start-1-5.png](/img/quick-start-1-5.png)

Now, take a look around your site. Click your courses and see the main course page, as well as all the lessons.

![quick-start-1-6.png](/img/quick-start-1-6.png)

You'll notice that the lesson content cannot be viewed without logging in as a student. If you click the **login** button in the navigation bar (top right), you’ll be taken to the login screen:

![quick-start-1-7.png](/img/quick-start-1-7.png)

We haven't yet added any student accounts, though, so let's do that now.


