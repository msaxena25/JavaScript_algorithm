console.log('overlapping intervals');
// Input:  {1, 5}, {2, 3}, {4, 6}, {7, 8}, {8, 10}, {12, 15}
// Output  {1, 6}, {7, 10}, {12, 15}

// output > [1,4], [6,8], [9,10]

function mergedOverlapped(input) {
    input.sort((item1, item2) => item1[0] < item2[0] ? -1 : 1);
    const out = [];
    for (let i = 0; i < input.length; i++) {
        if (!out.length) {
            out.push(input[0])
        } else {
            const current = input[i];
            const mergedLastItem = out[out.length - 1];
            if (mergedLastItem[0] <= current[1] && mergedLastItem[1] >= current[0]) { // operlapping
                if (mergedLastItem[0] > current[0]) {
                    mergedLastItem[0] = current[0]; // take min value
                }
                if (mergedLastItem[1] < current[1]) {
                    mergedLastItem[1] = current[1]; // take max value
                }
            } else {
                out.push(input[i])
            }
        }
    }
    console.log(out)
}


function mergedOverlappedTwo(input) {
    input.sort((item1, item2) => item1[0] < item2[0] ? -1 : 1);
    const out = [];
    for (let i = 0; i < input.length; i++) {
        if (!out.length) {
            out.push(input[0])
        } else {
            const current = input[i];
            const mergedLastItem = out[out.length - 1];
            if (mergedLastItem[0] <= current[1] && mergedLastItem[1] >= current[0]) { // operlapping
                const temp = mergedLastItem.concat(current);
                out.pop()
                out.push([Math.min(...temp), Math.max(...temp)]);
            } else {
                out.push(input[i])
            }
        }
    }
    console.log(out)
}

const input = [[1, 3], [2, 4], [6, 8], [9, 10]];
//mergedOverlapped(input)

mergedOverlappedTwo([[1, 5], [2, 3], [4, 6], [7, 8], [8, 10], [12, 15]])

mergedOverlappedTwo([[1, 4], [0, 3]])

mergedOverlappedTwo([[1,4],[0, 0]])

mergedOverlappedTwo([[2,3],[4,5],[6,7],[8,9],[1,10]]) //[[1,10]]
