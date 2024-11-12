# Assignment 1


**This is a node module that intends to help with hotel management
<br>
To setup this node module, first you will need to create an app.js file and add the require statement at the top of the app file**
```
const hotelManagement = require('./keeshen_hotelManagement');
```

**To start using the node module, open the terminal and type**
```
node app.js
```
**All outputs will be shown in the terminal**

# Functions

**- addRoom()**
```
hotelManagement.addRoom(roomNumber, type, pricePerNight)
```
Example :
```
hotelManagement.addRoom(101, 'small', 200)
```
This function requires 3 parameters : int roomNumber, string type, int pricePerNight. Upon adding a room with this function, it will do 2 things - 1) automatically set the boolean vacant in the **rooms** array to true to indicate that the room is available to book and 2) return a message to show that the addition of the room was successful

**- availableRooms()**
```
hotelManagement.availableRooms()
```
This function does not require any parameters. The purpose of this function is to return all the items in the **rooms** array that have the boolean vacant set as true by using the filter() method

**- bookRoom()**
```
hotelManagement.bookRoom(guestName, phoneNumber, roomNumber, checkIn, checkOut)
```
Example :
```
hotelManagement.bookRoom('John', '123456789', 108, '12 December', '20 December')
```
This function requires 5 parameters : string guestName, string phoneNumber, int roomNumber, string checkIn and string checkOut. The function will make use of the find() method to check if the specified room is vacant and then book it, else it will return and error message

**- cancelBooking**
```
hotelManagement.cancelBooking(guestName, roomNumber);
```
Example :
```
hotelManagement.cancelBooking('John', 108);
```
This function requires 2 parameters : string guestName and int roomNumber. Based on these 2 parameters, the findIndex() method will be used to look through the **bookings** array to delete the booking, or return an error message if there are no matches

**- addStaff**
```
hotelManagement.addStaff(name, email, phoneNumber);
```
Example :
```
hotelManagement.addStaff('Alice', 'alice@gmail.com', '123456789');
```
This function requires 3 parameters : string name, string email and string phoneNumber. This function will add a staff member's details to the **staff** array

# References
Provide the references that you have used to support your assignment. 

find() method - https://www.w3schools.com/JSREF/jsref_find.asp
<br>
filter() method - https://www.w3schools.com/jsref/jsref_filter.asp
<br>
findIndex() method - https://www.w3schools.com/jsref/jsref_findindex.asp
<br>
splice() method - https://www.w3schools.com/jsref/jsref_splice.asp
<br>
shorthand arrow functions - https://www.w3schools.com/js/js_arrow_function.asp