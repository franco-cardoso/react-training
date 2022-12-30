import React from 'react'

const ReplyInput = () => {
  return (
    <form className='replyContainer'>
        <textarea name="reply">
        </textarea>
        <div className='replyButtons'>
            <input type="button" value="Cancel" />
            <input type="button" value="Reply" />
        </div>
    </form>
  )
}

export default ReplyInput