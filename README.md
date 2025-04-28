# Technologies used
This application would use MongoDB. Mongo was selected due to its high scalability and ability to change schemas with more flexibility. This could be useful as the platform grows in size and changes over time. Mongo allows for more servers to be spun up as the size of the platform grows. There also isn't really any complex relationships, so Postgres's strengths are overshadowed by what Mongo offers.
Express is a good fit here for the server as it is better suited to handle many concurrent requests. Having the entire stack written in javascript also reduces complexity for developers, even though the 5 of them could have different expertise. One developer could be working on the frontend, two for the backend and database, one for the infrastructure of setting everything up with amazon web services, and another can work on authentication and user management.
Videos will be uploaded to an S3 bucket which will be served using a CDN for reduced latency like Amazon Cloudfront.
Kubernetes would be used to easily increase the resources available if demand increases. A new pod instance would help decrease the load on the system, therefore keeping latency at an acceptable level.



# Instructions
The objective is to design a video-sharing and streaming platform, a YouTube "clone". 

The functional and non-functional requirements are not set in stone; we expect you to decide for yourself what a "good" video streaming and sharing platform should have. A platform like YouTube can have countless features, so a focus on core functionality such as uploading and viewing videos is expected, but if you find value in expanding or contracting the scope, feel free to do so.

To give you guidance on what the requirements of this system should be, and what it will need to accomplish, this business context is provided:
* You will have 5 developers to build and maintain this product and system
* You are expected to have a public release of this product and system in 6 months
* We expect, on average, somewhere between 20,000 and 50,000 Daily Active Users
* These users are mainly concentrated in Canada and Europe
  
Please use the above context to inform your design decisions. You will be expected to explain decisions you have made in the context of the above information.

You are expected to spend less than 5 hours on this assignment; you will have 1 hour to present your coding assignment and your proposed architecture in the upcoming interview, and you will also be expected to submit specific deliverables by pushing them to a GitHub repository before the deadline. In particular, the expected deliverables are:

### Mandatory deliverables
- [x] A Diagram illustrating your proposed system
- [x] What technologies/languages you would use within each component of the system. (Is the Database PostgreSQL or MongoDB? Would you use Express or Flask to develop the API?)
- [x] A React application acting as the front page of your Youtube clone. This page must contain a scrollable list of videos with titles and thumbnails. This page does not need to actually be functional, clicking on the videos does not need to do anything.

### Bonus points
- [x] Any functionality added to your front page React app, for example:
  * Adding the ability for a user to "favorite" a video, and persisting a list of a user's "favorited" videos.
  * Adding the ability for a user to click on a video and watch it
  * **Feel free to decide on your own what features you could add that would be a good exhibition of your abilites**
- [x] An API spec for any APIs included in your proposed system. This would include:
  * A description of all available endpoints
  * The request and response types for each endpoint
  * Anything else you think is worth providing as documentation to someone planning on using this API
- [x] Prototypes of any other service included in your system. For example:
  * A Database and API that your React app uses to fetch and persist data
 
### What you will be assessed on
This is a relatively open-ended assessment, and we want you to feel free to design and build whatever you think best displays your abilities. We will expect that you can develop a simple React App, and that you can design a system given basic business requirements. Everything else is optional, but appreciated. **Please fork this repository, and upload everything associated with your submission to your forked repository. Make sure to share your forked repository with us before the deadline.** If any part of your submission is an application or service that can be ran, please include instructions for how to run it. 