import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Testing
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
                author="Sam" 
                comment="Nice blog post!" 
                time="Today at 4PM" 
                source={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Alex" 
                comment="You Rock!" 
                time="Yesterday at 5PM" 
                source={faker.image.avatar()}
            />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
                author="Jane" 
                comment="Woo!" 
                time="Today at 6PM" 
                source={faker.image.avatar()}
            />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
