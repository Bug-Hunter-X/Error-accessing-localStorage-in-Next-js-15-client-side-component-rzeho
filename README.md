# Next.js 15 localStorage Error

This repository demonstrates a common error when working with localStorage in Next.js 15 client-side components and provides a solution.

## Problem

Accessing localStorage directly in a client-side component can lead to errors during server-side rendering (SSR).  This is because localStorage is not accessible on the server.

## Solution

The solution involves conditionally rendering the code that accesses localStorage only on the client-side, after the component has been mounted.

This can be done using useEffect hook (or similar) to delay the execution after mounting the component on the client side.

## How to reproduce

1. Clone this repository
2. Run `npm install`
3. Run `npm run dev`
4. Navigate to the `/about` page. 

You should see an error in your browser's console initially; however, the page will work after the client-side component renders.