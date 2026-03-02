var Printer = /** @class */ (function () {
    function Printer() {
    }
    Printer.prototype.print = function () {
        console.log("Printing...");
    };
    Printer.prototype.scan = function () {
        console.log("Scanning...");
    };
    Printer.prototype.copy = function () {
        console.log("Copying...");
    };
    return Printer;
}());
var printer = new Printer();
printer.print();
printer.scan();
printer.copy();
