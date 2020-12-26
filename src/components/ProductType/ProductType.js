import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const ProductType = () => {
    return (
        <div style={{ backgroundColor: "#f7f7f7", height: "500px" }}>
            <div style={{ padding: "40px" }}>
                <h2 style={{ textAlign: "center" }}> Find Your Vehicle by Type </h2>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", padding: "" }}>
                <div style={{ width: "280px", height: "290px", backgroundColor: "white", border: "1px solid #dddddd", borderRadius: "5px" }}>
                    <ReactSpeedometer
                        maxValue={100}
                        value={100}
                        needleColor="black"
                        forceRender={true}
                        startColor="black"
                        segments={10}
                        endColor="black"
                        needleTransitionDuration={2000}
                        width={90}
                        height={90}
                        needleTransition="easeExpOut"
                        ringWidth={3}
                        textColor="red"
                        currentValueText={""}
                        needleHeightRatio={0.7}
                        maxSegmentLabels={0}
                    />
                </div>
                <div style={{ width: "280px", height: "290px", backgroundColor: "white", border: "1px solid #dddddd", borderRadius: "5px" }}>

                </div>
                <div style={{ width: "280px", height: "290px", backgroundColor: "white", border: "1px solid #dddddd", borderRadius: "5px" }}>

                </div>
                <div style={{ width: "280px", height: "290px", backgroundColor: "white", border: "1px solid #dddddd", borderRadius: "5px" }}>

                </div>
            </div>
        </div>
    );
};

export default ProductType;