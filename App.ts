import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {ComponentsScreen} from './src/screens/ComponentsScreen';


const ROUTES={
  Home: "Home",
  Components: "Components",
}

const routes:{[key:string]: React.FC} = {
  [ROUTES.Home]: HomeScreen,
  [ROUTES.Components]: ComponentsScreen
}

const navigator = createStackNavigator(
  routes,
  {
    initialRouteName: ROUTES.Home,
    defaultNavigationOptions: {
      title: 'PLAYDO',
    },
  }
);

export default createAppContainer(navigator);
