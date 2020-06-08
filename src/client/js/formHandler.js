function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let name = document.getElementById('name').value
    let formText = document.getElementById('url').value

    Client.checkForUrl(formText)

    console.log("::: Form Submitted :::")

    // fetch('http://localhost:8080/test')
    //     .then(res => res.json())
    //     .then(function (res) {
    //         document.getElementById('results').innerHTML = res.message
    //     })
    let reqBody = {
        theText: formText
    };

    fetch('/api', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: { "Content-Type": "application/json" }
    })
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.polarity
            console.log(res);
            alert(res);
        })
}


export { handleSubmit }
