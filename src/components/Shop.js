import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
    // const actions = bindActionCreators(actionCreators, dispatch);    (2)

    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);//(3)
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        {/* without using bindActionCreators its use for single     (1)*/}

        {/* <div className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</div>
        Update Balance
        <div className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</div> */}

{/* -------------------------------------------------------------------------------------------------- */}

        {/* with using bindActionCreators  its use for multiples    (2)*/}

        {/* <div className="btn btn-primary mx-2" onClick={()=>{actions.withdrawMoney(100)}}>-</div>
        Update Balance
        <div className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(100)}}>+</div> */}

{/* -------------------------------------------------------------------------------------------------- 3*/}

        <div className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</div>
        Update Balance ({balance})
        <div className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</div>
    </div>
  )
}

export default Shop