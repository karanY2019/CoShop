import React, { Component } from 'react';
import Link from 'next/link'
import { FaTimes, FaLongArrowAltRight } from 'react-icons/fa'
// import logo from './logo.svg';
// import './App.css';
import {Button, Alert, Breadcrumb, Card, Container, Form, Row, Col} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase';
import { useRouter } from 'next/router'
import Image from '../components/Image'
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

const StoreButton = ( ) => {
  const router = useRouter()
  function navigate() {
    router.push('/')
  }
  return (
    // <div>
      <div className="sm-yellow-300 p-1 pb-1 smpb-2 ">
        {/* // p-6 pb-10 smpb-6
        // flex lg:flex-row flex-col"> */}
      <Button
        onClick={navigate}
        title="Select "
      />
    </div>
  )
}

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
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <h1>CoShop</h1>
        <div class="align-login-item-centre">
        <p>Welcome ! You are now signed-in!</p>
        

      <h1 className="text-5xl font-light">Find a store: </h1>
      
      <div className="border-b py-20" >
        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/products/egg.png" alt='item 1' />
          <p className="m-0 pl-10 text-gray-600 w-60">
          <h2>
        <Link href="/" className="flex flex-1 justify-end">
        <a aria-label="Start Shopping">
           <div className="cursor-pointer flex items-center">
           <p className="text-blue-600 text-bg mr-2">Whole Food </p>
           <FaLongArrowAltRight className="text-purple-600" />
           </div>
       </a>
        </Link>
      </h2>
           </p>
            {/* <p className="m-0 pl-10 text-gray-600 w-60">
            <StoreButton /></p>  */}
        </div> 
        
        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/products/chip.png" alt='item 1' />                
          <p className="m-0 pl-10 text-gray-600 w-60">
          <h2>
        <Link href="/" className="flex flex-1 justify-end">
        <a aria-label="Start Shopping">
           <div className="cursor-pointer flex items-center">
           <p className="text-blue-600 text-bg mr-2">Walmart </p>
           <FaLongArrowAltRight className="text-purple-600" />
           </div>
       </a>
        </Link>
      </h2>
           </p>
        </div>

        <div className="flex items-center hidden md:flex">
          <Image className="w-32 m-0" src="/products/chip.png" alt='item 1' />                
          <p className="m-0 pl-10 text-gray-600 w-60">
          <h2>
        <Link href="/" className="flex flex-1 justify-end">
        <a aria-label="Start Shopping">
           <div className="cursor-pointer flex items-center">
           <p className="text-blue-600 text-bg mr-2">Kroger </p>
           <FaLongArrowAltRight className="text-purple-600" />
           </div>
       </a>
        </Link>
      </h2>
           </p>
        </div>
      </div>
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
        </Breadcrumb> */}
        <Container>
        

        {/* <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p> */}
        {/* <p> E-mail: {firebase.auth().currentUser.email}   </p> */}

        {/* <a onClick={() => firebase.auth().signOut()}>Sign-out</a> */}
        {/* Fetch data from API */}
      
        {/* <button className="fetch-button" onClick={Collabrators }>Fetch Data</button> */}
        
      
        <Collabrators /> 
        <Button variant="primary" block onClick={() => firebase.auth().signOut()}>Sign-out</Button> 
        </Container>
     </div>
  

      </div>
    );
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