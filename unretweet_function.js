var unretweet = function () {
    console.log('Unretweets started');
    window.scrollBy(0, 10000);

    var interactionFields = []
    document.querySelectorAll('[data-testid="cellInnerDiv"]').forEach(function (t) {
        mainDiv = t.querySelectorAll('article > div > div > [class="css-1dbjc4n r-18u37iz"] > [class="css-1dbjc4n r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu"] > [class="css-1dbjc4n"]')[1]
        if(mainDiv !== undefined) {
            interactionFields.push(mainDiv)
        }
        else {
            document.body.click();
        }
    })

    interactionFields.forEach(function (b) {
        b.querySelector('[data-testid="unretweet"]').click();
        document.querySelector('[data-testid="unretweetConfirm"]').click();
    })
    setTimeout(unretweet, 4000)
}
unretweet();