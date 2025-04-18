export default function UserCard({ user }) {
    return (
      <div className="bg-white shadow p-4 rounded-xl flex items-center gap-4">
        <img src={`https://source.unsplash.com/50x50/?portrait,person,${user.id}`} className="rounded-full" />
        <div>
          <h2 className="font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.posts} Posts</p>
        </div>
      </div>
    )
  }
  