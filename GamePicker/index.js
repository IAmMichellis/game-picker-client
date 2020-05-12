import {Navigation} from "react-native-navigation";
import PickerPage from "./PickerPage";
import GameShelfPage from "./GameShelfPage";

Navigation.registerComponent('com.gamePicker.PickerPage', () => PickerPage);
Navigation.registerComponent('com.gamePicker.GameShelfPage', () => GameShelfPage);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14
  }
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.gamePicker.PickerPage'
                  }
                },
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.gamePicker.GameShelfPage'
                  }
                }
              ]
            }
          }
        ]
      }
    },
  });
});
