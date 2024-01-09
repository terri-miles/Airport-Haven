import React from 'react'

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
    let pages = [];

    for( let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }
  return (
    <div>
        {pages.map((page, index) => {
            return ( <button onClick={() => setCurrentPage(page)} className={`px-2 py-1 mr-2 border border-[#585858] rounded text-[8px] font-bold transition ease-in-out duration-100 mb-1 mt-2 ${page == currentPage ? 'bg-black text-white' : ''}`} key={index}>{page}</button>
            )
        })}
    </div>
  )
}

export default Pagination