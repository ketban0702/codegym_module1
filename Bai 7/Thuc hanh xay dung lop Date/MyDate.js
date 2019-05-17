//Khai bao lop MyDate
let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    // Xay dung cac phuong thuc getDay() tra ve ngay
    this.getDay = function () {
        return this.day;
    }
    // Xay dung phuong thuc getMonth() tra ve thang
    this.getMonth = function () {
        return this.month;
    }
    // Xay dung phuong thuc getYear() tra ve nam
    this.getYear = function () {
        return this.year;
    }
    // Thiet dat lai gia tri ngay, thang, nam
    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }
};