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
        this.mainData = data.resume;
        this.currentIndex = 1;
        this.lenghtOfResumeList = this.mainData.length;
    }

    getCurrentResume() {
        return this.mainData[this.currentIndex];
    }

    isFirstResume() {
        return this.currentIndex == 1 ? true : false;
    }

    isLastResume() {
        return this.currentIndex == this.lenghtOfResumeList;
    }

    changeNextResume() {
        if (this.isLastResume()) {
            this.currentIndex++;
        }
    }

    changePreviousResume() {
        if (this.isFirstResume()) {
            this.currentIndex--;
        }
    }

    searchResume(str) {
        for (let i = 0; i < this.lenghtOfResumeList; i++) {
            if (this.mainData[i].appliedFor.includes(str)) {
                return this.mainData[i];
            }
        }
        return false;
    }





}

export { MainData };