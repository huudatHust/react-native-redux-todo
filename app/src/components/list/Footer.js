import React  from 'react';
import { string, func, arrayOf } from 'prop-types';
import { Footer } from 'native-base';
import translate from 'react-i18next/dist/commonjs/translate';

import compose from 'recompose/compose';

import withIcons from '../common/hoc/withIcons';

import FooterItem from './FooterItem';

const enhance = compose(
    translate(),
    withIcons()
);

@enhance
export default class TodoFooter extends React.Component {
    static propTypes = {
        filter: string.isRequired,
        backgroundColor: string.isRequired,
        t: func.isRequired,
        changeFilter: func.isRequired,
        tabs: arrayOf(string).isRequired
    };

    static defaultProps = {
        backgroundColor: '#673AB7',
        tabs: ['all', 'active', 'complete']
    };

    render() {
        const { props, getStyles, getItemRenderer } = this;
        const styles = getStyles(props);

        return (
            <Footer style={styles.footer}>
                {props.tabs.map(getItemRenderer(props, styles))}
            </Footer>
        )
    }

    getStyles = (props) => ({
        footer: {
            backgroundColor: props.backgroundColor
        }
    });

    getItemRenderer = (props, styles) => (item, index) => (
        <FooterItem
            key={`footer-item-key${index}`}
            icon={props.getIcon(`filter-${item}`)}
            filter={item}
            message={props.t(item)}
            currentFilter={props.filter}
            changeFilter={() => props.changeFilter(item)}
            style={styles.footer}
        />
    );
}