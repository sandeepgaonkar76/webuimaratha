import React from 'react'
import { userHeader } from '../constant'

export default function UserTable({...props}) {
    console.log("props",props)
  return (
    <div >
        
      <div className="container-fluid">  
        <table className='table table-bordered'>
            <thead className="bg-white text-dark">
                <tr class="text-center">
                    {
                        userHeader.map((data,index)=>{
                            return (
                                <th key={index}>{data.title}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody className="bg-white text-dark" >
                {
                    props.userList && props.userList.map((item,index)=>{
                        return(
                            <tr class="text-center" key={`data_${index}`}>
                                <td>{item.userID}</td>
                                <td>{item.userName}</td>
                                <td>{item.emailID}</td>
                                <td>{item.motherTongueName}</td>
                                <td>{item.dateOfBirth}</td>
                                <td>{item.maritalStatusName}</td>
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
      </div>
    </div>
  )
}
