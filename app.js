const hotelManagement = require('./keeshen_hotelManagement');

hotelManagement.addStaff('Alice', 'alice@gmail.com', '123456789');
hotelManagement.getStaffDetailsByName('Alice');

hotelManagement.addRoom('101', 'small', '200');
hotelManagement.availableRooms();

