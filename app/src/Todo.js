import React from 'react';

import icons from '../res/icons';
import resources from '../res/strings';

import configureI18n from './config/i18n';
import configureStore from './config/store';

import ScreenManager from './components/Manager';
import DataProvider from './components/common/DataProvider';

import withStatusBar from './components/common/hoc/withBar';

@withStatusBar('#512DA8')
export default class TodoApp extends React.Component {
    render() {
        return (
            <DataProvider store={configureStore()} i18n={configureI18n(resources)} icons={icons}>
                <ScreenManager/>
            </DataProvider>
        );
    }
}