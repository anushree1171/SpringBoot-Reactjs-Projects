import { useState, useEffect} from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import "./App.css"
import Card from './components/Card';


function App({cartState, cartDispatch, wishlistDispatch, receiveSingleProduct}) {
  
  const [cart_size, setCartSize] = useState(cartState.cartSize);
  useEffect(()=>{
    setCartSize(cartState.cartSize);
    console.log(cart_size);
  }, [cartState.cartSize]);

  const [prods, setProds] = useState([]); // State for all products list

  useEffect(() => {
      setProds(cartState.products);
  }, [cartState]); 

  //searching and filtering

  const [selectedCategory, setSelectedCategory] = useState(null); //from buttons or radio input
  const[query, setQuery]=useState(""); //from search bar


  //input filter - search

  const handleInputChange = (event) =>{
    setQuery(event.target.value)
  }

  const filteredItems = prods.filter(product =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== 
      -1
  );

  //Radio filter

  const handleRadioChange = event => setSelectedCategory(event.target.value);

  //Buttons filter

  const handleButtonsChange = event => setSelectedCategory(event.target.value);

  

  //main function where we do all the filtering for radio and buttons
  function filteredData (products, selected, query) {
    let filteredProducts = products;

    //from search bar
    if(query){
      filteredProducts = filteredItems;
    }

    //from radio buttons
    if(selected){
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) =>
      category === selected || color === selected || 
      company === selected || title === selected || newPrice === selected
      );
    }


    return filteredProducts.map(({product_id, img, title, stars, reviews, prevPrice, newPrice, company, color, category, available_quantity,cart_quantity })=>{
      return <Card key={product_id}
      product_id={product_id}
      img={img}
      title={title}
      stars={stars}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
      company={company}
      category={category}
      color={color}
      available_quantity={available_quantity}
      cart_quantity={cart_quantity}

      cartDispatch={cartDispatch}
      wishlistDispatch={wishlistDispatch}

      receiveSingleProduct={receiveSingleProduct}
      
      />
    });
  }

  const result = filteredData(prods, selectedCategory, query);

  return(
    <>
      <div className="Navigation">
        <Nav cart_size={cart_size} query={query} handleInputChange={handleInputChange} />
      </div>
      <div className="body">
        <div className="sidebar">
          <Sidebar handleRadioChange={handleRadioChange} />
        </div>
        <div className="prods">
          <Recommended handleButtonsChange={handleButtonsChange} />
          <Products result={result} />
        </div>
      </div>
    </>
    
  );
}

export  default App;
