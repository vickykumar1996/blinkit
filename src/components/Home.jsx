// import { useEffect, useState } from "react";

// const Home = () => {
//     let [groceries , setGroceries] = useState(null);
//     let[pending , setPending] = useState(true);
//     let[error, seterror] = useState(null);
    


//     useEffect(()=>{
//         setTimeout(() => {
//            fetch("http://localhost:4000/groceries") 
//            .then((res)=>{
//             if(res.ok){
            
//             return res.json()
//              }
//           throw new Error("sorry invalid request");
//     })
//            .then((data)=>{setGroceries(data);setPending(false);
//         })
//         .catch((err)=>{seterror(err.message); setPending(false)})
//         }, 3000);
//     } , [])

//     return ( <div className="home-cont">

//         {error && <h1>{error}</h1>}
//         {pending && <div id="loader"></div>}



//         {groceries && <div className="grocery-list">
//                        <h1>All Grocery</h1>
//                        <div className="card-list">
//                         {
//                             groceries.map((v,i,a)=>{
//                                 return (<div className="card" key={i}>
//                                     <img src={v.image} alt="" />
//                                     <h2>{v.gname}</h2>
//                                     <h3>{v.price} &#8377;</h3>
//                                 </div>)
//                             })
//                         }

//                        </div>
//             </div>}
//     </div> );
// }
 
// export default Home;


import { useEffect, useState } from "react";
import GroceryList from "./GroceryList";
import useFetch from "../custom hooks/useFetch";
import Adds from "./Adds";

const Home = () => {
    let{data: groceries,error,pending} = useFetch("http://localhost:4000/groceries")

    return ( <div className="home-cont">

                {error && <h1>{error}</h1>}

                {pending && <div id="loader"></div>}

                {groceries && <Adds/>}

                {groceries &&  <GroceryList groceries={groceries} title="All Grocery"/> }

                {groceries &&  <GroceryList groceries={groceries.filter(v=>v.type=="fruit")} title="Fruits"/> }

                {groceries &&  <GroceryList groceries={groceries.filter(v=>v.type=="vegetable")} title="Vegetable"/> }

            </div> );
} 
 
export default Home;