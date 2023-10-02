'use client';

import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

import { useEffect } from 'react';
import { Button } from './button';

const firebaseConfig = {
  apiKey: 'AIzaSyCl_JvzTSk-3Ogdw91bcfneGPbJNZN3Ndo',
  authDomain: 'wakaf-e5fe3.firebaseapp.com',
  projectId: 'wakaf-e5fe3',
  storageBucket: 'wakaf-e5fe3.appspot.com',
  messagingSenderId: '104381034621',
  appId: '1:104381034621:web:bf00af6093820d24be0114',
  measurementId: 'G-21M21SC4F8',
};

export default async function Index() {
  function testConnection() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const docRef = doc(db, 'tes', 'b2M5mhawcb4igkUaYvU7');
    getDoc(docRef).then((snap) => {
      alert(snap.get('message'));
    });
  }

  useEffect(() => {
    testConnection();
  }, []);

  return (<> <h1 className='text-lg text-blue-900'>Hello WakafYukk</h1> <Button variant="secondary">Button</Button></>)

}
