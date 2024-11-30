import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "./Skeleton";
import Modal from './Modal';
import ImageView from './ImageView';

import { TiStarFullOutline, TiStarHalfOutline,TiStarOutline } from "react-icons/ti";

const API_URL = "https://dummyjson.com";


const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(null)

  function calculateStar(n) {
    if (n === 0 || n.toString().length === 1) return n;
    let [whole, res] = n.toString().split(".");
    if (res[0] < 3) {
      return +whole;
    } else if (res[0] < 8) {
      return +whole + 0.5;
    } else {
      return +whole + 1;
    }
  }

  const StartRelease = (rating) => {
    let number = calculateStar(rating); 
    let fill = Math.floor(number); 
    let half = number - Math.floor(number) ? 1 : 0;
    let outlines = 5 - Math.ceil(number); 

    return [
        ...Array(fill).fill().map((_, i) => <TiStarFullOutline key={`fill-${i}`} />), 
        ...Array(half).fill().map((_, i) => <TiStarHalfOutline key={`half-${i}`} />), 
        ...Array(outlines).fill().map((_, i) => <TiStarOutline key={`outline-${i}`} />)
    ];
};


  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`${API_URL}/products`)
        .then((res) => {
          console.log(res.data.products);
          setData(res.data.products);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const productItems = data?.map((pro) => (
    <div className="p-3 shadow-lg" key={pro.id}>
      <img onClick={()=>setModalData(pro)} className="w-full h-60 object-contain" src={pro.image} alt="" />
      <h3 className="">{pro.title}</h3>
      <div className="flex">{StartRelease(pro.rating)}</div>
    </div>
  ));

  return (
    <div>

      {loading && <Skeleton count={12} />}
      <div className="container grid grid-cols-4 gap-3">{productItems}</div>
      {
            modalData &&
            <Modal close={()=> setModalData(null)}>
                <ImageView data={modalData}/>
            </Modal>
        }
    </div>

    
  );
};

export default Products;
