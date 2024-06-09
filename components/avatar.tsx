function Avatar({ user }: { user: any }) {
  return (
    <div className="avatar online placeholder">
      <div className="w-12 h-12 rounded-full bg-neutral">
        <span className="text-2xl uppercase text-white font-bold">
          {user.name[0]}
        </span>
      </div>
    </div>
  );
}

export default Avatar;
