export default function getData() {

    return fetch('http://localhost:3000/get/products')
    .then((data) => data.json())
}

