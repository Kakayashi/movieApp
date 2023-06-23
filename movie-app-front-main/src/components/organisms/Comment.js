import React from 'react'
import Banner from '../atoms/banner/Banner'
import { useParams } from "react-router-dom";
import ComentComponent from '../molecules/comentComponent/ComentComponent';


function Comment() {
    const comment = useParams();

  return (
    <>
        <Banner title={"Comment"} />
        <ComentComponent/>
    </>
  )
}

export default Comment