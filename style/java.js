
// 1.What is React?
  
//   *React is a popular JavaScript library for building user interfaces (UIs). It was developed by Facebook and is widely used in web development. React allows developers to create reusable UI components and efficiently update and render them when the underlying data changes.

//  Key features of React include:

//  1.Component-based architecture
//  2.Virtual DOM
//  3.Declarative syntax 
//  4.One-way data flow
//  5.React ecosystem

 // 2.What is Component?

 //   *Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
   
 //   *There are two Types:
 //      1.Function Component
 //      2.Class Component

// 3. Write function syntax?

//     import React from 'react';
  
//   const Home = ()=>{
  
//     return(<div>
      

//       </div>)
 
//                 }
 
//   export default Home

// 4. Write class syntax?

// import React from 'react'
// import {Component} from 'react'

// class Home extends Component{
    
//     render(){
    
//       return(<div>
        
//         </div>)
//     }
//   }
  
//   export default Home

// 5.Write example of internal style?


//   import React from 'react';
  
//   const Home = ()=>{
  
//     const font ={
//       fontSize:"3rem"
//       }
  
//     return(<div>
 
//       <p style={font}>Hello World</p>
 
//       </div>)
//   }
 
//   export default Home


// 6.What is JSX?
  
//   * JSX stands for JavaScript XML.
  
//   * JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.


// 7.What are the advantages of react?

//   * ReactJS advantages is its modular design
 
//   * it is an open source 
 
//   * Easier to maintain and scale applications.
 
//   * Faster rendering

//   * Component based language.

// 8. Difference between Real dom and Virtual dom?

//    Real DOM :

//       * Real DOM is the actual structure of the webpage.
      
//       * React Update complete document in the Real DOM
      
//       * React DOM is the actual webpage rendered on the browser any changes made directly reflect on the complete webpage.
   
//    Virtual DOM :

//       * Virtual DOM is the virtual representation of Real DOM
      
//       * React update the state changes in Virtual DOM first and then it syncs with Real DOM
      
//       * Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will  not directly apply to the machine.


// 9.Write any three packages?

//   * npm install create-react-app
  
//   * npm install react-icons
  
//   * npm install slick-carousal


// 10.What is props?

// *  Props simply stands for properties. They are what make components reusable.Props is a object(keys and values).
 
//   Because they perform an essential function – they pass data from parent component to child component.
 
//   In Class Component use this.props for access values from parent to chlid.