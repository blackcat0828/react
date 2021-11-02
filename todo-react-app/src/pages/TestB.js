import React from 'react';
import CommonHead from '../helmet/CommonHead';

let result = 30;
    let resultColor = () => {
        if(result <= 39 ){
            return "red";
        }else if(result <= 79){
            return "yellow";
        }
    }


const TestB = () => {
    

    console.log(resultColor);
    return (
        <>
            <CommonHead imageURL="https://img.papastalk.co.kr/mainbanner/m01.jpg" title="테스트B" />
            
            <span className={resultColor()}>테스트1234</span>
            <div>
                테스트 페이지 B
            </div>
        </>
    );
};

export default TestB;