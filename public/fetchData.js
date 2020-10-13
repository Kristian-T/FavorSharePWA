/*var container = document.getElementById('grid');

async function loadData(url) {
    const res = await fetch(url);
    return await res.json();
}

loadData('../data/dummydata.json')
    .then(data => {
        console.log(data[0].name);
    })
*/


async function fillList() {
    fetch('./data/dummydata.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
}

fillList();