import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'react-apollo';
import AuthRoute from 'modules/auth/util/AuthRouteHoc';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import './insights.module.scss';

/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
/* eslint-disable react/prefer-stateless-function */
class Insights extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    return (
      <div styleName="text-center">
        <Helmet>
          <title>Insights</title>
          <meta name="description" content="" />
        </Helmet>
        <Button onClick={this.toggleModal} color="success">
          + Adicionar
        </Button>

        <Modal
          modalClassName="bottom-modal-wrapper"
          size="lg"
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
          className="bottom-modal"
        >
          <ModalHeader toggle={this.toggleModal}>Adicionar usuário</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter className="bottom-modal__footer">
            <Button color="secondary" onClick={this.toggleModal}>
              Cancelar
            </Button>
            <Button color="success" onClick={this.toggleModal}>
              Salvar
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default compose(AuthRoute)(Insights);
