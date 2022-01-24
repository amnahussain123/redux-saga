import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { getUsersFetch } from './actions';
import { useEffect } from 'react';
import UserList from './components/UserList';
function App(){
  const dispatch = useDispatch();
  const content = useSelector(state => state.myFirstReducer);
  useEffect(() => {  dispatch(getUsersFetch());  }, []); 
  console.log(content);
  let comp;
  if (content === null) {
      comp = <p>Loading....</p>
     } else {
      comp =<div><h3>List of all users</h3>
      <p>
        {content.users.data.users.map((item, i) => (
      <UserList name={item.name} key={i} />
          ))}  
     </p></div>
 } 
 return (
  <div className="App">
      {comp}
  </div>
);
}
export default App;