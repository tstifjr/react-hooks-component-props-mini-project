import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const mapPosts = posts.map(post => {
        return <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview} />
    });
    return (<main>
        {/* iterate through array */}
        {mapPosts}
    </main>)
}

export default ArticleList;