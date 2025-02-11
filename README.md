# React useEffect Cleanup Function Missing Return Statement

This repository demonstrates a common error in React's `useEffect` hook: forgetting to include a return statement in the cleanup function. This can lead to memory leaks and unexpected behavior when the component unmounts.

## Bug

The `bug.js` file contains a component that fetches data using `useEffect`. However, it lacks a return statement within `useEffect`, causing it to not properly clean up its subscriptions or resources when the component is unmounted.

## Solution

The `bugSolution.js` file demonstrates the correct way to implement the `useEffect` hook with a cleanup function. This ensures that any asynchronous operations or subscriptions are cancelled when the component unmounts.