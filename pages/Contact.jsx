// src/pages/FormPage.js
import React from 'react';
import MyForm from '../components/Adoptform'
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
       <h1 className='adopth1'>Ready to adopt? Contact us below.</h1>
      <MyForm />
      <Footer />
    </div>
  )
}
