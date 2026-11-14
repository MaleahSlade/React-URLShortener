I started with a plain HTML, CSS, and JavaScript URL shortener and rebuilt it in React. I worked one step at a time, and I used Claude to walk me through each step and explain the code. First I set up Vite and React and moved my images and CSS in. Then I broke the page into components like the nav bar, form, and result cards. I moved the API call and saved links into React state, then added delete buttons, a search bar, and form validation. Last, I made the layout work on phones and tablets. I committed to Git after each step.

I ran into a few problems. My new project was still connected to my old GitHub repo, so I removed that link before pushing. Vite put its files in the wrong folder, so I moved them up. Sometimes my files got cut off when I pasted them, so I checked the end of each file. My mobile layout also only worked on tiny phones, so I raised the breakpoint to 768px.

The biggest thing I learned is how React state works. I update a list, and React redraws the page for me.

Next, I would test with a keyboard and screen reader and add tests.
