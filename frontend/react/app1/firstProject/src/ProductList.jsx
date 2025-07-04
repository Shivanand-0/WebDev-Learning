import Product from './Product'



function handleOnclick(eventop){
  eventop.preventDefault();
  console.log("Btn have been clicked...")
}
function ProductList() {

  // let divStyle1={backgroundColor:'white', display:'flex', flexDirection:'column',justifyItems:'center',alignItems:"center" };
  // let divStyle2={backgroundColor:'white', display:'flex', flexDirection:'row',margin:'5px' };

  return (
  <>
  {/* <div style={divStyle1}> */}
    <br />
    <form onSubmit={(x)=>{
      x.preventDefault();
      console.log("Btn have been clicked...")
    }}>
    <h3 style={{color:'black'}}>Blockbuster Deals on Computer Accesseries| Shop Now</h3>
    <button>Submit</button>
    </form>
   {/* <div style={divStyle2}>
    <Product title='Logitech MX Master 3S' dis1="8000 DPI" dis2="5 Programable Buttons" oldPrice={12495} newPrice={8999}/>
    <Product title='Apple Pencil (2nd Gen)' dis1="Intative Touch Surface" dis2="Designed for iPad Pro" oldPrice={11900} newPrice={9199}/>
    <Product title='Zebronics Zeb-Transformer' dis1="Intative Touch Surface" dis2="Designed for iPad Pro" oldPrice={1599} newPrice={899}/>
    <Product title='Portronics Toad 23 Wireless Mouse' dis1="Wireless Mouse 2.5 GHz" dis2="Optical Orientation" oldPrice={599} newPrice={278}/>
    </div> */}
  {/* </div> */}
  </>
  );

}

export default ProductList;