class Resume {
  constructor(resume) {
    this.resume = resume;
  }

  /**
   *
   * @returns the array of technical skills;
   */
  getTechnicalSkills() {
    return this.resume.skills.keywords;
  }

  /**
     * 
     * @returns a project with example: 
     * {
                "name": "Efficiency Design of Solar Panels",
                "description": "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy."
            }
     */
  getProjects() {
    return this.resume.projects;
  }

  /**
   *
   * @returns the education object;
   */
  getEducation() {
    return this.resume.education;
  }

  /**
   *
   * @returns the internship object;
   */
  getInternship() {
    return this.resume.Internship;
  }

  /**
   *
   * @returns the work object;
   */
  getWork() {
    return this.resume.work;
  }

  /**
   *
   * @returns the array of strings of achievements
   */
  getAchievements() {
    return this.resume.achievements.Summary;
  }

  /**
   *
   * @returns the array of strings of hobbies
   */
  getHobbies() {
    return this.resume.interests.hobbies;
  }

  /**
   *
   * @returns the header object
   */
  getHeaderDetails() {
    let basics = this.resume.basics;
    let header = {};
    header.name = basics.name;
    header.appliedFor = basics.AppliedFor;
    header.imgUrl = basics.image;
    return header;
  }

  /**
   *
   * @returns the header object
   */
  getPersonalInfo() {
    let basics = this.resume.basics;
    let info = {};
    info.phone = basics.phone;
    info.email = basics.email;
    info.network = basics.profiles.network;
    info.networkUrl = basics.profiles.url;
    return info;
  }

  getTextNode(text) {
    return document.createTextNode(text);
  }

  getNode(text, nodeType = "p") {
    let textNode = document.createTextNode(text);
    let p = document.createElement(nodeType);
    p.appendChild(textNode);
    return p;
  }

  removeEveryChild(parentElement) {
    // Remove all child nodes of the parent element
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }

  displayResume() {
    //  showing the header
    const header = this.getHeaderDetails();
    const nameSectionElement = document.querySelector(".name_section");
    this.removeEveryChild(nameSectionElement);
    nameSectionElement.appendChild(this.getNode(header.name, "h1"));
    let p = this.getNode("");
    p.appendChild(this.getNode("Applied For : ", "strong"));
    p.appendChild(this.getTextNode(header.appliedFor));
    nameSectionElement.appendChild(p);
    const imgSectionElement = document.querySelector(".img_section");
    if (header.imgUrl == "") {
      imgSectionElement.innerHTML = `<img src="../images/user.png" alt="user image"/>`;
    } else {
      imgSectionElement.innerHTML = `<img src=${header.imgUrl} alt="user image"/>`;
    }

    // showing the left_panel;
    const personalInfo = this.getPersonalInfo();
    const personalInfoElement = document.querySelector(".personal_info");
    this.removeEveryChild(personalInfoElement);
    let a = this.getNode(personalInfo.network, "a");
    a.setAttribute("href", personalInfo.networkUrl);
    personalInfoElement.append(
      this.getNode(personalInfo.phone),
      this.getNode(personalInfo.email),
      a
    );

    const technicalSkills = this.getTechnicalSkills();
    const technicalSkillsElement = document.querySelector(".technical_skills");
    this.removeEveryChild(technicalSkillsElement);
    technicalSkills.forEach((skill) => {
      technicalSkillsElement.appendChild(this.getNode(skill));
    });

    const hobbies = this.getHobbies();
    const hobbiesElement = document.querySelector(".hobbies");
    this.removeEveryChild(hobbiesElement);
    hobbies.forEach((hobby) => {
      hobbiesElement.appendChild(this.getNode(hobby));
    });

    // Show  the main panel
    // 1. Wrok Experience
    const workExpersience = this.getWork();
    const workElement = document.querySelector(".work");
    this.removeEveryChild(workElement);

    for (const key in workExpersience) {
      if (Object.hasOwnProperty.call(workExpersience, key)) {
        workElement
          .appendChild(document.createElement("p"))
          .append(
            this.getNode(key + " : ", "strong"),
            this.getTextNode(workExpersience[key])
          );
      }
    }

    // 2 . Project
    const projects = this.getProjects();
    const projectElement = document.querySelector(".project");
    this.removeEveryChild(projectElement);

    projectElement
      .appendChild(document.createElement("p"))
      .append(
        this.getNode(projects.name + " : ", "strong"),
        this.getTextNode(projects.description)
      );

    //  3. education
    const education = this.getEducation();
    const educationElement = document.querySelector(".education");
    this.removeEveryChild(educationElement);

    for (const key in education) {
      if (Object.hasOwnProperty.call(education, key)) {
        let p = this.getNode("");
        p.appendChild(this.getNode(key + " : ", "strong"));

        let keyCount = 0;
        for (const k in education[key]) {
          if (Object.hasOwnProperty.call(education[key], k)) {
            keyCount++;
            let text = education[key][k];
            if (keyCount != Object.keys(education[key]).length) {
              text += ", ";
            }
            p.appendChild(this.getTextNode(text));
          }
        }

        educationElement.appendChild(p);
      }
    }

    // 4. Internship
    const internship = this.getInternship();
    const internshipElement = document.querySelector(".internship");
    this.removeEveryChild(internshipElement);
    for (const key in internship) {
      if (Object.hasOwnProperty.call(internship, key)) {
        let p = this.getNode("");
        p.appendChild(this.getNode(key + " : ", "strong"));
        p.appendChild(this.getTextNode(internship[key]));
        internshipElement.appendChild(p);
      }
    }

    // 5. Achievements
    const achievements = this.getAchievements();
    const achievementsElement = document.querySelector(".achievement");
    this.removeEveryChild(achievementsElement);

    const ul = this.getNode("", "ul");
    achievements.forEach((element) => {
      ul.appendChild(this.getNode(element, "li"));
    });
    achievementsElement.appendChild(ul);
  }
}

export { Resume };
