/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('NativeModules', () => ({
  UIManager: {
    RCTView: () => ({
      directEventTypes: {},
    }),
  },
  KeyboardObserver: {},
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {},
  },
  PlatformConstants: {
    forceTouchAvailable: false,
  },
}))

jest.mock('../node_modules/react-native/Libraries/Components/StatusBar/StatusBar', () => 'StatusBar')

it('renders correctly', () => {
  renderer.create(<App />);
});
