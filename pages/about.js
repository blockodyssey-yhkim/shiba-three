import Seo from '/components/Seo';
import { useEffect, useRef, useState } from 'react';

export default function About() {
    const observerRef = useRef();
    const box1 = useRef();
    const box2 = useRef();
    const box3 = useRef();
    const box4 = useRef();
    const box5 = useRef();
    //감시중에 해당 요소가 화면에 등장하면 함수를 실행함.
    //e : 감시중인 모든 div
    // html 요소를 파라미터로 넣음

    useEffect(() => {
        observerRef.current = new IntersectionObserver((e) => {
            e.forEach((box, index) => {
                //박스가 나타날때

                if (box.isIntersecting) {
                    box.target.style.opacity = 1;
                    box.target.style.transform = 'rotate(360deg)';
                } else {
                    box.target.style.opacity = 0;
                    box.target.style.transform = 'rotate(180deg)';
                }
                // 해당 박스가 몇프로 보이는지
                // box.intersectionRatio
            });
        }, {});
        // 감시할 박스
        observerRef.current.observe(box1.current);
        observerRef.current.observe(box2.current);
        observerRef.current.observe(box3.current);
        observerRef.current.observe(box4.current);
        observerRef.current.observe(box5.current);
    }, []);
    return (
        <div>
            <Seo title={'About'} />
            <div className={'container'}>
                <div className={'item'} ref={box1}>
                    <p>안녕하세요</p>
                </div>
                <div className={'item'} ref={box2}>
                    <p>이게 뭘까요?</p>
                </div>
                <div className={'item'} ref={box3}>
                    <p>스크롤 예제에요</p>
                </div>
                <div className={'item'} ref={box4}>
                    <p>신기하쥬 ? </p>
                </div>
                <div className={'item'} ref={box5}>
                    <p>그럼이만~ :)</p>
                </div>
            </div>
            <style jsx>
                {`
                    .container {
                        display: flex;
                        flex-direction: column;
                        height: 5000px;
                        width: 100%;
                    }
                    .item {
                        transition: all 3s;
                        display: flex;
                        height: 800px;
                        width: 100%;
                        align-items: center;
                        justify-content: center;
                        background-color: aqua;
                    }
                    p {
                        font-size: 40px;
                    }
                    div:nth-of-type(2) {
                        background-color: tomato;
                    }
                    div:nth-of-type(3) {
                        background-color: darkgoldenrod;
                    }
                    div:nth-of-type(4) {
                        background-color: lightblue;
                    }
                    div:nth-of-type(5) {
                        background-color: black;
                        color: white;
                    }
                `}
            </style>
        </div>
    );
}
