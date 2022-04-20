---
sidebar_position: 4
---

# Test Site Features

## Enrolling test students

To enroll a student in one of your courses, you will likely get them to pay for your course via an ecommerce platform like Stripe or Gumroad. We'll be setting up Stripe products shortly. For now, you can add students to your courses manually via the dashboard.

Go to **Students tab** of the dashboard and click the add (plus) button where you can enter a name, email, and select a course. You should also tick the checkbox indicating that the student should be redirected to the development site after login rather than the production site.

> Note: you'll need to use an email address that you can access since students require email activation. However, the email should be different from your CourseKit user email. If you don't have extra email addresses, an easy way is to append `+<some string>` to your email prefix e.g. *yourname+somestring@domain.com*. This email should automatically be aliased to your current inbox.

![quick-start-1-19.png](/img/quick-start-1-19.png)

After you've added a student, you'll see them in your student list with status "PENDING". This means they've been sent an activation email and will now need to create an account.

![quick-start-1-9.png](/img/quick-start-1-9.png)

You should now receive the activation email. This email contains a unique URL that allows the student to create an account and enroll in the course.

![quick-start-1-10.png](/img/quick-start-1-10.png)

Click the link, and you'll be asked to register for the course. This is not the same login as the CourseKit dashboard - this is the login for student accounts - so create a unique account here.

![quick-start-1-11.png](/img/quick-start-1-11.png)

Once you've created a student account you'll be redirected to the course home page.

> Note: if the redirect failed, you either didn't use port 8888 for your site or you didn't check the "Redirect to dev homepage URL" option when you enrolled the student!

![quick-start-1-12.png](/img/quick-start-1-12.png)

Returning to the student tab of the dashboard, refresh the page and you should now see the student status has gone from "PENDING" to "ACTIVE". This means they now have an active enrollment in the specified course.

![quick-start-1-13.png](/img/quick-start-1-13.png)

## Logged in features

Now that you're logged in as a student, click around your site and you'll see a variety of features you couldn't see previously. Most notably, if you click a lesson page you should now be able to see the lesson content!

> Note: all the lessons of the dummy courses have a test Vimeo video and some lorem ipsum text. You can customize this content in the dashboard by changing the vimeo IDs to your own video IDs and by providing your own markdown content.

![quick-start-1-14.png](/img/quick-start-1-14.png)

Go ahead and experiment with the site - play the video, complete the lessons, etc. And keep in mind all the content and site behavior can be customized by modifying the code of your template. If you're interested in how to do this, check out the [CourseKit JavaScript client](https://github.com/course-kit/client).

