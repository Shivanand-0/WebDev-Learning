export default function Price({oldPrice, newPrice}){

    let divStyle={display:'flex', alignItems:'center', justifyContent:'center', width:'300px', height:'40px'};
    let oldStyle={textDecorationLine: 'line-through', color:"black" ,marginRight:'10px'};
    let newStyle={marginLeft:'10px' , color:"black"};
    return(
    <>
       <div>
            <div style={divStyle}>
                <p style={oldStyle}><sup>&#8377;</sup>{oldPrice.toLocaleString('en-IN')}</p>
                <p style={newStyle}><sup>&#8377;</sup>{newPrice.toLocaleString('en-IN')}</p>
            </div>
       </div>
    </>);
}