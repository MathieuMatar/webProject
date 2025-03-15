const moment = require('moment');

class Contact {
    /*
    fields:
    contact_id     int(11)      NOnull
    client_id      int(11)      NOnull    relationship with client
    name           varchar(100)      NOnull
    email          varchar(100)      YESnull
    phone          varchar(20)      YESnull
    role           varchar(50)      YESnull
    */

    constructor(contact_id, client_id, name, email, phone, role) {
        this.contact_id = contact_id;
        this.client_id = client_id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.role = role;
    }

    static fromRow(row) {
        return new Contact(
            row.contact_id,
            row.client_id,
            row.name,
            row.email,
            row.phone,
            row.role
        )
    }
}

module.exports = Contact;