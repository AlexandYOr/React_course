
import './App.css';
import { Book } from './Book';
import { Preloader } from './Preloader';

const App = (props) => {
  return props.isLoading ? (
  <Preloader />
  ) : (
    <div>
      <Book name='книга 1' year='1800' price='100'> 
      Text here 
      </Book>
      <Book name='книга 2' year='1900' price='200'/>
      <Book name='книга 3' year='2000' price='300'/>
      <Book year='2000' price='300'/>
    </div>
  )
}

export default App;
