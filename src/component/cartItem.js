import React, { Component } from 'react'


const CartItem = props => {
  return (
<div> 

<table className ="table table-striped" style={{marginTop:20}}>
                    <thead>
                       <tr>
                         <th> Product Name </th>
                         <th> Price </th>
                         <th> Actions </th>
                       </tr>
                     
                    </thead>

                     <tbody>
                      <th> </th>
                      <th> </th>
                     <th>
                     <button type="button" class="btn btn-secondary btn-danger">Delete</button>

                     </th>
                     </tbody>
                  
                  </table>

</div>
  );
};



export default CartItem;