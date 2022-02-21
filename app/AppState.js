import { Car } from "./Models/Car.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { House } from "./Models/HouseModel.js"

const testCar = new Car(
  {
    make: 'GMC',
    model: 'Sierra',
    year: 2018,
    price: 5600,
    description: 'its cool.',
    color: '#FFFFFF',
    imgUrl: 'https://thiscatdoesnotexist.com'
  })

const testhouse = new House(

  {
    title: 'big house',
    bedrooms: 4,
    bathrooms: 2,
    imgUrl: 'https://cdn.vox-cdn.com/thumbor/frFQQhOsxl8DctGjkR8OLHpdKMs=/0x0:3686x2073/1200x800/filters:focal(1549x743:2137x1331)/cdn.vox-cdn.com/uploads/chorus_image/image/68976842/House_Tour_Liverman_3D6A3138_tour.0.jpg',
    description: 'The bear in the big blue house',
    price: 470
  }
)
class AppState extends EventEmitter {

  // NOTE just adds intellisense to our cars array that lets our code know its an array of cars, not other things 
  /** @type {import('./Models/Car').Car[]} */
  cars = []
  Houses = [testhouse]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
