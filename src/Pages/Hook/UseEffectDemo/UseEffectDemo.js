import React, { useState, useEffect } from "react";

export default function UseEffectDemo(props) {
  const [number, setNumber] = useState(1);
  //Hook này thay thế cho lifeCycleComponnentsDidMount
  useEffect(() => {
    //callapi
    //sử dụng carousel, thư viện khác..
    console.log("componentDidUpdate");
    return ()=>{
        console.log('componentWillUnmount')
    }
  }, []);

  useEffect(() => {
    //gọi sau mỗi lần render kể cả lần đầu tiên
    console.log("thay thế 2 lifeCycle componentDidMount và componentDidUpdate");
    //Hạn chế setState
  });



  return (
    <div>
      useEffect
      <h1>{number}</h1>
      <button
        className="btn btn-success" onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
