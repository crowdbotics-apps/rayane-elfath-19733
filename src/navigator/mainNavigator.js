import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1893103Navigator from '../features/BlankScreen1893103/navigator';
import Settings93088Navigator from '../features/Settings93088/navigator';
import BlankScreen093085Navigator from '../features/BlankScreen093085/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1893103: { screen: BlankScreen1893103Navigator },
Settings93088: { screen: Settings93088Navigator },
BlankScreen093085: { screen: BlankScreen093085Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
