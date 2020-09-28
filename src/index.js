import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const faker = window.faker;

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author={faker.name.firstName()}
          timeAgo="Today at 4:45PM" 
          image={faker.image.avatar()}
          text= {faker.lorem.sentence()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author={faker.name.firstName()}
          timeAgo="Today at 2:00AM" 
          image={faker.image.avatar()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          author={faker.name.firstName()} 
          timeAgo="Yesterday at 5:00PM" 
          image={faker.image.avatar()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

