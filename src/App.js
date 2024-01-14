import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '대구 치과 맛집';//서버에서 데이터 가져왔다 가정
  // document.querySelector('h4').innerHTML = post;//원래라면 이렇게 했을 것
  let idTest = "id-test";


  let [stateVar,setStateVar] = useState('대구 치과 추천');
  let [arrayStateVar,setArrayStateVar] = useState(['내용1', '내용2']);
  let [likeCount, setLikeCount] = useState(0)

  const topics = [
    {id:1, title: 'html', body:"html is ..."},
    {id:2, title: 'css', body:"css is ..."},
    {id:3, title: 'js', body:"js is ..."},
  ]


  return (
    <div className="App">
      <div className="my-first-css-class">
        <h4 id = {idTest} style={{color : '#ff0000', fontSize:'36px'}}>제목임</h4>
      </div>
      <h4>글제목: {post}</h4>
      <PropsTest title="This is title prop"></PropsTest>
      <p>글은 여기에 쓰면 됩니다.</p>


      <div className="list">
        <h4 onClick = { () => { 
          let arrayCopy = [...arrayStateVar];
          arrayCopy[0] = `클릭이 ${likeCount}번 된 게시물`;
          setArrayStateVar(arrayCopy);
         }}>{ arrayStateVar[0] }</h4>
        <span onClick = { () => { setLikeCount(likeCount + 1) } }>👍</span> {likeCount}
      </div>
      <div className="list">
        <h4 onClick = { () => { 
          let arrayCopy = [...arrayStateVar];
          arrayCopy[1] = `클릭이 ${likeCount}번 된 게시물`;
          setArrayStateVar(arrayCopy);
         }}>{ arrayStateVar[1] }</h4>
      </div>

      <Modal></Modal>


      <PropWithTitle topics = {topics} title = "This is title"></PropWithTitle>

      
    </div>
  );
}
function PropWithTitle({title, topics}){
  const lis = []
  for(let idx = 0; idx < topics.length; idx++){
    let t = topics[idx];
    lis.push(<li key={t.id}> 
      <a href={`/read/${t.id}`}>{t.title}</a>
    </li>)
  } 
  return <nav>
    <p>{title}</p>
    <ol>
      {lis}
    </ol>
  </nav>
}
function ListProp(){
  
  return (
    <div>

    </div>
  )
}
function PropsTest(props){
  return (
    <>
      <a href = "/">{props.title}</a>
    </>
  )
}

function Modal(){
  return (
    <>
      <div className = "modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
      
  )
}

export default App;
