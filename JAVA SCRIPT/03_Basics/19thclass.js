// Immediately invoked function expressions (IIFE)

(function chai() {
    console.log("chai pi lo");
})();
// chai()

(function chai() {
    // named iife
    console.log("chai pi lo");
})();

((name) => {
    console.log(`chai pi lo ${name}`);
})("Rajat")

