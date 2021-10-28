import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import ProfileScreen from "../screens/ProfileScreen";
import EvaluationScreen from "../screens/EvaluationScreen";
import InterpreterScreen from "../screens/InterpreterScreen";

const AppNavigation = createBottomTabNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions:{
            title: 'Профиль'
        }
    },
    Evaluation: {
        screen: EvaluationScreen,
        navigationOptions:{
            title: 'Оценка ауе'
        }
    },
    Interpreter: {
        screen: InterpreterScreen,
        navigationOptions:{
            title: 'Отчет'
        }
    }
})

export default createAppContainer(AppNavigation)
