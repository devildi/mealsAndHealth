import * as constants from './constants';
import { fromJS, toJS } from 'immutable';

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
  name: '食堂',
  active: false,
  dis: ''
},
{
  name: '鸡蛋饼',
  active: false,
  dis: ''
},
{
  name: '下馆子',
  active: false,
  dis: ''
},
{
  name: '呵呵哒',
  active: false,
  dis: ''
},
{
  name: '包子',
  active: false,
  dis: ''
},
{
  name: '牛奶',
  active: false,
  dis: ''
}
]



const defaultState = {
	arr1: bigItems,
	arr2: smallItems,
	selected: []
}

const choose = (action, state) => {

	let newArr = action.flag ? [...state.arr2] : [...state.arr1]
	let newObj = {...action.data, active: !action.data.active, dis: ''}
	let bigItem = null
	let array = []

  if(!action.flag){
  	let position = null
  	let my = null
  	newArr.map((r, i) => {
	  	if(r.active){
	  		position = i
	  	}
	  })
	  newArr.map((r, i) => {
	  	if(r.name === action.data.name){
	  		my = i
	  	}
	  })
  	if(position && position === my){
  		newArr.splice(my, 1, newObj)
  		position = null
  	} 
  	if(position && position !== my || position === 0 && position !== my){
  		let newObj1 = {...newArr[position], active: !newArr[position].active, dis: ''}
  		newArr.splice(position, 1, newObj1)
  		newArr.splice(my, 1, newObj)
  	}
  	if(!position){
  		newArr.splice(my, 1, newObj)
  	}

  	bigItem = newObj
   
  } else{
  	newArr.map((r, i) => {
	  	if(r.name === action.data.name){
	  		newArr.splice(i, 1, newObj)

	  		if(!action.data.active){
	  			console.log(newObj)
	  			array.push(newObj)
	  			console.log(array)
	  		} else {
	  			array.map((r, i)=> {
	  				if(r.name === action.data.name){
	  					array.splice(i, 1)
	  				}
	  			})
	  		}
	  	}
	  })
  }
  return {
  	newArr,
  	array: [bigItem, ...array]
  }
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.PICK_BIG:
		  let {newArr, array} = choose(action, state)
		  //console.log(array)
			return action.flag ? {...state, arr2: [...newArr]} : {...state, arr1: [...newArr]}
		default:
			return state;
	}
}