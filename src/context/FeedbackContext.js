import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState ([
        {
            id: 1,
            text: 'This item is from context 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is from context 2',
            rating: 10
        },
        {
            id: 3,
            text: 'This item is from context 3',
            rating: 10
        }
    ])

    const [FeedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    
    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4();
      setFeedback([newFeedback, ...feedback]);
      console.log(newFeedback);
    };

    const deleteFeedback = (id) => {
      if (window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
      }
    };


    //Set item to updated
    const editFeedback = (item) => {
        setFeedback({
            item,
            edit:true 
        })
      };

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext