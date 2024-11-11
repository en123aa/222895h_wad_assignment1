console.log("starting hotel app");

let hotelManagement = {
    rooms: [],
    guests: [],
    staff: [],

    // this function is used to add a new room into the hotel's inventory with 3 fields : room number, type of room and price per night, and a console log will be created if the addition was succesful
    addRoom(roomNumber, type, pricePerNight) {
        this.rooms.push({roomNumber, type, pricePerNight});
        console.log(`Room ${roomNumber} added.`);
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
            return staffMember;
        } else {
            console.log(`Staff member ${name} not found.`);
            return `Staff member ${name} not found.`;
        }
    },
}

module.exports = hotelManagement;