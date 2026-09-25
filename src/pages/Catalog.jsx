import Product from "../components/Product";
import { useEffect , useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
const [products, setProducts] = useState([]);
// let products = [];
const [categories, setCategories] = useState([]);
const [productsToDisplay, setProductsToDisplay] = useState([]);

function loadPage()
{
useEffect(() =>{
    //Load your data here 
    let service = new DataService();
    let data = service.getProduct();
    setProducts(data);
    setProductsToDisplay(data);//Initially, display all data
    let categoriesService = ["fruit", "merch" , "candy"];
    setCategories(categoriesService);
  },[]); // means this only runs ONCE
}
  loadPage();

  function clearFilter(){
    setProductsToDisplay(products);
  }

  function filter(category){
    let list = []; //to hold the elements that match with the filter
    //find the products that match with the filter
    for(let i=0; i<products.length;i++){
      let prod = products[i];
      if (prod.category === category)
      {
        list.push(prod);
      }
    }
    setProductsToDisplay(list);
  }

  return (
    <div>
      <h1>Check our new products</h1>
      <button onClick={clearFilter}>All</button>
     {categories.map( cat => <button key={cat} onClick={() => filter(cat)}>{cat}</button>)}
     {productsToDisplay.map(prod => <Product key={prod._id} data={prod} />)}

    </div>
  )
}

export default Catalog;