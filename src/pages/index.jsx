import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Bulb } from '../components/Bulb';

document.querySelector('#root').innerHTML = render(
  <>
    <Bulb on={true}/>
    <Bulb on={false}/>
  </>
);