---
slug: client
sidebar_position: 4
---

# JavaScript client

The JavaScript Client library provides an easy way to access the features of the CourseKit API from your course site.

## Installation

NPM:

```bash
npm install --save @coursekit/client
```

The main API is an instance of the `CourseKitClient` class. Both an ES Modules and CommonJS build are provided.

ESM:

```javascript
import { CourseKitClient } from '@coursekit/client'
```

CJS:

```javascript
const { CourseKitClient } = require('@coursekit/client')
```

## CourseKitClient class

Create an instance of the client with the `new` keyword. Pass in your school ID as an option (school ID is a public value that you can find in your account dashboard).

```javascript
import { CourseKitClient } from '@coursekit/client'
const ck = new CourseKitClient({ schoolId: '...' })
```

### Constructor

The constructor takes one parameter:

- `options: object`. A required object with the following options:

| Option name | Required? | Type | Description |
|-|-|-|-|
| baseUrl | no | string | Changes the URL of the CourseKit API. |
| devMode | no | boolean | Uses development URLs for auth redirects (default: false). |
| schoolId | **yes** | string | Sets the school ID. |

### Methods

#### `loadUser(): Promise<Response>`

Loads the user's data from the API. The response object properties are:

- `status: number`. The status of the API call to load the user.

| Status | Description |
|-|-|
| 200 | Successfully loaded |
| 401 | User is not authenticated |
| 500 | Error |

- `user: User`. An object which provides the data and methods you need to manage the user.

Example:

```javascript
const { status, user } = new ck.loadUser()
if (status !== 200) {
  console.log(user.getName()) // null
} else {
  console.log(user.getName()) // Kilgore Trout
}
```

#### `loadCourse(courseId: string) : Promise<Response>`

Loads a full course from the API. Requires a `courseId`. The response object properties are:

- `status: number`. The status of API call to load the lesson's content.

| Status | Description |
|-|-|
| 200 | Successfully loaded |
| 401 | User is not authenticated |
| 403 | User is authenticated but does not have access to this course |
| 404 | Course not found |
| 500 | Error |

- `course: Course | null`. The course object or `null` if the course cannot be found.

Example:

```javascript
const { status, course } = await ck.loadCourse(courseId)
if (status === 404 || status === 500) {
  console.log(course) // null
} else {
  console.log(course.title) // Photography for Beginners
}
```

#### `loadCourseSummaries() : Promise<Response>`

Loads summaries of all courses of a school from the API. The response object properties are:

- `status: number`. The status of API call to load the lesson's content.

| Status | Description |
|-|-|
| 200 | Successfully loaded |
| 401 | User is not authenticated |
| 500 | Error |

- `courses: Array<CourseSummary>`. An array of course summaries.

Example:

```javascript
const { status, courses } = await ck.loadCourseSummaries()
if (status === 401) {
  console.log(courses[0].enrolled) // null
} else {
  console.log(courses[0].enrolled) // true
}
```

#### `loadLesson(courseId: string, lessonId: string) : Promise<Response>`

Loads a lesson from the API. Requires both a `courseId` and `lessonId`. The response object properties are:

- `status: number`. The status of API call to load the lesson's content.

| Status | Description |
|-|-|
| 200 | Successfully loaded |
| 401 | User is not authenticated |
| 403 | User is authenticated but does not have access to this lesson |
| 404 | Lesson not found |
| 500 | Error |

- `lesson: Lesson | null`. The lesson object or `null` if the lesson cannot be found.

Example:

```javascript
const { status, lesson } = await ck.loadLesson(courseId, lessonId)
if (status === 404 || status === 500) {
  console.log(lesson) // null
} else {
  console.log(lesson.title) // Welcome to the course
}
```

## User object

The `User` object provides an easy way to manage the user from the client.

### Methods

#### `loginRedirect(opts?: object): void`

Redirects the user to the login form. You can supply an options object with a `courseId` value if you want the user to be redirected to a particular course after login. By default, the user will be redirected to the school URL.

Also note that if the `devMode` option in the client constructor is true, the user will be redirected to the development URL of the course or school.

Example:

```javascript
// Redirects to login form then to homepage of school
user.loginRedirect()
```

| Option name | Required? | Type | Description |
|-|-|-|-|
| courseId | no | string | The ID of the course that the user should be redirected to after login.  |

Will do nothing if the user is already logged in.

#### `logoutRedirect(opts?: object): void`

Redirects the user to the logout page. You can supply an options object with a `courseId` value if you want the user to be redirected to a particular course after logout. By default, the user will be redirected to the school URL.

Also note that if the `devMode` option in the client constructor is true, the user will be redirected to the development URL of the course or school.

Example:

```javascript
// Redirects to login form then to homepage of school
user.logoutRedirect({ courseId: 'co84mfyq' })
```

| Option name | Required? | Type | Description |
|-|-|-|-|
| courseId | no | string | The ID of the course that the user should be redirected to after logout.  |

Will do nothing if the user is not logged in.

#### `enrollRedirect(courseId: string): void`

Redirects the user to the enrollment page for the course (if it is free) or to the checkout page (if it has a price).

Also note that if the `devMode` option in the client constructor is true, the user will be redirected to the development URL of the course or school.

Example:

```javascript
// Redirects to registration page.
user.enrollRedirect('co84mfyq')
```

Does nothing if the user is already enrolled in the course or if your account has a custom payment gateway.

#### `isAuthenticated(): boolean`

Returns a boolean indicating whether or not the user is logged in.

#### `getName(): string | null`

Returns the user's name as a string or null if the user is not logged in.

## Course object

The `Course` object provides the course data as well as meta info of the lessons of that course.

### Properties

#### `id: string`

Course ID.

#### `title: string`

Course title.

#### `enrolled: boolean | null`

The enrollment status of the course for the logged in user. Will be `null` if the user is not logged in.

#### `lessons: Array<LessonSummary>`

An array of lesson summaries for this course.

#### `meta: object`

An object containing all meta properties of the course (these are set in the frontmatter of the course content). Will only include the *public* meta properties if the user is not logged in.

#### `markdown: string | null`

Raw course content. `null` if the user is not logged in and meta property of course `public.content` is not `true`.

#### `html: string | null`

Rendered markdown. `null` if the user is not logged in and meta property of course `public.content` is not `true`.

#### `nextIncompleteLesson: LessonSummary | null`

Returns the next incomplete lesson summary of a specified course or `null` if the user is not logged in.

#### `progress: float | null`

Returns a number between 0 and 1 with decimal points indicating the amount of the specified course that is complete. For example, in a 4 lesson course if 1 lesson is complete this method would return `0.25`.

Returns `null` if the user is not logged in.

#### `createdAt: string`

Returns a date string with timezone.

#### `updatedAt: string`

Returns a date string with timezone.

### Methods

#### `getNextLesson(currentLessonId: string): LessonSummary | null`

Returns lesson summary after the one specified. Returns `null` if no next lesson found.

#### `getPreviousLesson(currentLessonId: string): LessonSummary | null`

Returns lesson summary before the one specified. Returns `null` if no previous lesson found.

## LessonSummary object

Lesson summaries provide meta info of a lesson and are found in an array sub-property on the Course object.

### Properties

#### `id: string`

Lesson ID.

#### `title: string`

Lesson title.

#### `order: number`

The order/position value of a lesson within a course.

#### `complete: boolean`

If the lesson is marked complete. Will be `null` if the user is not logged in.

#### `meta: object`

An object containing any public meta properties of the lesson (these are set in the frontmatter of the lesson content).

## CourseSummary object

Course summaries provide meta info of a course.

### Properties

#### `id: string`

Course ID.

#### `title: string`

Course title.

#### `enrolled: boolean`

Indicates if the user is enrolled in the course or not. Will be `null` if the user is not logged in.

#### `meta: object`

An object containing any public meta properties of the course (these are set in the frontmatter of the course content).

## Lesson object

The `Lesson` object provides the lesson data and methods to manage the lesson.

### Properties

#### `id: string`

Lesson ID.

#### `title: string`

Lesson title.

#### `order: number`

The order/position value of a lesson within a course.

#### `complete: boolean`

If the lesson is marked complete. Will be `null` if the user is not logged in.

#### `meta: object`

An object containing all meta properties of the lesson (these are set in the frontmatter of the lesson content). Will only include the *public* meta properties if the user is not logged in.

#### `markdown: string | null`

Raw lesson content. `null` if the user is not logged in and meta property of lesson `public.content` is not `true`.

#### `html: string | null`

Rendered markdown. `null` if the user is not logged in and meta property of lesson `public.content` is not `true`.

#### `createdAt: string`

Returns a date string with timezone.

#### `updatedAt: string`

Returns a date string with timezone.

### Methods

#### `markComplete(): Promise<boolean>`

Asynchronous method that marks a lesson as complete. Returns a promise that resolves to a boolean indicating success. Always returns false if user is not logged in.

#### `markIncomplete(): Promise<boolean>`

Asynchronous method that marks a lesson as incomplete. Returns a promise that resolves to a boolean indicating success or failure. Always returns false if user is not logged in.
