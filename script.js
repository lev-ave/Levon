// 1.
// function fetchUser(users, id) {
//     let user = users.find(user => user.id === id)
//     if(user){
//         return Promise.resolve(user)
//     } else return Promise.reject("not found")
// }
// const users = [
//     {id: 1, name: "Ann", role: "admin"},
//     {id: 2, name: "John", role: "user"},
// ]
// fetchUser(users, 2)
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })


// 2.
// function fetchProduct(products, id){
//     let product = products.find(product => product.id === id)
//     if(product){
//         return Promise.resolve(product)
//     } else return Promise.reject("not found")
// }
// const products = [
//     {id: 10, name: "Laptop", price: 1000},
//     {id: 11, name: "Phone", price: 600},
// ]
// fetchProduct(products, 11)
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })


// 3.
// function fetchBook(books, id){
//     let book = books.find(book => book.id === id)
//     if(book){
//         return Promise.resolve(book)
//     } else return Promise.reject("not found")
// }
// const books = [
//     {id: 101, title: "Harry Potter", author: "Rowling"},
//     {id: 102, title: "1984", author: "Orwell"},
// ]
// fetchBook(books, 102)
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })


// 4.
// function createOrder(orders, userId, items){
//     if(items.length !== 0){
//         let order = {userId, items:[...items]}
//         orders.push(order)
//         return Promise.resolve(order)
//     } else return Promise.reject("out of stock")
// }
// const ordersList = []
// createOrder(ordersList, 2, [{name:"Laptop", price:1000}])
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })


// 5.
// function updateUserRole(users, userId, role){
//     const validRoles = ["user", "manager", "admin"]
//     const user = users.find(user => user.id === userId)
//     if(!user){
//         return Promise.reject("not found")
//     }
//     if (!validRoles.includes(role)){
//         return Promise.reject("not valid role")
//     }
//     user.role = role
//     return Promise.resolve(user)
// }
// const usersList = [
//     {id:1, name: "Anna", role: "admin"},
//     {id: 2, name: "John", role: "user"},
// ]
// updateUserRole(usersList, 2, "admin")
// .then((data) => {
//     console.log("Updated", data)
// })
// .catch((err) => {
//     console.log(err)
// })


// 6.
// function blockUser(users, userId){
//     let user = users.find(user => user.id === userId)
//     if(!user){
//         return Promise.reject("not found")
//     }
//     if(user.blocked === true){
//         return Promise.reject("user's blocked")
//     }
//     user.blocked = true
//     return Promise.resolve(user)
// }
// const usersList = [
//     {id: 1, name: "Anna", role: "admin"},
//     {id: 2, name: "Bob", role: "user"},
// ]
// blockUser(usersList, 2)
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })