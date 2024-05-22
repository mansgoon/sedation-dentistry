import React from 'react';
import * as Toast from '@radix-ui/react-toast';
import './toast.css';

const ToastDemo = ({ open, onOpenChange, date }) => {
  const formattedDate = date ? date.toLocaleDateString() : 'No date selected';

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root className="ToastRoot" open={open} onOpenChange={onOpenChange}>
        <Toast.Title className="ToastTitle">Consultation Requested</Toast.Title>
        <Toast.Description asChild>
          <p className="ToastDescription">
            Our office will be in touch<br /> Requested date: <span className='font-bold'>{formattedDate}</span>
          </p>
        </Toast.Description>
        <Toast.Action className="ToastAction" asChild altText="Close">
          <button className="Button small green">Close</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};

export default ToastDemo;