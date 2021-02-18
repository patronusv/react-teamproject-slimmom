import { createAction } from '@reduxjs/toolkit';

const toggleModal = createAction('auth/toggleModal');
const onModal = createAction('auth/onModal');
const offModal = createAction('auth/offModal');

export default { toggleModal, onModal, offModal };
