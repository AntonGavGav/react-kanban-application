# Kanban React Application
Website was not made for mobile devices. I used several libraries that only affected the styling of the page
#### Used libraries:
- [tailwind css](https://tailwindcss.com/docs/guides/create-react-app)
- [react datepicker](https://www.npmjs.com/package/react-datepicker)
- [react icons](https://react-icons.github.io/react-icons/)
---
#### Answers to additional questions:
1. > "Let's assume that each list can have thousands of tasks. How would you deal with the problem of displaying a large number of tasks on the list?"


 If you want to handle thousands of tasks then local storage should not be enough. We would need some backend for this. For example it could be the REST service which stores our tasks in some database and provides an API to receive them by pages.
Having such an API we would need to change our UI solution.  So that when scrolling down the tasks bar we call the server for the next portion of tasks, passing the limit and offset.

2. >Let's assume that we would like to be able to send a link to a specific task to someone. How would you implement this requirement?

This task could be also solved by having a backend API which returns task data by task id. Since all tasks are stored in DB each could have its unique id. So we could call the server for the details of the task given its id. Then on UI we would need to implement specific page which receives task id as query parameter. When this page opened we take the id from params and call backend. Then just display data received in response.


### Link to a page:
https://antongavgav.github.io/react-kanban-application/