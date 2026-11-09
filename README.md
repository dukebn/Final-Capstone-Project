# Final-Capstone-Project

### Problem-solving approach
- My problem solving approach invloved running the project and see what errors the tests produce and going through the instructions to see what the project needs me to do before commiting to writing any code.

### Explain one key technical decision you made during your implementation
- One key technical decision I made during my implementation was using middleware to handle resource validation, such as checking whether a movie exists before processing a request.

I chose this approach because it separates validation logic from the route handlers, making the code cleaner, more reusable, and easier to maintain. Instead of repeating the same validation checks across multiple endpoints, I could create middleware that checks whether a movie exists and then either passes the request to the next handler or returns an appropriate error response.

I preferred this approach over placing all the validation logic directly inside each route because it reduces code duplication and makes the application easier to scale. It also helps ensure consistent error handling across different endpoints.

### AI use disclosure
- I used chatgpt to help dial in on the errors my code was creating that I couldn't fully figure out.

### What is one area of backend engineering that you want to strengthen based on your experience developing this project.

- One area of backend engineering I want to strengthen is error handling and API design. While developing this project, I gained a better understanding of how routes, middleware, and services work together. I also realized how important it is to handle edge cases and unexpected requests consistently.

I want to become more confident designing RESTful APIs, writing effective middleware, and implementing proper validation and error handling. Strengthening these skills will help me build backend applications that are more reliable, maintainable, and scalable.

### Optional industry question. How would you use AI tools ethically and effectively in real back end engineering workflows (for example, for debugging, documentation lookups, or brainstorming improvemtns)?

- I would use AI as a development assistant rather than relying on it to do the work for me. For example, I could use AI tools to help understand error messages, troubleshoot bugs, explain unfamiliar code, look up documentation concepts, and brainstorm ways to improve an application's structure.

However, I would make sure to review, test, and understand any code or suggestions before implementing them. I would also avoid sharing sensitive information, credentials, or proprietary company data with AI tools.

Ultimately, I believe AI is most effective when it helps developers work more efficiently while still using their own technical judgment, problem-solving skills, and responsibility for the quality of their code.