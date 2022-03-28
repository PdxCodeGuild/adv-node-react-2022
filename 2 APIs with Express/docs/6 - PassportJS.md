
# PassportJS

So far we've learned how to make some simple CRUD endpoints, and even briefly saw an example of authentication in action with JWTs and our own custom auth middleware.

Instead of hand writing all our authentication code, there's a wonderful tool called PassportJS that let's us authenticate our app by using 3rd party modules called Strategies.

Here's what the documentation says about Passport:

> Passport is authentication middleware for Node. It is designed to serve a singular purpose: authenticate requests. When writing modules, encapsulation is a virtue, so Passport delegates all other functionality to the application. This separation of concerns keeps code clean and maintainable, and makes Passport extremely easy to integrate into an application.
> 
>In modern web applications, authentication can take a variety of forms. Traditionally, users log in by providing a username and password. With the rise of social networking, single sign-on using an OAuth provider such as Facebook or Twitter has become a popular authentication method. Services that expose an API often require token-based credentials to protect access.
>
> Passport recognizes that each application has unique authentication requirements. Authentication mechanisms, known as strategies, are packaged as individual modules. Applications can choose which strategies to employ, without creating unnecessary dependencies.
>
> Despite the complexities involved in authentication, code does not have to be complicated.

In the **examples** folder there is the most simple example using `passport`, `passport-local`, and `passport-jwt`. This will be a decent amount of code, but thankfully rarely changes from application to application. This example will be a wonderful boilerplate for you to use throughout the course.