const moment = require('moment');

class Client {
    /*
    client_id    int(11)   NOnull
    name         varchar(100)   NOnull
    email        varchar(100)   YESnull
    phone        varchar(20)   YESnull
    address      varchar(100)   YESnull
    client_type   enum('Corporate','Hospitality','Religious','Retail','NonProfit','Startup','ECommerce','Healthcare','PersonalBrand')   NOnull

    client type enum might change, it must always be querie from the database SHOW COLUMNS FROM client LIKE 'client_type';

    */

    constructor(client_id, name, email, phone, address, client_type) {
        this.client_id = client_id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.client_type = client_type;
    }

    static fromRow(row) {
        return new Client(
            row.client_id,
            row.name,
            row.email,
            row.phone,
            row.address,
            row.client_type
        )
    }
}

module.exports = Client;