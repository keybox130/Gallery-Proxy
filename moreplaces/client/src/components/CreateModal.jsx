/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  padding: 40px;
  align-items: center;
  z-index: 2000;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(34, 34, 34, .6);
`;

const Modal = styled.div`
  z-index: 200;
  width: 100%;
  max-width: 568px;
  border-radius: 12px;
  background: rgb(255, 255, 255);
  position: relative;
  max-height: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const Button = styled.button`
  appearance: none;
  justify-content: left;

  position: absolute;
  display: flex;
  top: 16px;
  left: 24px;

  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  color: rgb(34, 34, 34);
  cursor: pointer;
  touch-action: manipulation;
  // position: relative;
  background: transparent;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
}
`;

const Close = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 3;
  overflow: visible;
`;

const Title = styled.header`
  -webkit-box-pack: justify;
  min-height: 48px;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  padding: 0px 24px;
  color: rgb(34, 34, 34);
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;

const HeaderTitle = styled.div`
  -webkit-box-flex: 0;
  overflow: hidden;
  flex: 0 1 auto;
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
`;

const Space = styled.div`
  padding: 32px 16px;
`;

const Entry = styled.div`
  position: relative;
  cursor: text;
  display: flex;
  height: 56px;
  width: 100%;
  margin: 0px;
  border: none;
  color: rgb(34, 34, 34);
  border-radius: 8px;
  box-shadow: rgb(176, 176, 176) 0px 0px 0px 1px inset;
  font-size: 16px;
  // line-height: 20px;
  font-weight: 400;
  &.hasFocus {
    box-shadow: rgb(34, 34, 34) 0px 0px 0px 2px inset;
    border-width: 2px;
    border-color: black;
  }
`;

const Form = styled.div`
  color: rgb(113, 113, 113);
  border; none;
  width: 100%;
  outline: none;
  background-color: transparent;
  `;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 56px;
  border: none;
  outline: none;
  padding: 0px;
  margin: 0px 12px 10px;
  color: inherit;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  appearance: none;
`;

const Create = styled.footer`
  -webkit-box-pack: justify;
  -webkit-box-align: center;
  display: flex;
  flex: 0 0 auto;
  border-top: 1px solid rgb(235, 235, 235);
  padding: 16px 24px;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  line-height: 20px;
`;

const CreateList = styled.button`
  &.none {
    cursor: not-allowed;
    color: rgb(255, 255, 255);
    background-color: rgb(221, 221, 221);
  }
  &.content {
    cursor: pointer;
  }
  opacity: 1;
  border: none;
  background: rgb(221, 221, 221);
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  padding: 14px 24px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  border: none;
  background: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
  width: 100%;
`;

class CreateModal extends React.Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = {
      id,
      name: '',
      focus: null,
      content: 'none',
      enable: 'disabled',
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClose() {
    const { createModal } = this.props;
    createModal();
  }

  handleChange(e) {
    const { value } = e.target;
    if (value.length > 0) {
      this.setState({
        name: value,
        content: 'content',
        enable: 'enabled',
      });
    } else {
      this.setState({
        name: value,
        content: 'none',
        enable: 'disabled',
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createAList, createModal } = this.props;
    const { id, name } = this.state;
    createAList(id, name);
    createModal();
  }

  handleFocus() {
    this.setState({
      focus: 'hasFocus',
    });
  }

  handleBlur() {
    this.setState({
      focus: 'noFocus',
    });
  }

  render() {
    const {
      name, focus, content, enable,
    } = this.state;
    const create = enable === 'enabled'
      ? (
        <Create>
          <CreateList
            className={content}
            onClick={this.handleSubmit}
          >
            Create
          </CreateList>
        </Create>
      )
      : (
        <Create>
          <CreateList
            className={content}
            onClick={this.handleSubmit}
            disabled
          >
            Create
          </CreateList>
        </Create>
      );
    return (
      <Page>
        <Modal>
          <Header>
            <Button type="button" onClick={this.handleClose}>
              <Close viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false">
                <path d="m6 6 20 20" />
                <path d="m26 6-20 20" />
              </Close>
            </Button>
            <Title>
              <HeaderTitle>Name this list</HeaderTitle>
            </Title>
          </Header>
          <Space>
            <Entry
              className={focus}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            >
              <Form>
                <Input
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={this.handleChange}
                />
              </Form>
            </Entry>
            <small>50 characters maximum</small>
          </Space>
          <div>
            {create}
          </div>
        </Modal>
      </Page>
    );
  }
}

export default CreateModal;
