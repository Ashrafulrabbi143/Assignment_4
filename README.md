#Assignment_4

Here are the answers to five questions

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANS: getElementById:  it's find one element and returns only one element but id must be unique.

getElementsByClassName:  it finds all elements with specific class name and return multiple element.

querySelector:  it finds the first element that's match css selector and return only the first match.example:
id(#),class(.)

querySelectorAll:  it finds all elements that match a css selector and this selector all element with css.

### 2. How do you create and insert a new element into the DOM?
ANS: it used to create new element by using (document.createElemnt()) and customize for text,class,id new element and
then insert data by appendChild().

### 3. What is Event Bubbling? And how does it work?
ANS: Event Bubbling is an event when we are click that time start on the innermost element and then moves up to the
parent element automatically.

how does it work:
when we are click button,the event first happen on the button itself.
then, it bubble up to the parent div, then body, then document, unless we stop it.

### 4. What is Event Delegation in JavaScript? Why is it useful?
ANS: Event Delegation is technic where we add one event listener to a parent element and handle every child element
using event bubbling.

Why is it useful:  it is useful because there is no need to hold every child and it is enough to add one event listener
to a parent element.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
ANS: preventDefault:  it's work stops the browser's default action from happening.

stopPropagation:  it's work stop the event from moving up to parent elements unless we stop it.

there are some difference between them one is Browser's default behavior in preventDefault and another is that Event
Bubbling in stopPropagation.
