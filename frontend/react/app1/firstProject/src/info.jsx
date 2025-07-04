import Title from './Title'
import Description from './Description'


export default function Info({title,dis1,dis2}){
    let infoStyle={backgroundColor:'rgba(1, 208, 255, 0.943)', height:"200px", width:"400px" ,display:'flex',flexDirection:'column', alignItems:'center', justifyContent:"space-around",borderRadius:'5%', margin:'2px'}
    return(
    <>
       <div style={infoStyle}>
        <Title title={title}/>
        <Description dis1={dis1} dis2={dis2}/>
       </div>
    </>);
}