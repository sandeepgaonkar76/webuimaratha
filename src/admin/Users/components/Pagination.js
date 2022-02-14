import React from 'react'

export default function Pagination() {
  return (
      
    <div>
      <div class="text-center">
        <button type="button" class="btn btn-outline-secondary"><i class="fas fa-angle-left"></i> </button>
        <button type="button" class="btn btn-outline-secondary"> <i class="fas fa-angle-right"></i> </button>
        <text>  Page <b>1 of 100</b> | Go to page: <input type="text" aria-label="Small input group" aria-describedby="input-group-sm"></input></text>
      </div>
    </div>
  )
}
