// import fetch from "node-fetch";
// import fs from "fs/promises";

class Utils {
  static async readDataFile() {
    try {
      let response = await fetch("Data.json");
      if (!response.ok) {
        alert("Data is not read correctly.");
        throw new Error("Error Data.");
      } else {
        response = await response.json();
        return response;
      }
    } catch (error) {
      console.log("Error In reading the data", error);
      throw error;
    }
  }

  //
  static loadCredientialsToLocalStorage() {
    let list = [];
    let user1 = { username: "raone", password: "1111" };
    let user2 = {
      username: "singh",
      password: "1111",
    };
    let user3 = {
      username: "ajay",
      password: "1111",
    };
    list.push(user1, user2, user3);
    list = JSON.stringify(list);
    localStorage.setItem("credientialsList", list);
  }

  static getCredientialsListFromLocalStorage() {
    let data = localStorage.getItem("credientialsList");
    return JSON.parse(data);
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
    }
    return false;
  }
}

export { Utils };
