import { HomeCOnstant } from '@/app/constants/HomeConstant';
import Link from 'next/link';
import { Navbar } from './components/Navbar';

export default async function Home() {
  const userData: User[] = await fetchData();
  return (
    <main className="">
      <div className='row'>
      <Navbar/>
      {userData.length === 0 ?(
        <h1>{HomeCOnstant.noDatFound}</h1>
      ):(
      <div>
        <ul>
          {
            userData.map(user =>(
              <li key={user.id}>
                <Link href={`/users/${user.id}`} >{user.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      )}
      </div>
    </main>
  )
}

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    return [];
  }
  return response.json();
};