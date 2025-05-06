import React from "react";
import ErrorBoundary from "./ErrorBoundary";  // Path to your ErrorBoundary
import IdentityForm from "./IdentityForm";    // Path to your IdentityForm

const App = () => {
  const handleNext = () => {
    console.log("Next clicked");
  };

  const handleBack = () => {
    console.log("Back clicked");
  };

  const handleUpdate = (data: any) => {
    console.log("Data updated:", data);
  };

  const formData = { identityNumber: "1234567890" };  // Example of initial data

  return (
    <ErrorBoundary>
      <IdentityForm
        onNext={handleNext}
        onBack={handleBack}
        onUpdate={handleUpdate}
        data={formData}
      />
    </ErrorBoundary>
  );
};

export default App;
