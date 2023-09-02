import React from 'react'

export default function Fifthpart() {
  return (
    <div>
      <div className="container-fluid my-5">
  <div className="row">
    {/* First image spanning 6 columns */}
    <div className="col-md-6 mb-4">
      <img width="100%" src="https://www.dmoose.com/cdn/shop/articles/feature-image_f62f4acb-ad3f-4865-89d1-2c71496fe638.jpg?v=1681553933" alt="Image 1" className="img-fluid" />
    </div>
    
    {/* Four images in the next 6 columns */}
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img width="100%" src="https://www.oldschoollabs.com/wp-content/uploads/2020/06/Bicep-Curl.jpg" alt="Image 2" className="img-fluid" />
        </div>
        <div className="col-md-6 mb-4">
          <img width="100%" src="data:image/jpeg;base64,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" alt="Image 3" className="img-fluid" />
        </div>
        <div className="col-md-6 mb-4">
          <img width="100%" src="https://lh5.googleusercontent.com/fyMgr_WJ_OmTVbNq9zdmLDEuBwpoYjKsTll-IrAxVyyFfIUr0rZ5ycYOKDbmSI2PgVYE-W63sFKVvtIbbkrtFYI3hX-aOp5ljn_AclmvcDwnrSGUl8Vw9gSVeK6hh1Beg63kG0leo-RmaoHAuBGBRaJjqIvGs8cinPAgzS-YGWdaaX9FhjdS2HLnnQjlYxhyadmnpQ" alt="Image 4" className="img-fluid" />
        </div>
        <div width="100%" className="col-md-6 mb-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKNv4HYm9ZKPdCVDmLZXwelIchoBr5djmp1Yq_KngMT7B3y7M0d8aKqB2h-VMTjai6L4&usqp=CAU" alt="Image 5" className="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</div>


<div className="container-fluid py-5">
<p className='text-danger text-center'>______ OUR TEAM MEMBERS</p>
<h1 className='clrchange2 my-5 text-center'><b>OUR MOST EXPERIENCED <br />TRAINERS</b></h1>
<div className="container">
  <div className="row">
    <div className="col-md-4 mb-4">
      <div className=" text-center p-4">
      <img width="100%" src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team1.png" class="img-thumbnail" alt="..."></img>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className=" text-center p-4">
      <img width="100%" src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team2.png" class="img-thumbnail" alt="..."/>
      </div>
    </div>
    <div className="col-md-4 mb-4">
      <div className=" text-center p-4">
      <img width="100%" src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/team3.png" class="img-thumbnail" alt="..."/>
      </div>
    </div>
  </div>
</div>
</div>
<div className="baradiv">
    <div className="row">
<div className="col-md-6">
    <h1 className='text-white m-5 '><b>April Membership Offer <br />Available Now</b></h1>
</div>
<div className="col-md-6 d-flex align-items-end justify-content-end py-3 px-5">
      <button class="btn btn-danger d-flex align-items-end justify-content-end my-5">MORE SERVICES</button>
      </div>
</div>
    </div>
</div>
   
  )
}