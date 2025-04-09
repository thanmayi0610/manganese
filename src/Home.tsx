import React from 'react';



const Home = (props:{
    maxs:number
}) => {
  const stars=[];
  for(let i=1;i<=props.maxs;i++){
    let star=""
    for(let j=1;j<=i;j++){
      star+="*";
    }
    stars.push(<p>{star}</p>)
}
return <div>{stars}</div>
};


export default Home;
