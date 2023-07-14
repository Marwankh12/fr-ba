import Head from "next/head";
import React , { useEffect, useState   } from "react";
import { resolve } from "styled-jsx/css";
const Home = () => {
 

  let [dat , setdat] = useState()


  useEffect( () => {
   fetch("http://localhost:5000/").then(data => data.text()).then(res => console.log(res))

  })

  return (
    <>

<Head>
  <title>Home page</title>

</Head>

<h3 style={{color : "white"}}>what is going next step

</h3>


    </>
  )
}

export default Home
