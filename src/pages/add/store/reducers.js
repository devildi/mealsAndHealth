import * as constants from './constants';
import { fromJS, toJS } from 'immutable';
import{ bigItems, smallItems } from '../../../tool/data'

const defaultState = {
	arr1: bigItems,
	arr2: smallItems,
  selected: []
}

const choose = (action, state, array, bigItem) => {
	let newArr = action.flag ? [...state.arr2] : [...state.arr1]
	let newObj = {...action.data, active: !action.data.active, dis: action.data.dis}

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
  	bigItem = newObj.active ? newObj : null
  } else{
  	newArr.map((r, i) => {
	  	if(r.name === action.data.name){
	  		newArr.splice(i, 1, newObj)

	  		if(!action.data.active){
	  			array.push(newObj)
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
  	array1: array,
  	bigItem
  }
}

const substituteAnItem = (arr, item) => {
  arr.map((r, i) => {
    if(r.name === item.name){
      arr.splice(i, 1, item)
    }
  })
  return arr
}

const substituteAnArray = (arr1, arr2) => {
  arr2.map((r, i) => {
    arr1.map((row, index) => {
      if(row.name === r.name){
        arr1.splice(index, 1, arr2[i])
      }
    })
  })
  return arr1
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.PICK_BIG:
			let obj = state.selected[0]
			let array = [...state.selected]
			array.splice(0, 1)
		  let {newArr, array1, bigItem}= choose(action, state, array, obj)
			return action.flag 
			? {...state, arr2: [...newArr], selected: [bigItem, ...array]} 
			: {...state, arr1: [...newArr], selected: [bigItem, ...array]}
    case constants.CLEAR_ITEMS:
      return {...defaultState};
    case constants.FIRST_TO_ADD:
      let str = action.data.str
      let arr = action.data.arr
      let newObj = {...arr[0], name: str}
      
      let newbigItems = substituteAnItem([...bigItems], newObj)
      let newsmallItems = substituteAnArray([...smallItems], arr)

      return {
        ...state,
        arr1: newbigItems,
        arr2: newsmallItems,
        selected: [newObj, ...arr]
      }
		default:
			return state;
	}
}