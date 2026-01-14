
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

await fetchData();


async function fetchData2() {

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
// const response = await fetchData();
// const data = await response.json();

await fetchData2();