import React from 'react';
import { NavLink, Route} from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';
import RouterHookSample from './RouterHookSample';

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/velopert"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            gildong
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        // 렌더를 통하기 때문에 상위에서 props를 받아서 처리가 가능 
        render={()=> <div>유저를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile}/>
      <WithRouterSample />
      <RouterHookSample />
    </div>
  )
}

export default Profiles;

var products = {
  monitor: {Company: "DELL", Release: 2018},    
  speaker: {Company: "Sony", Release: 2018},    
  raido: {Company: "Aiwa", Release: 2018},    
 }

 var  selected = JSON.stringify(products, ["monitor", "speaker"])

 console.dir(JSON.parse(selected))