# NodeJS
This repository contains Nodejs codes.

## Evaluation.js
In the above code, the Evaluation class is defined with a constructor that takes in two parameters: experience and skills. The evaluateExperience method simply logs the years of experience to the console. The evaluateSkills method iterates over the skills array and logs each skill with a corresponding index number.

You can create an instance of the Evaluation class with your own experience and skills, and then call the evaluateExperience and evaluateSkills methods to display the evaluation details.

## Advance_Evaluation.js
In the updated code, I've added asynchronous behavior using setTimeout to simulate an asynchronous operation. The evaluateExperience and evaluateSkills methods now accept a callback parameter. The evaluation results or errors are passed to the callbacks asynchronously.

Exception handling is implemented by checking for errors and passing them as the first parameter to the callbacks. In case of an error, the error message is logged to the console. Otherwise, the evaluation results are displayed accordingly.

The event loop is implicitly utilized by using setTimeout with a delay of 0, which allows the code to run asynchronously and simulate non-blocking behavior.
