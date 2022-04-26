---
slug: /
sidebar_position: 1
---

# Introduction

**[CourseKit](https://coursekit.dev)** is a developer-first platform for creating online courses.

The headless API architecture allows you to quickly create courses that look and feel how you want. You can also deploy them where you want and use the developer tools and workflows that you already know and love.

## Core features

### Headless API

Unlike other course hosting platforms, CourseKit does not provide a view layer. CourseKit hosts your content and makes it available via an HTTP service. You need to provide your own frontend to display your courses (usually a static website).

This approach has several advantages:

- You can have any kind of design and UX for your courses
- You can use whatever frontend tech you prefer (e.g. React or Vue)
- You can host your course on the same site as your blog

To get you up and running fast, we've got several [pre-made course templates](https://github.com/course-kit/guides/blob/master/templates.md) that can be deployed without minimal configuration in case customization of design and UX is not a priority.

### Secure access

To access your course content, students will have to enroll. This allows you to charge for access to your courses as well as track student progress and provide personalization.

CourseKit provides student management out of the box. Your site just needs to provide links to the login and registration pages.  We also provide an optional payment platform for handling enrollments or you can connect your own.

![testing-site-3](/img/testing-site-3.png)

### Markdown-based content

For maximum flexibility, lesson and course content are created in a markdown-based editor in the cloud-based CourseKit dashboard.

Markdown frontmatter is also supported to allow for metadata like image thumbnail URLs, video embed URLs, etc.

![introduction-1](/img/introduction-1.png)

### JavaScript client library

For your frontend site to access your course content, it'll need to connect with the CourseKit API. The recommended way to do this is with the [CourseKit JavaScript Client Library](https://github.com/course-kit/client).

### Integrations

Unlike other course platforms, CourseKit only provides must-have features for courses including student management, basic content hosting, and basic payments.

Features like video hosting, email marketing, or more complex eCommerce can easily be added as integrations. We think this is a better approach because:

- You only pay for what you need
- You can use services that already do a good job like Stripe, Vimeo, ConvertKit

## Examples

To get better acquainted with CourseKit, try the [CourseKit Tour](https://demo.coursekit.dev/).

You can also see these examples:

- [*Cypress Network Testing Exercises* by Gleb Bahmutov](https://cypress.tips/courses)
- [CourseKit Nuxt Demo](https://coursekit-nuxt-demo.netlify.app/)
- [CourseKit React Template](https://coursekit-react-template.netlify.app/)
- [CourseKit Vue Template](https://coursekit-vue-template.netlify.app/)

## Next steps

If you're ready to get started with CourseKit, create a free account [here](https://coursekit.dev/). Then you can follow the [Quick Start Guide](/quick-start) and set up your course site in around five minutes!
