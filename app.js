const cities = ['New York', 'Rome', "Moscow", "Tokyo", "Paris", "London", "Berlin", "Madrid", "Beijing", "Istanbul"];
// Log the result after each task:

const count = cities.push('Mexico City')
console.log(count);
console.log(cities)
// 1. Add an element to the end of the array...

cities.unshift('Mexico City')
console.log(cities)
// 2. Add an element to the beginning of the array...

cities.pop()
console.log(cities)
// 3. Remove an element from the end of the array...

cities.shift()
console.log(cities)
// 4. Remove an element from the beginning of the array...

const index = cities.indexOf('Rome')
if (index !== -1) {
    cities.splice(index,1)
}
console.log(cities)
// 5. Remove the element at index 2...

const result = cities.filter(function(cities) {
    return cities !== 'Paris'
})
console.log(result)
// 6. Remove the element 'Paris'...