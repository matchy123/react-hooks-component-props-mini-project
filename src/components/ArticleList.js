import React from 'react'
import Article from './Article'

function ArticleList({blogData}) {
  return (
    <div>
        <main>
            {/* {posts.map((post) => <Article key= {post.id} name= {post.title} preview= {post.preview}/>)}; */}
            {blogData.map(post => {
               return <Article key= {post.id} name= {post.title} date= {post.date} preview={post.preview}/>
            })};
            
        </main>
    </div>
  )
}

export default ArticleList