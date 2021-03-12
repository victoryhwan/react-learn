/* eslint-disable */ //eslint 문법체크 미사용처리
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  /*state는 변수 대신 쓰는 데이터 저장공간 
    쓰는 이유는 웹이 App 처럼 쓰기 위해서

    state는 변경이 되면 HTML이 자동으로 렌더링이 된다. 
  */
  let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '레몬헬스케어']); // return [a,b] <- ES6 destructuring 문법   
  let [goodScore, goodsScoreChange] = useState(0); //goodsScoreChange <-- useState 변수 값을 변경해주는 함수
  let [modal, modalChange] = useState(false)
  
  function forUI(params) {
    let arr = []

    for (let i = 0; i < 3; i++) {
      arr.push(<div>하잉</div>)   
    }
    return arr
  }

  let posts = '강남 고기 맛집';
  let styleObj = {color:'yellow', fontSize:'30px'};
  
  function changeTitleFunc(){
    let chList = [...title]; //deep copy 값을 복사, let chList = title <- 이렇게하면 값 공유가 된다.
    chList[0] = title[1]
    chList[1] = title[2]
    chList[2] = title[0]
    changeTitle(chList)
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={ changeTitleFunc }>버튼</button>
      {/* <div className="list">
        <h3>{title[0] } <span onClick={()=>{ goodsScoreChange(goodScore+1); console.log('test')}}>Good!</span> {goodScore} </h3>
        <p>2월 17일 발행</p>
        <hr></hr>
        <h3>{title[1] }</h3>
        <p>2월 17일 발행</p>
        <hr></hr>
        <h3></h3>
        <p>2월 17일 발행</p>
        <hr></hr>
      </div> */}

      {/* array  */}
      {
        title.map(function(item) {
          return (
            <div className="list">
              <h3>{item }</h3>
              <p>2월 17일 발행</p>
              <hr></hr>
            </div>
            )
        })
      }

      {
        forUI()
      }

      <button onClick={()=>{modalChange(!modal)}}>버튼</button>
      {
        modal === true ? <Modal title1={title} title2={title}/> : null
      }
      {/* <Modal/> Modal컴포넌트 사용 */}


      
      

      

    </div>
  );
}

//Modal컴포넌트 생성
function Modal(props){
  return (
  <div className="modal">
    <h2>{props.title1[0]}</h2>
    <p>날짜</p>
    <p>상세내용</p>
    <h2>{props.title2[0]}</h2>
    {console.log(JSON.stringify(props))}
  </div>
  )
}

function List(){
  return (
    <div >

    </div>
  )
}
export default App;
 