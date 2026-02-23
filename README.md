## Welcome To ( সহজ সরল সিম্পল ) Assignment - 4 


---
# 📅 Deadline For 60 marks: 23th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 50 marks: 24th February, 2026 (11:59 pm ⏱️)
# 📅 Deadline For 30 marks: Any time after 24th February.


# Main Requirements

## Design Part

## Dashboard
- Website name and Create a dashboard like figma 
- The section should be responsive for mobile devices. It is totally up to you. 

## Available Jobs Section
- A title on the left side, jobs count on the right side 
- 3 different tab  below the section title 
- Minimum 8 cards with:
	- companyName
	- position
	- location
	- type
	- salary
	- description
	- 2 buttons: Interview, Rejected
- By default all the jobs data will show on All tab, and the Interview, Rejected tab will show “No jobs Available” message with a subtitle below and an icon/image on the above

- The section should be responsive for mobile devices. It is totally up to you.

--- 

## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---

# Challenges Requirements
- Clicking on the delete button will remove that card from the UI, and the count will be deducted from the dashboard card and the main section.
- No lorem ipsum text on your website. At least 8 meaningful commits in your project.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 


## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANS: getElementById: it's find one element and returns only one element but id must be unique. 
getElementsByClassName: it finds all elements with specific class name and return multiple element.
querySelector:it finds the first element that's match css selector and return only the first match.example: id(#),class(.)
querySelectorAll: it finds all elements that match a css selector and this selector all element with css.

### 2. How do you create and insert a new element into the DOM?
ANS: it used to create new element by using (document.createElemnt()) and customize for text,class,id new element and then insert data by appendChild().

### 3. What is Event Bubbling? And how does it work?
ANS: Event Bubbling is an event when we are click that time start on the innermost element and then moves up to the parent element automatically.

how does it work:
when we are click button,the event first happen on the button itself.
then, it bubble up to the parent div, then body, then document, unless we stop it.

### 4. What is Event Delegation in JavaScript? Why is it useful?
ANS: Event Delegation is technic where we add one event listener to a parent element and handle every child element using event bubbling.

Why is it useful: it is useful because there is no need to hold every child and it is enough to add one event listener to a parent element.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
ANS: preventDefault: it's work stops the browser's default action from happening. 

stopPropagation: it's work stop the event from moving up to parent elements unless we stop it.

there are some difference between them one is Browser's default behavior in preventDefault and another is that Event Bubbling in stopPropagation.
 

**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI) 
- JavaScript (Vanilla)


--- 

## What to submit: 

1. GitHub Repository Link: 
2. Live Site Link: 
