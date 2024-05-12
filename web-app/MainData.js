class MainData {
  /**
   *  Properties :
   *   1. MainData
   *   2. currentIndex
   *   3. lenghtOfResumeList
   *
   *  Methods :
   *      getCurrentResume();
   *      isFirstResume();
   *      isLastResume();
   *      changeNextResume();
   *      changePreviousResume();
   *      searchResume();
   *
   */

  constructor(data) {
    this.mainData = data;
    this.currentIndex = 0;
    this.lenghtOfResumeList = this.mainData.length;
  }

  getCurrentResume() {
    return this.mainData[this.currentIndex];
  }

  isEmpty() {
    if (this.mainData.length == 0) {
      return true;
    } else false;
  }

  isFirstResume() {
    return this.currentIndex == 0 ? true : false;
  }

  isLastResume() {
    return this.currentIndex == this.lenghtOfResumeList - 1;
  }

  changeNextResume() {
    this.currentIndex++;
  }

  changePreviousResume() {
    this.currentIndex--;
  }

  searchResume(str) {
    return this.mainData.filter((resume) => {
      return resume.basics.AppliedFor.toLowerCase().includes(str.toLowerCase());
    });
  }
}

export { MainData };
