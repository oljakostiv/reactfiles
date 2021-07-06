import './App.css';
import RouterMain from "./comp/router/RouterMain";

function App() {
    return (
       <div>
           <div className={'appMainStyle'}>
               <RouterMain/>
           </div>
           <div className={'imgStyle'}>
               <img src="https://img4.goodfon.ru/wallpaper/nbig/0/f2/fon-bliki-voda.jpg" alt="sea"/>
           </div>
       </div>


    );
}

export default App;
