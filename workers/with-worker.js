console.log('******With worker, Running a Long process in worker thread*****');



const printTableOfTwo = () => {
    console.log('Printing table of 2 ->')
    for (let i = 1; i <= 10; i++) {
        console.log(`2 * ${i} = ${2*i}` );
    }
}

if (window.Worker) {

    console.log('Worker exists', window.Worker);

    // create new worker by using Worker constructor
    const worker = new Worker('workers/my-worker.js');
    worker.postMessage({
        value: 1999999999
    })
    worker.onmessage = (event) => {
        console.log('received output from worker file :', event.data);
    }
    worker.onerror = (event) => {
        console.log('event :', event);
    }
    printTableOfTwo();

    // worker.terminate();
}


