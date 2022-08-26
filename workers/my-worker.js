const runLoop =  (endValue) => {
    for (var i = 0; i <= endValue; i += 1) {
        var j = i;
    }
    postMessage(j) // you can paas any type of data here
}

this.onmessage = (event) => {
    // console.log('Get input from JS file :', event.data);
    runLoop(event.data.value);
}