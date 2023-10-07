import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <h1 className="h1-bold text-center">welcome to home</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
