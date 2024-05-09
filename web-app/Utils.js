// import fetch from "node-fetch";
// import fs from "fs/promises";

class Utils {
    static async readDataFile() {
        try {
            let data = await fetch('Data.json');
            // let data = await fs.readFile("Data.json")
            data = await data.json();
            return data;
        } catch (error) {
            console.log("Error In reading the data", error);
            throw (error);
        }
    }

    // 
    static loadCredientialsToLocalStorage() {
        let list = [];
        let user1 = { username: "raone", password: "1111" };
        let user2 = {
            username: "singh",
            password: "1111"
        }
        let user3 = {
            username: "ajay",
            password: "1111"
        }
        list.push(user1, user2, user3);
        list = JSON.stringify(list);
        localStorage.setItem("credientialsList", list);
    }

    static getCredientialsListFromLocalStorage() {
        let data = localStorage.getItem("credientialsList");
        return JSON.parse(data);
    }

    static setIsLoggedIn(value) {
        localStorage.setItem("isLoggedIn", value);
    }

    static getIsLoggedIn() {
        let value = localStorage.getItem("isLoggedIn");
        if (value == "true") return true;
        else return false;
    }

    static checkCredientials(username, password) {
        const list = Utils.getCredientialsListFromLocalStorage();
        for (let i = 0; i < list.length; i++) {
            const user = list[i];
            if (user.username.trim() == username) {
                console.log("Username is matched.");
                if (user.password.trim() == password) {
                    console.log("Password is matched.");
                    return true;
                }
            }
        };
        return false;
    }

    static getUrl(){
        let fullUrl = window.location.href;
        let origin  = window.location.origin;
        return fullUrl.replace(origin, "");
    }

    static redirectUrl(){
        if (Utils.getIsLoggedIn() && Utils.getUrl() != "/html&css/resume.html") {
            window.location.href = "/html&css/resume.html";
        } 
        if(!Utils.getIsLoggedIn() && Utils.getUrl() != "/"){
            window.location.href = "/";
        }
    }
}


export { Utils };