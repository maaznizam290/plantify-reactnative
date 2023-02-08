import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Headers from './header';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Headers />
    </Tab.Navigator>
  );
}
