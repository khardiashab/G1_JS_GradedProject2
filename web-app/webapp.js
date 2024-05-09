import { MainData } from "./MainData.js";
import { Resume } from "./Resume.js";
import { Utils } from "./Utils.js";

class WebApp {

    init() {
        Utils.loadCredientialsToLocalStorage();
        Utils.setIsLoggedIn(false);
    }

    async main() {
        // Utils.redirectUrl();

        if(Utils.getUrl() === "/html&css/resume.html"){
            let data = await Utils.readDataFile();
            console.log("this is data = > " , data);
            let mainData = new MainData(data);

            if( mainData == undefined){
                alert ("Error in reading the data.")
            }
            const resume = new Resume(mainData.getCurrentResume());
            resume.displayResume();
        }

    }

    eventListener() {
        const form = document.getElementById("form");
        form.addEventListener("submit", this.loginEventHandler);


    }

    loginEventHandler(event) {
        event.preventDefault();
        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();

        if (username == "" || password == "") {
            alert("Please fill the username and password details.")
            return ;
        }
        console.log(username, password);

        console.log("Check credinetials result -> ", Utils.checkCredientials(username, password));

        if (Utils.checkCredientials(username, password)) {
            Utils.setIsLoggedIn(true);
            // Utils.redirectUrl();
            window.location.href = "/html&css/resume.html";
            this.main();
        } else {
            alert("INVALID CREDIENTIAL. Check your username and password.")
        }



    }

    nextClickEventHandler() {

    }

    previousEventHandler() {

    }

    searchEventHandler() {

    }
}

export { WebApp };