import React from 'react';
import './Qestion.css'

const Question = () => {
    return (
        <div className='question-answer'>
            <h1>How react work</h1>
            <p>আমরা যখন রিয়েক্ট এর কোড লিখি তখন রিয়েক্ট এক মুখি ডাটা প্রবাহের মাধ্যেমে কাজ করে থাকে । রিয়েক্ট সব সময় ্প্যারেন্ট কমপোন্টে থেকে তার চাইল্ড কম্পোনেন্ট এ ডাটা পাঠায় আর মূলত এভাবে কোডিং এর ধারা বজায় রেখে রিয়েক্ট এর কোডিং করা হয় । সিঙ্গেল পেজ অ্যাপ্লিকেশন ডেভেলপ করার জন্য রিয়েক্ট ব্যবহার করা হয় । কারণ এতে করে অ্যাপ্লিকেশন এর ভালো পারফোরমেন্স পাওয়া যায় । আমরা যখন HTML, CSS, Javascript দিয়ে একটি ওয়েব সাইট তৈরি করি আর সেই সাইটটা যখন ইউজার ব্যবহার করে তখন ব্যবহার কারি যতবার সেই সাইটে ব্রাউজ করে তত বার সেই সাইট লোড নেয় । আর যদি ও সাইটা রিয়েক্ট দিয়ে তৈরি করা হয় তাহলে ব্রাউজার একবার লোড করে একটি র্ভাচুয়াল ডোম তৈরি করে ফেলে যার কারণে পরবর্তি সময়ে ব্রাউজ করলে আর নতুন করে লোড নেয় না ।    </p>
            
            <h1>How useState work</h1>
            <p></p>
        </div>
    );
};

export default Question;