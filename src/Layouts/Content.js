import React, { useEffect, useState }  from "react";
import axios from "axios";
import HotNew from "../Components/HotNew";
import '../Assets/Styles/Content.css';
import New from "../Components/New";
export default  function Content (){
      const [listProduct,setListProduct] = useState([]);
    const getData = () => {
      axios.get(`https://628d8c71a339dfef879c3fac.mockapi.io/News`)
        .then((res) => {
          setListProduct(res.data);
        })
        .catch((error) => console.log(error));
    };
    useEffect(() => {
        getData()
        console.log(listProduct);
    },[])
        return (
            <div id="Content">
                <div className="left__content">
                {listProduct
                   .filter((products) => products.status === "big")
          .map((product, index) => (
            <HotNew
              key={index}
              title={product.title}
              image={product.image}
              detail={product.detail}
            />
          ))}
                </div>
                <div className="right__content">
                {listProduct
            .filter((products) => products.status === "smaill")
            .map((product, index) => (
              <New
                key={index}
                title={product.title}
                image={product.image}
                detail={product.detail}
              />
            ))}

                </div>
                
            </div>
        );
}
