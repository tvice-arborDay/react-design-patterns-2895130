import React from 'react';

export const ControlledOnboardingFlow = ({ children, onFinish, currentIndex, onPrevious, onNext }) => {

    const goToNext = stepData => {
        onNext(stepData);
    }

    const goToPrevious = stepData => {
        onPrevious(stepData);
    }

    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToPrevious, goToNext });
    }
    return currentChild
}