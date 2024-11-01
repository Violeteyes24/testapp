import Link from 'next/link'
import React from 'react'
import ProductCard from '../components/ProductCard'
import LoginCard from '../components/Login/LoginCard'


export default function page() {
  return (
    <main>
      
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>

      <div>
        <LoginCard />
      </div>
      
      <ProductCard />

      <ul>
        <li>Counselor's Dashboard ni sya</li>
        <li>Overview - static text</li>
        <li>Upcoming Appointments - list</li>
        <li>Your Schedule - list</li>
        <li>Monthly visitors - statistical chart</li>
        <li>Active Students - card</li>
        <li>Group Counseling - card</li>
        <li>Messages - card</li>
        <li>Consultation History - card</li>
        <li>Forms</li>
      </ul>

    </main>
    // 0 - html,css,tailwind(nana ko exp)
    // 1 - js(wpa ko kasuway)
    // 2 - basic next js tutorial 
    // 3 - react(library)
    // 4 - react native (mobile development)
    // 5 - tsx(same, wapa ko kasuway)
    // 6 - vercel
    // 7 - supabase/pocketbase (??)
    // 8 - Docker 
  )
}
