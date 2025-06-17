"use client"
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>Welcome</h1>
        <p>Welcome to the admin dashboard. Here you can manage users, view analytics, and configure settings.</p>
        <p>This page is dynamically generated based on the admin ID provided in the URL.</p>
        <p>Admin ID: [id]</p>
    </div>
  )
}

export default page
