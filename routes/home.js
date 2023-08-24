import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screen/home';
import Details from '../screen/details';
import About from '../screen/about';


const screens = {
    Home : {
        screen : Home
    },
    Details : {
        screen : Details
    },
    About : {
        screen : About
    },
}

const HomeStack = createNativeStackNavigator(screens)

export default NavigationContainer(HomeStack);