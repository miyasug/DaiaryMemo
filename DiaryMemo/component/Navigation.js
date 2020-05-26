import {
    createStackNavigator,
} from 'react-navigation-stack';

import {
	createAppContainer,
	StackNavigator,
} from 'react-navigation';

  import Daiary from './Daiary';
  import EditPage from './EditPage';
  import AddPage from './AddPage';

  export default StackNavigator ({
	    Daiary: { screen: Daiary },
	    EditPage: { screen: EditPage },
	    AddPage: { screen: AddPage },
    },
    {
	  initialRouteName: "Daiary",
	}
 );

