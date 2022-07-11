async function getmobiles() {
    let url = 'asflipdata.json';
    try {
        let res = await fetch(url);
        return await res.json();

    } catch (error) {
        console.log(error);
    }
}
async function applemobiles() {
    let mobiles = await getmobiles();
    let html = '';
    mobiles.forEach(mobile => {
        let htmlSegment = `<div class = "user">
                               <img src = ./${mobile.product_picture} width="150px" />
                               <div class="name">Name -- ${mobile.mobilename}</div>
                               <div class="model">Model -- ${mobile.model}</div>
                               <div class ="brand>Brand --${mobile.brand}</div>
                               <div class = "price">Price --  ${mobile.price}</div>
                               <div class = "camera">Camera --  ${mobile.camera}</div>
                               <div class = "processor">Processor -- ${mobile.processor}</div>
                               <div class = "desc"><a href=Click here to buy:${mobile.description}>${mobile.description}</a></div>
                               <div class = "buy"><a href=buy:${mobile.Buynow}>${mobile.Buynow}</a></div>                              
                               </div>`;
        html += htmlSegment;
    });
    let container = document.querySelector('.container');
    container.innerHTML = html;
}
applemobiles()
