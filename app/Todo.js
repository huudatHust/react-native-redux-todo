import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';

import AppNavigator from './navigation/Navigator';

export default class TodoApp extends Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <AppNavigator/>
            </Provider>
        );
    }
}