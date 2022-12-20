var cl = console.log;

 
var imgContainer = document.getElementById("imgContainer");
var result = "";
countries.forEach(function(str){
    result += `<div class="col-lg-3 col-md-6 col-xs-12">
    <div class="card">
        <figure class="dCard">
            <img src="${str.flag}" alt="Flag Here">
            <figcaption>
                <div class="cName">
                    <h2>${str.name.toLocaleUpperCase()}</h2>
                </div>
                <div class="cData">
                    <ul>
                        <li><strong>Capital:</strong>${str.capital}</li>
                        <li><strong>Language:</strong>${str.languages}</li>
                        <li><strong>Population:</strong>${str.population}</li>
                    </ul>
                </div>
            </figcaption>
        </figure>
    </div>
</div>`
})

imgContainer.innerHTML = result;
