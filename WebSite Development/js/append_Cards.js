var mycards = [
            {
                "Image" :"C:\Users\Jinal\OneDrive\Desktop\FSD\WebSite Development\images\aarthi.jpg" ,
                "Name" : "Aarthi",
                "DOB" : "16-Nov-2005"
            },
            {
                "Image" :"C:\Users\Jinal\OneDrive\Desktop\FSD\WebSite Development\images\anu.jpg" ,
                "Name" : "Anu",
                "DOB" : "24-Mar-2005"
            },
            {
                "Image" :"C:\Users\Jinal\OneDrive\Desktop\FSD\WebSite Development\images\k.kavya.jpg" ,
                "Name" : "Chinna Kavya",
                "DOB" : "03-Jan-2006"
            },
            {
                "Image" :"C:\Users\Jinal\OneDrive\Desktop\FSD\WebSite Development\images\yoga.jpg" ,
                "Name" : "Yoga",
                "DOB" : "15-Dec-2006"
            },
            {
                "Image" :"C:\Users\Jinal\OneDrive\Desktop\FSD\WebSite Development\images\bhavya.jpg" ,
                "Name" : "Bhavya",
                "DOB" : "02-July-2006"
            },
            {
                "Image" :"C:\Users\Jinal\OneDrive\Desktop\FSD\WebSite Development\images\kamali.jpg" ,
                "Name" : "Kamali",
                "DOB" : "03-Apr-2006"
            },
]
 mycards.map(ele=>{
    var c =
         `<div class="card">
            <div class="image-section">
                <img src=${ele.Image} />
            </div>
            <div class="info-section">
                <div class="name">Name:${ele.Name}</div>
                <div class="dob">DOB : ${ele.DOB} </div>
            </div>
        </div>`
    
    console.log(c)

})


