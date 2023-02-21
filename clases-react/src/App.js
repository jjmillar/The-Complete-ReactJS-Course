import React from 'react';

import BlogCard from './BlogCard'
import { isArrayEmpty } from "./Utils"

import './App.css';

class App extends React.Component {
  state = {
    showBlogs: true,

  };


  blogArr = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor'
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor'
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor'
    }
  ];

  

  blogCards = isArrayEmpty(this.blogArr) ? [] : this.blogArr.map((item, pos) => {

    return (
      <BlogCard className={'Blog'} key={pos} title={item.title} description={item.description} id={item.id}/>
    );
  });

  onHideBtnClick = () => {
    // let updatedState = !this.state.showBlogs
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    });

    console.log(this.showBlogs);
  };

  render() {
    console.log('Render Called');
    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br></br>
        { this.state.showBlogs ? this.blogCards : null }
      </div>
    )
  };
  
  /*
  const firstName = 'John';
  const lastName = 'Wick';
  const age = 28;
  const job = 'Gentelman';

  const mArr = [1,2,3,4];
  const mObj = {
    name: 'Toto',
    age: 30, 
  };

  const inputPlaceholder = 'Enter your details';

  const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

  const detailsInputBox = <input placeholder={inputPlaceholder} autoComplete/>;
  
  return (
    <div className="App">
      <h3>Full name: {getFullName(firstName, lastName)}</h3>
      <p>Age: {mObj.age}</p>
      <p>Job: {job}</p>

      {detailsInputBox}

      {mArr[0]}

      
    </div>
  );
  */
};

export default App;
