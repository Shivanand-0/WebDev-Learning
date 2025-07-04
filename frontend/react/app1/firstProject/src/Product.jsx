import Info from './info'
import Price from './Price'
import './Product.css'

function Product({title,dis1,dis2,oldPrice, newPrice}){
    let divStyle={backgroundColor:'gold', display:'flex', flexDirection:'column',alignItems:'center',justifyItems:'center', width:'405px', height:'250px' ,margin:'10px',borderRadius:'5%'};
    return(
    <>
       <div style={divStyle}> 
            <Info title={title} dis1={dis1} dis2={dis2}/>
            <Price oldPrice={oldPrice} newPrice={newPrice}/>
       </div>
    </>);
}

export default Product;
