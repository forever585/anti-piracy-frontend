import React from "react";
import img from "D:/workspace/pkr/01.mywork/01.anti-piracy/anti-piracy/02.code/frontend/src/asset/image/product.jpg";

export default function CustomImage(props) {
    const showImage = (val) => {
        return (
            <img src={img} alt="" className={"table-image-style"}/>
        )
    };

    return (
        showImage(props.src)
    )
}
