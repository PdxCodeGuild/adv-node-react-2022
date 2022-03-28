# Lab 6: Test First

Design a simple API for a **public library** using TDD methodologies. This will be a partnered lab, where one person writes the tests and the other implements the functionality.

*This lab is intentionally open ended, you can implement whatever features you like into this API. However you have to meet a deadline, remember KISS (Keep It Simple Stupid)*

## Steps:

* Create a repository on GitHub where you and your partner will push code
* Create a specification (together) for what your library API needs to do
  * Write this up in a markdown file in your repo called `SPEC.md`
  * Use the spec to keep track of your work, sort of like a checklist
  * This will include a description of the functionality and general layout of the routes you'll need *(CRUDL?)*
* Follow the *red green* pattern:
  * Write a failing test
  * Write the code that will make it pass
* Ensure your test coverage is above 85%


## Extra Credit:

* Get 100% test coverage
* Setup a CI (Continous Integration) tool that will run your tests whenever there's a push or merge to master
  * [TravisCI](https://travis-ci.com)
  * [CircleCI](https://circleci.com)
