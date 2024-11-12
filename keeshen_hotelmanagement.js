console.log("starting hotel app");

let hotelManagement = {
    rooms: [],
    staff: [],
    bookings: [],

    // this function is used to add a new room into the hotel's inventory with 4 fields : room number, type of room, price per night and vacancy, with a console log being created if the addition was succesful
    addRoom(roomNumber, type, pricePerNight) {
        this.rooms.push({ roomNumber, type, pricePerNight, vacant: true });
        console.log(`Room ${roomNumber} added.`);
    },

    // this function will list down all the current available rooms in the hotel based on the 'vacant' field, if a room is currently marked as vacant it will be shown in the output
    availableRooms() {
        let availableRooms = this.rooms.filter(room => room.vacant);
        console.log("Available Rooms: ", availableRooms);
        return availableRooms;
    },

    // this function is used to book a room from the list of rooms available for a guest to stay in
    bookRoom(guestName, phoneNumber, roomNumber, start, end) {
        const room = this.rooms.find(r => r.roomNumber === roomNumber && r.vacant);
        if (!room) {
            console.log(`Room ${roomNumber} is not available.`)
        }
        else {
            this.bookings.push({ guestName, phoneNumber, roomNumber, start, end })
            room.vacant = false;
            console.log(`Room ${roomNumber} has been booked for ${guestName}, from ${start} to ${end}.`);
        }
    },

    // this function is used to cancel an existing booking that has been made by a guest.
    cancelBooking(guestName, roomNumber) {
        const bookingIndex = this.bookings.findIndex(bookings => bookings.guestName === guestName && bookings.roomNumber === roomNumber);
        if (bookingIndex === -1) {
            console.log(`There is no booking registered under ${guestName}`)
        }
        else {
            this.bookings.splice(bookingIndex, 1);
            const room = this.rooms.find(r => r.roomNumber === roomNumber);
            if (room) room.vacant = true;

            console.log(`Booking for ${guestName}, room ${roomNumber} has been canceled.`);
        }
    },

    // this function is used to add a staff members' details to the staff array/database, and a console log will be created if the addition was successful
    addStaff(name, email, phoneNumber) {
        this.staff.push({ name, email, phoneNumber });
        console.log(`Staff member ${name} added.`);
    },

    // this function is used to retrieve a staff members' details by name, in which by entering a name the details of said staff member will be reflected, and if there are no staff members' by said name an error message will be returned
    getStaffDetailsByName(name) {
        let staffMember = this.staff.find(staff => staff.name === name);
        if (staffMember) {
            console.log(`Details for ${name}:`, staffMember);
            //return staffMember;
        } else {
            console.log(`Staff member ${name} not found.`);
            //return `Staff member ${name} not found.`;
        }
    },
}

module.exports = hotelManagement;