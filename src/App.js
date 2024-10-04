import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

const showBtn = true;

function App() {
  return (
    <div className="App">
      <Header />
      <div
        style={{
          margin: "20px 80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "40px",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <Post
            name="20"
            text="أكاديمية مخصصة لتعليم البرمجة  بمختلف لغاتها "
          >
            <h4>أكاديمية ترميز</h4>
          </Post>
          <Post name="Hello World" text="this is the hello world article" />
          <Post name="post 3" text="this is the body of post 3" />
        </div>

        <AppSideMenu />
      </div>
    </div>
  );
}

function AppSideMenu(){
  if(showBtn == true){
    return(
      <SideMenu />
    );
  }else{
    // return null;
    return <div></div>
  }
 
}

export default App;
