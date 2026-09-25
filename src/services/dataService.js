const catalog = [
    {
        "title":"Orange",
        "category":"fruit",
        "price": 12.99,
        "image":"oranges.png",
        "_id":"1"
    },
    {
        "title":"coffee",
        "category":"merch",
        "price": 12.99,
        "image":"coffe.png",
        "_id":"2"
    },
    {
        "title":"Chocolatte",
        "category":"candy",
        "price": 12.99,
        "image":"choco.png",
        "_id":"3"
    },
     {
        "title":"Orange",
        "category":"fruit",
        "price": 12.99,
        "image":"placeholder",
        "_id":"4"
    },
];

class DataService {
    getProduct(){
        return catalog;
    }
}

export default DataService;