import React from "react"

function Qrcode() {
    return  (
        <div className="page">
        <div className="place">
        <div><img className="qr" src={("../image-qr-code.png")} alt="QR"/></div>
        <p className="p1">Improve your front-end skills by building projects</p>
        <p className="p2">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>

</div> 
</div>
    );
}

export default Qrcode