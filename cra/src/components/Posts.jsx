import {Post} from './Post'

export function Posts (props) {
    const {cb, posts} = props
    return <div>
        {
            posts.map(post => (
                <Post key={post.id} id={post.id} name={post.name} cb={cb}/>
            ))
        }
    </div>
}