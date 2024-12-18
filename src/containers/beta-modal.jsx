/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import React from 'react';
import bindAll from 'lodash.bindall';

import {connect} from 'react-redux';
import {compose} from 'redux';
import {injectIntl, intlShape} from 'react-intl';

import {closeBetaModal} from '../reducers/modals';

import BetaModalComponent from '../components/beta-modal/beta-modal.jsx';


class BetaModal extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleCancel'
        ]);
    }

    handleCancel () {
        this.props.onCloseBetaModal();
    }

    render () {
        return (
            <BetaModalComponent
                onCancel={this.handleCancel}
            />
        );
    }
}

BetaModal.propTypes = {
    onCloseBetaModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    onCloseBetaModal: () => {
        dispatch(closeBetaModal());
    }
});

export default compose(
    injectIntl,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(BetaModal);
