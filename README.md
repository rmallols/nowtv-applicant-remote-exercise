nowtv-applicant-remote-exercise
===============================

Welcome to the remote exercise for NOWTV applicants.

The high level goal of the test is to build a simple yet special register form, where the user has to specify:
* His favourite color.
* His e-mail address.

If the data model is correct, the user will be redirected to a different view, receiving proper feedback otherwise.

The estimated working time to complete the acceptance criteria (see below) is **2 hours**.

### Acceptance criteria


1. The UI of the register form will be based on the information provided on the mockup at `/frontend/src/app/register/register.mockup.jpeg`.
    * The content is aligned to the middle, both vertically and horizontally.
<br/><br/>

2. Just one color will be selected at the same time. Whenever any of them is marked:
    * It will be surrounded with a red border color.
    * The border color of the e-mail input field will be the same as the selected color.
<br/><br/>

3. The user will receive error feedback whenever the specified e-mail address fits with any of the following scenarios:
    * It's empty.
    * It's not a valid e-mail address.
    * It's not accepted by the back-end (see below for details about triggering REST calls). Please note that just the `foo@bar.com` will be considered as invalid.
<br/><br/>

4. If the typed e-mail is valid, the user will be able to submit the data to the backend
    * Endpoint: `/rest/register`
    * Request type: `POST`
    * Expected data format: `{ color: '<selected color>', email: '<typed email>' }`
<br/><br/>

5. If the backend rejects the request for any reason (the `foo@bar.com` e-mail address is marked as already in use, so nobody else can register it), it will trigger a 500 error code
    * The user will receive a message alerting him about the origin of the problem.
<br/><br/>

6. If the backend accepts the request:
    * The flow will redirect to the /thanks view (Don't mind about anything there but the redirection itself).

### Further tips

* Having a good test coverage is really important for us. Please try to give them the importance you consider they deserve.

* Feel free to explain any of the decisions you take, as well as to propose enhancements to the architecture in case you would have had more time to implement the given solution.


### How to start


1. Checkout the project.

2. Start the execution server with `supervisor backend/server.js`. `The targeted view is expected to be at http://localhost:3000/register`.

3. Start the testing server with `grunt startKarma`.



