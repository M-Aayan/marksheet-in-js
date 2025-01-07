# marksheet-in-js

The Marksheet Application is a JavaScript-based tool designed to calculate and display the academic performance of a student. It works by taking the marks obtained in individual subjects (with a total of 300 marks) as input and then calculating the total, percentage, and result status (pass/fail).
How It Performs

User Interaction:
The application prompts the user to input marks for each subject using the prompt() function.
The marks for all subjects are entered individually.

Calculations:
Total Marks: The program calculates the sum of all subject marks.
Percentage: The percentage is calculated using the formula:
Percentage=(Obtained Marks/Total(300)

Result Status: Based on the percentage or marks in individual subjects, the application determines if the user has passed or failed:

Pass criteria: Each subject's marks meet the minimum passing requirement (e.g., 40/100).


Feedback Display:
The calculated total marks, percentage, and result status (pass/fail) are displayed to the user through an alert() message in a neat and formatted output.

Error Handling:
The program handles invalid inputs (e.g., non-numeric values or marks exceeding 100 for a subject) by showing error alerts and requesting valid input.
