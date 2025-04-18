export default function PostCard({ post }) {
    return (
      <div className="bg-white shadow p-4 rounded-xl">
        <div className="flex items-center gap-3 mb-2">
          <img src={`https://source.unsplash.com/40x40/?face,${post.userId}`} className="rounded-full" />
          <h3 className="font-medium">{post.username}</h3>
        </div>
        <p className="mb-2">{post.content}</p>
        <img
          className="w-full rounded-md mb-2"
          src={`https://source.unsplash.com/400x200/?random,post,${post.id}`}
          alt="Post"
        />
        <p className="text-sm text-gray-500">{post.comments} Comments</p>
      </div>
    )
  }
  