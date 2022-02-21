import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/houseService.js"

function _draw() {
    let template = ''
    ProxyState.Houses.forEach(h => template += h.Template)
    document.getElementById('houselistings').innerHTML = template
    console.log(' drawtemplate')

}
export class HouseController {
    constructor() {

    }
    viewhouses() {
        _draw()
        console.log('viewhouses');

    }
    createhouse(event) {

        event.preventDefault()
        let form = event.target
        console.log('create car is working', form);
        let newHouse = {

            title: form.title.value,
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            imgUrl: form.imgUrl.value,
            description: form.description.value,
            price: form.price.value,
        }
        console.log('newhouse', newHouse); houseService.createhouse(newHouse)
        let modal = document.getElementById('house-listing')
        form.reset()
        bootstrap.Modal.getOrCreateInstance(modal).hide()
    }
}
