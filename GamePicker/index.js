import {Navigation} from "react-native-navigation";
import PickerPage from "./PickerPage";
Navigation.registerComponent('com.gamePicker.PickerPage', () => PickerPage);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.gamePicker.PickerPage',
            },
          },
        ],
      },
    },
  });
});
