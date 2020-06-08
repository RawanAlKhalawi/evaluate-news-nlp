function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);
    var regex = RegExp('^(http|https):\/\/');
    if (regex.test(inputText) == false) {
        alert("error!")
        return false;
    } else {
        alert("good!")
        return true;

    }
}

export { checkForUrl }
