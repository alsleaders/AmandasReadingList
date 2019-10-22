# My Reading List

This is me, trying to find a better way to track my books

I want to track by:

- Author
- Title
- Series (maybe, probably)

Other things I want to keep track of, but not sort by:

- Bought, Borrowed, or from Library
- Quotes (if I do this Quotes will have to be it's own table)
- How much I liked it
- Whether I'd like to read it again
- Whether I want to own a copy of it
- Whom I've recommended it to

# Defualt Template for SDG .NET Course

This is the default template for a simple .NET Core Web React App. This template has:

- CORS Enabled
- Postgres & EF Core
- Swagger
- Ready for Docker Deployment

to use:

- [ ] Update your database name in `DatabaseContext.cs`

to Deploy to heroku:

- [ ] create a web app on heroku, make sure to have the CLI downloaded, installed, logged in and be logged into the container via heroku.
- [ ] Update your `dockerfile` to use your `*.dll` file instead of `dotnet-sdg-template.dll`
- [ ] Update the deploy script:
  - [ ] change `sdg-template-image` to `your-project-name-image`
  - [ ] change `heroku-web-app` to your web app name on heroku

## PROTIP:

When you are complete with the project and have turned it in to your instructor, update this read me with details about the assignment.
