import React from 'react';
import {FormattedMessage} from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import styles from './beta-modal.css';

const BetaModalComponent = props => (
    <Modal
        className={styles.modalContent}
        headerClassName={styles.header}
        id="betaModal"

        closeButtonVisible={false}
    >
        <Box className={styles.body}>
            <div>
                <div className={styles.betaTitle}>
                    <FormattedMessage
                        defaultMessage="Test Title"
                        description="Tile of beta modal"
                        id="gui.betaModal.title"
                    />
                </div>
                <div className={styles.betaInfo}>
                    <FormattedMessage
                        defaultMessage="Test Body"
                        description="Message for the beta modal"
                        id="gui.betaModal.body"
                    />
                </div>
                <div className={styles.bottomArea}>
                    <button
                        className={classNames(styles.bottomAreaItem, styles.betaButton)}
                        onClick={props.onCancel}
                    >
                        <FormattedMessage
                            defaultMessage="Close"
                            description="Button in bottom to close beta modal"
                            id="gui.betaModal.close"
                        />
                    </button>
                </div>
            </div>
        </Box>
    </Modal>
);

BetaModalComponent.propTypes = {
    onCancel: PropTypes.func.isRequired
};

export {
    BetaModalComponent as default
};
