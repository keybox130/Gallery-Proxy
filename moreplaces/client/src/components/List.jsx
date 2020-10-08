/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ListEntry from './ListEntry.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  white-space: nowrap;
  // justify-content: center;
  margin: auto;
  min-height: 300px;
  max-height: 300px;
  position: relative;
  -webkit-box-pack: start !important;
  -webkit-box-align: stretch !important;
  align-items: stretch !important;
  justify-content: flex-start !important;
  width: 100% !important;
  margin-left: 0px !important;
  margin-right: 0px !important;
`;

const List = ({ listings, refs, openModal }) => (
  <Container>
    {listings.photos
      ? listings.photos.map((photo, index) => (
        <ListEntry key={photo._id} photo={photo} refs={refs} index={index} modal={openModal} />
      ))
      : <h1>Loading...</h1>}
  </Container>
);

export default List;
