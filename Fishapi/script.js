data = [];
document.getElementById('img').innerHTML=`<img src="https://origin-east-01-drupal-fishwatch.woc.noaa.gov/sites/default/files/2_7.jpg" class="img-fluid rounded-start" alt="CrimJobfish">`
let fish = async () => {
    let response = await fetch('https://www.fishwatch.gov/api/species')

    data = await response.json();
    console.log(data)




    var selc = document.getElementById('selc')
    var dynaSelc = ''

    data.forEach((val) => {

        dynaSelc += `<option value="${val['Species Name']}" >${val['Species Name']}</option>`



})
    selc.innerHTML = dynaSelc
    

}



async function foo() {

    var fishName = document.getElementById('selc').value
  

    fishDet = data.filter(ele => ele['Species Name'] === fishName)
    var fishImg = document.getElementById('img')

    try {
        fishImg.innerHTML = `<img src="${fishDet[0]['Image Gallery'][0].src}" class="img-fluid rounded-start" alt="${fishDet[0]['Species Name']}">`
    }
    catch (error) {
        fishImg.innerText = "No IMG"
    }

    document.getElementById('fishName').innerText = fishName
document.getElementById('sciName').innerHTML=`<p class="card-text"><h6>Scientific Name: ${fishDet[0]['Scientific Name']}</h6> </p>`
document.getElementById('biology').innerHTML=`<h6>Biology</h6>${fishDet[0]['Biology']}`

document.getElementById('avai').innerHTML=`<h6><u>Availability</u></h6> <small>${fishDet[0]['Availability']}</small>`

}

async function modal1(){
   document.getElementById('helBen').innerHTML=`${fishDet[0]['Health Benefits']}<p>For serving ${fishDet[0]['Serving Weight']}<ul><li>Protein: Protein: ${fishDet[0].Protein}</li>
   <li>Calories: ${fishDet[0].Calories}</li><li>Carbohydrates: ${fishDet[0].Carbohydrate}</li><li>Cholestrol: ${fishDet[0].Cholesterol}</li><li>Selenium: ${fishDet[0].Selenium}</li><li>Sodium: ${fishDet[0].Sodium}</li></ul></p>`
    

}

async function modal2(){
  document.getElementById('helBen2').innerHTML=`<p>Population: ${fishDet[0].Population}</p>${fishDet[0]['Population Status']}`
}

document.addEventListener('DOMContentLoaded', fish)



//https://github.com/RUPANCHAKRAVARTHY/CAT-API






