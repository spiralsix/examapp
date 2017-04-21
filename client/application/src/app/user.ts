export class User {

    constructor(
        public _id: string = "",
        public email: string = "",
        public first_name: string = "",
        public last_name: string= "",
        public birthday: Date = new Date(),
        public date_created: Date = new Date(),
        public last_login: Date = new Date()

    ) {
        console.log("user constructor", "email:",email,"email:", first_name,"last_name:", last_name,"birthday:", birthday);
    }
}
