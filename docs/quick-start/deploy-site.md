---
sidebar_position: 4
---

# Deploy to Netlify

Let's now deploy the site to Netlify so it is publicly available for your students to use.

We'll first link your forked template to a Netlify site. To do this, go back to the terminal and kill your Netlify dev server (Ctrl + C) then run:

```
$ netlify init
```

Enter the following at each of the prompts:

```
? What would you like to do? Create & configure a new site
? Team: <select your team>
? Site name (optional): <either choose something or leave blank>
? Your build command (hugo build/yarn run build/etc): npm run generate
? Directory to deploy (blank for current dir): dist
? Netlify functions folder: functions
```

Netlify should now print out your site details including the site URL.

Next, we'll need to set the same environment variables from your *.env* file in the Netlify site.
```
$ netlify env:set COURSEKIT_SCHOOL_ID <your schoolId> 
$ netlify env:set NODE_ENV production
```

You'll now need to rebuild the site for these environment variables to be incorporated in the site build. To do this, you'll have to go to the [Netlify web app](https://app.netlify.com) and manually trigger a deploy:

![quick-start-1-15.png](/img/quick-start-1-15.png)

## Configure production site in dashboard

The final thing we need to do is tell the CourseKit dashboard about the production site - specifically, we have to set the **redirect URLs** which tell CourseKit where to send students when they log in or register for your course.

Firstly, we'll set the school URL. To do this, go to the **Courses tab**, and click the edit button in the top right of the School pane.

Leave the School URL (development) value as is, but set the School URL (production) value to the URL of your Netlify site.

![quick-start-1-18.png](/img/quick-start-1-18.png)

Next, set the URL of each course. To do this, go to a course, and copy the course ID from the Course info pane. Then click the edit course button (top right of Course info pane).

Set the homepage URL (production) of your course to:

```
<your netlify url>/courses/<course id>
```

![quick-start-1-16.png](/img/quick-start-1-16.png)

Repeat this for the other course:

![quick-start-1-17.png](/img/quick-start-1-17.png)

> Note: You can have both a development value and a production value for each redirect URL. We didn't have to set the development URL value because that was auto-generated as part of the dummy course data. If you need to use a different dev server port (e.g. 8889 instead of 8888) you'd need to change it here.
