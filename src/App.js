import { Fragment } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";
function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            {publicRoutes.map((item,index)=>{
               const Comp = item.component;
               let Layout = DefaultLayout;

               if(item.layout){
                Layout = item.layout;
               }else if(item.layout === null){
                Layout = Fragment;
               }
               return <Route key={index} path={item.path} element={<Layout><Comp/></Layout>}/>
            })}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
