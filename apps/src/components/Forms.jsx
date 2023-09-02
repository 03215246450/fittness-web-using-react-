import React from 'react'

export default function Forms() {
  return (
    <div>
     <div class="container-fluid my-5">
  <div class="row">

    <div class="col-md-6">
      <img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/contact_form.png" alt="Image" class="img-fluid" />
    </div>

    <div class="col-md-6">
      <form>
   
        <div class="mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input type="tel" class="form-control" id="phone" placeholder="Phone Number"/>
        </div>

      
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Name"/>
        </div>

       
        <div class="mb-3">
          <label for="select" class="form-label">Select</label>
          <select class="form-select" id="select">
            <option value="option1">Saiful Islam</option>
            <option value="option2">Arafath Miya</option>
            <option value="option3">Shakil Miya</option>
            <option value="option3">Tamim Shaker</option>
          </select>
        </div>


        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Email"/>
        </div>

        <div class="mb-3">
          <label for="output" class="form-label">Message</label>
          <input type="text" class="form-control" id="output" readonly/>
        </div>

        <button type="submit" class="btn btn-danger">SEND MESSAGE</button>
      </form>
    </div>
  </div>
</div>


<div className="container  ">
<p className='text-danger text-center my-5'>_______ RECENT NEWS FROM BLOG</p>
        <h1 className='clrchange2 text-center py-3'><b>GYM TIPS NEWS FOR YOU THAT <br /> SELECTED BY US</b></h1>
        <div className="row">
            <div className="col-md-6">
            <img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/blog1.png" class="img-thumbnail" alt="..."/>
            <p className='my-4'>_______  creative director</p>
            <h4>Footprints in time is perfect House in Kurashiki</h4>
            </div>
            <div className="col-md-6">
            <img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/gallery/blog2.png" class="img-thumbnail" alt="..."/>
            <p className='my-4'>_______  creative director</p>
            <h4>Footprints in time is perfect House in Kurashiki</h4>

            </div>
        </div>
</div>

    </div>
  )
}
