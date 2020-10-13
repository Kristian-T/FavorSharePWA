var requests =[
    {"title":"Corona Shopping", "description":"Lorem ipsum"},
    {"title":"Lift to center", "description":"Lorem ipsum"},
    {"title":"Need printer access", "description":"Lorem ipsum"}
];

let grid = document.getElementById("grid");

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/FavorSharePWA/public/sw.js')
        .then(function() { console.log('Service Worker Registered'); });
}


for(let req of requests) {
    const rli = document.createElement("li");
    const rdiv = document.createElement("div");
    const rtitle = document.createElement("p");
    const rdescription = document.createElement("p");

    rtitle.innerHTML = req.title;
    rdescription.innerHTML = req.description;

    grid.appendChild(rli);
    rli.appendChild(rdiv);
    rdiv.appendChild(rtitle);
    rdiv.appendChild(rdescription);
}


