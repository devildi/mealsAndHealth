import * as constants from './constants';
import { fromJS } from 'immutable';

const bigItems = [
{
  name: '早饭',
  active: false,
  dis: ''
},
{
  name: '午饭',
  active: false,
  dis: ''
},
{
  name: '晚饭',
  active: false,
  dis: ''
},
{
  name: '零食',
  active: false,
  dis: ''
},
{
  name: '身体状态',
  active: false,
  dis: ''
},
{
  name: '锻炼情况',
  active: false,
  dis: ''
}
]

let smallItems = [
{
  name: '早饭',
  active: false,
  dis: ''
},
{
  name: '午饭',
  active: false,
  dis: ''
},
{
  name: '晚饭',
  active: false,
  dis: ''
},
{
  name: '零食',
  active: false,
  dis: ''
},
{
  name: '身体状态',
  active: false,
  dis: ''
},
{
  name: '锻炼情况',
  active: false,
  dis: ''
}
]

const defaultState = fromJS({
	arr1: bigItems,
	arr2: smallItems,
	choosed: []
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.PICK_BIG:
			
			return state;
		default:
			return state;
	}
}