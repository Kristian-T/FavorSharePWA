var container = document.getElementById('grid');
/*
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
            for (favor in data) {
                var li = document.createElement('li');
                var name = document.createElement('p');
                var des = document.createElement('p');

                name.textContent = favor.Name;
                des.textContent = favor.Description;

                li.appendChild(name);
                li.appendChild(des);

                container.appendChild(li);
            }
        })
}

fillList();