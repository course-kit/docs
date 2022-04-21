---
sidebar_position: 4
---

# Deploy site

You can deploy your CourseKit frontend on any service you like. Since the CourseKit templates are static sites, an easy and free option is to use Netlify, which we'll cover here.

> If you prefer to deploy with another provider, see the [How-to guides](/how-to) 

## Create project

Assuming you already have a Netlify account, let's import and existing project by going to [https://app.netlify.com/start](https://app.netlify.com/start).

Select GitHub as your provider and authorize the Netlify GitHub integration. Now find and select your CourseKit template repo.

You can leave all the site settings as they are and go straight to **Deploy site**.

## Link your school

Netlify will now attempt to deploy your site and it will probably fail! The reason is that the template relies on you providing your CourseKit school ID as an environment variable.

To find your school ID, go back to the CourseKit Dashboard and select the **Schools** tab. Here you'll see your school info. Copy the School ID.

Return to your site in the Netlify dashboard where you'll add this value as an [environment variable](https://www.netlify.com/blog/2021/07/05/easy-access-environment-variables/). To do this, go to Site settings > Build & deploy > Environment > Environment variables.

Depending on which template you use the name of the variable will be slightly different:

*React template*
```
REACT_APP_SCHOOL_ID
```

*Vue template*
```
VITE_SCHOOL_ID
```

Add the variable and click **Save**. You'll now need to deploy the site again for the change to take effect. To do this, go to Deploys and click **Trigger deploy**.

Once the deploy completes, your site will be almost ready to use!
