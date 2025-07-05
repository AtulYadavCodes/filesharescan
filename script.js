
function qrgen(qrtext)
{
    let response=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrtext}`;
    const qrcode=document.getElementById("qr");
    qrcode.innerHTML = ""; // Clear previous QR code
    const img=document.createElement("img");
    img.src=response;

    qrcode.appendChild(img);


}


let CLOUD_NAME="djom3fmqx";
let upload_preset="qrgene";
async function fileqr(File)
{
    try{
        let formdata=new FormData();
        formdata.append("file",File);
        formdata.append("upload_preset",upload_preset);
        console.log(formdata.get("upload_preset"));
        let url=`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
        let response=await fetch(url,{
            method:"POST",
            body:formdata
         
        });
        if(!response.ok)
        {
            throw new Error(`network error : ${response.status}`);
        }
        const data=await response.json();
        let qrtext=data.secure_url.replace("/upload/", "/upload/fl_attachment/");
        let qrurl=encodeURIComponent(qrtext);
        qrgen(qrurl);

    }
    catch(error)
    {
        alert("an error occured"+error);
    }
}
document.getElementById("qrForm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const file=document.getElementById("qrText").files[0];
    if(file.size>2*Math.pow(1024,3)){
        alert("File size must be between 0 and 2 g");
    }
    else
    {
        fileqr(file);
    }
})