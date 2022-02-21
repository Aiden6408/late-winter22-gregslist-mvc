import { generateId } from "../Utils/generateId.js"


export class House {
    constructor({ title, bedrooms, bathrooms, imgUrl, description, price }) {
        this.id = generateId()
        this.title = title
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.imgUrl = imgUrl
        this.description = description
        this.price = price





    }
    get Template() {
        return `   
        <div class="card p-0 rounded shadow" style="width: 18rem;">
        <img src="${this.imgUrl}" class="card-img-fluid rounded" alt="...">
        <div class="card-body ">
          <h5 class="card-title text-center ">${this.title}</h5>
          <div class=" d-flex justify-content-around">
            <h6>Bdrm's:${this.bedrooms}</h6>
            <h6>Bth's:${this.bedrooms}</h6>
            <h6>price: ${this.price}</h6>
          </div>
          <p class="card-text">${this.description}</p>
          <a href="#" class="btn btn-danger">Delete</a>
        </div>
    `
    }
}