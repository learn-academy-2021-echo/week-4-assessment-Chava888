# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer:
Props is a reserved word in react that represents properties. Props is used to pass properties from parent to child component. For example, we use this.props.nameOfProperty to access a passed property in the child component.


  Researched answer:
Props are short for properties, they are received from the parent to child component and considered immutable. Immutable means the props cannot change in the child component.


2. What is a DOM event?

  Your answer:
A DOM event is considered an action that results in a change within the Document Object Model. Events in the DOM could result from clicking, submitting, changing, etc. that triggers an action within the DOM. Examples that causes a DOM event are onClick, onChange, onSubmit and other event listiners that triggers an action in the DOM.


  Researched answer:
Is a signal that something has changed or occuring in the DOM and can be caused by the user interaction or by the browser. DOM events types include mouse events, touch events, keyboard event, form events, etc. 


3. What is object-oriented programming? How is it different than functional programming?

  Your answer:
OOP is the use of objects/classes to store, access, manipulate information. OOP allows inheritance of properties and methods from parent to child classes. OOP allows storage of information and access based on keys, while functional programming runs code that replaces information every time a function is invoked. For example, objects syntax is object ={key:value}, keys for access of properties and methods, while functional programming is function = ()=>{code block} there is no storge of information.

  Researched answer:
The concept that information is stored in objects. In OOP the main concepts are encapsulation meaning storage of information within an object, abstraction meaning only use the needed information within an object and nothing more, inheritance the passage of properties and methods to a child object, and polymorphism meaning a class/object can represent many things with the same configuration. OOP is based on objects while functional programming is based on functions. Objects store information while functions do not store information and depend only on the input arguments.


4. What is the difference between a Float and an Integer in Ruby?

  Your answer:
A float is a number with at least one significant figure value after the decimal. An integer is a whole number with no decimal places. For example, a float is 0.9 while a integer is 9.


  Researched answer:
Float is a subclass of Numeric class in ruby and represents real numbers. Integers are whole numbers with no decimal places. The difference between float and integer is that float can hold values after the decimal point while the integer does not.  


5. Ruby has an implicit return. What does that mean?

  Your answer:
An implicit return means no need of typing the word return to get output from a method in ruby. In ruby if no return is typed, the program will implicitly return the last line of code within a def function. 


  Researched answer:
Ruby will return the value of the last line of block code automatically. It means a return is not required everytime when defining a function and can reduce code lines.


## Looking Ahead: Terms for Next Week

1. Instance Variable:
The variable starts with a @ syntax, meaning the variable belongs to the instance of a class also known as an object. An example of an instance variable is @car.


2. PostgreSQL:
Is a object-relational database system that uses sql language. The data structure of PostgreSQL is tables that consist of rows and columns. This allows storage of information and use of CRUD operations (create, read, updated, delete) of data  which is passed between front-end and back-end to create a full-stack application.


3. Ruby on Rails:
Is a back-end framework that uses ruby as the language to create this framework. Rails is a model-view-controller (MVC) framework that allows structure to connect a database, web service, and web pages to create a full-stack application.


4. ORM:
ORM stands for object-relational mapping, this is a technique used to interact between a database and our specified langugage code when they are not compatible with each other. For example, PostgreSQL is a SQL language database and if we want to use ruby to create queries an ORM would be required to communicate with PostgresSQL via ruby language.


5. Active Record:
Is a rails ORM that allows interaction of PostgreSQL data by using ruby language. The Active Record takes data from a SQL database and lets the user interact with the data as a ruby object. 