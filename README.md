# my-course-roster-MohammedNawazMynulIslam
##  Questions

- Add at least 3 Project features
Ans: The project features are:
        1. No duplicate course is allowed if anyone select duplicate course there will be a toast.
        2. If credit hour is more than 20 hr than a toast will be shown
        3. This is a single page course registration page where users will be able to find all the available course in a single page. The UI is very simple and easy to use.

- Discuss how you managed the state in your assignment project.
- Ans: First i have create components for the course than get data from api. After than i credit single component for one data(card/course). I have used tailwind css (css framework)and daisyUI(library) for my assignment. Then i added button which comes with daisyUI card. I added function to it like after clicking the button the user will see the right side the screen under the course name section the course he/she have selected with the total credit on it. For this i had to pass the data from parents to child component. I have added condition if there is no credit than 20 hr than a toast will be shown to the user.