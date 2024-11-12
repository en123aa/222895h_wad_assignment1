const hotelManagement = require('./keeshen_hotelManagement');

// hotelManagement.addStaff('Alice', 'alice@gmail.com', '123456789');
// hotelManagement.getStaffDetailsByName('Alice');
// hotelManagement.getStaffDetailsByName('John');
// hotelManagement.getStaffDetailsByName('Jenny');
// hotelManagement.getStaffDetailsByName('Alice');

hotelManagement.addRoom('101', 'small', '200');
hotelManagement.addRoom('108', 'big', '400');
hotelManagement.addRoom('117', 'small', '200');
hotelManagement.availableRooms();
hotelManagement.bookRoom('John', '123456789', '108', '12 December', '20 December')
hotelManagement.availableRooms();
hotelManagement.cancelBooking('John', '108');

