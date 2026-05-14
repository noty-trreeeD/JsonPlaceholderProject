export { CommentCard } from './comments/components/CommentCard'
export { CommentList } from './comments/components/CommentList'
export type { Comment } from './comments/types/comment'

export { PostCard } from './posts/components/PostCard'
export { PostList } from './posts/components/PostList'
export { PostDetailCard } from './posts/components/PostDetailCard'
export {
    getPosts,
    getPostById,
    getPostComments,
    getPostsByUserId
} from './posts/api/postsApi'
export type { Post } from './posts/types/post'

export { AuthorBadge } from './users/components/AuthorBadge'
export { UserCard } from './users/components/UserCard'
export { UserList } from './users/components/UserList'
export { getUsers, getUserById } from './users/api/UsersApi'
export type { User } from './users/types/user'
export { UserDetailsCard } from './users/components/UserDetailsCard'