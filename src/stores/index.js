import { createStore } from 'redux';
import reducer from '../reducers/index';

const initalState = {
	name: 'Phan Quoc Trung',
	description: 'Student at Dalat University, Graphics Designer, Production',
	likes: 'Coding and Making video MMD',
	location: 'VietNam'
};

const store = createStore(reducer, initalState);
export { store };
