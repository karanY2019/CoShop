import React, { Component } from 'react';
import Link from 'next/link'
import { FaTimes, FaLongArrowAltRight } from 'react-icons/fa'
// import logo from './logo.svg';
// import './App.css';
import {Button, Alert, Breadcrumb, Card, Container, Form, Row, Col} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase';

import firebase from '@firebase/app';
require('firebase/auth');



var firebaseConfig = {
  apiKey: "AIzaSyANXg6kpBF53hSn-2smRbxdXT-JXztdN6s",
  authDomain: "coshop-cs5356.firebaseapp.com",
  projectId: "coshop-cs5356",
  storageBucket: "coshop-cs5356.appspot.com",
  messagingSenderId: "852483800520",
  appId: "1:852483800520:web:5aaed6423d886d21e814fd",
  measurementId: "G-8DPCYD26VD"
};

firebase.initializeApp(firebaseConfig);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();


class Collabrators extends React.Component {
  state = {
    orders: null
  }
  

  async componentDidMount() {
    
    const idToken = await firebase.auth().currentUser?.getIdToken()  
    //this.setState({data: idToken})
    //const backend='https://0885t1ok71.execute-api.us-east-1.amazonaws.com/dev/collabrators'
    //const local= 'http://localhost:4000/dev/collabrators'
    
    const response = await fetch('/', {
      headers: {
        'Authorization': idToken
      }
    })
    if (response.status === 401) {
      return console.log('unauthorized')
    }
    const collabrators = await response.json()
    // save it to your components state so you can use it during render
    this.setState({collabrators: collabrators})
    console.log(collabrators)
  }
  
  render() {
    return ( 
    
    <div>
    
    {console.log("PLEASE", this.state.collabrators)}
    <div className="title">My Collabrators </div>  

      <ul>      
      {        
        this.state.collabrators && this.state.collabrators.map((collabrators,index) =>  {
          
          return (
            <li key={index}>
              <div>
                <p class = "title is-4">collabrators Name: {collabrators.name}</p>
                <p class = "subtitle is-6">collabrators location: {collabrators.loc}</p>
              </div>
            </li>
          )
        })       
      }      
    </ul>
  </div>
    )  
  }  
}
 

class SignInScreen extends React.Component {
 
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };
  
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
       (user) => this.setState({isSignedIn: !!user})
    );
   
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>CoShop</h1>
          <p>Please sign-in with the one time account and passward sent to you:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <>
      
              
      <h1>Hi David, welcome to Amy's CoShop Cart !</h1>
    <h2>
        <Link href="/" className="flex flex-1 justify-end">
        {/* <Link href="/invited"> */}
        <a aria-label="Join the Cart Now!">
           <div className="cursor-pointer flex items-center">
           
           <p className="text-purple-600 text-bg mr-2">Join the Cart Now! </p>
           <FaLongArrowAltRight className="text-purple-600" />
           </div>
       </a>
          {/* <a>Join the Cart Now!</a> */}
        </Link>
      </h2>
      <Button variant="primary" block onClick={() => firebase.auth().signOut()}>Sign-out</Button> 
    
      
      
        
    </>)
      // <div>
        // <h1>CoShop</h1>
        // <div class="align-login-item-centre">
        
        {/* <Card className="mb-3" style={{color: "#000", width: '30rem'}}>
          <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4aQGQczM3a39lujDohb4FjYXLKTexZU1MQ&usqp=CAU/160/50"/>
          <Card.Body>
            <Card.Title> 
              CoShop
            </Card.Title>
            <Card.Text>
            Collaborative Shopping
            </Card.Text>
          </Card.Body>
        </Card> */}

        {/* <Breadcrumb>
          <Breadcrumb.Item>About</Breadcrumb.Item>
          <Breadcrumb.Item>Stores</Breadcrumb.Item>
          <Breadcrumb.Item>Location</Breadcrumb.Item>
          <Breadcrumb.Item active>Test</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
        <p>Welcome ! You are now signed-in!</p> */}

        {/* <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p> */}
        {/* <p> E-mail: {firebase.auth().currentUser.email}   </p> */}

        {/* <a onClick={() => firebase.auth().signOut()}>Sign-out</a> */}
        {/* Fetch data from API */}
      
        {/* <button className="fetch-button" onClick={Collabrators }>Fetch Data</button> */}
        
      
        {/* <Collabrators /> 
        <Button variant="primary" block onClick={() => firebase.auth().signOut()}>Sign-out</Button> 
        </Container> */}
     {/* </div> */}
  

      {/* </div> */}
    
  }
}

function Admin() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <SignInScreen />
      </header>
    </div>
  );
}



export default Admin