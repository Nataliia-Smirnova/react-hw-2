import React, { Component } from 'react';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default class App extends Component {
  state = { ...state };

  sendFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => acc + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = this.state.good + this.state.neutral;
    const percent = Math.floor(
      (positiveFeedback * 100) / this.countTotalFeedback(),
    );
    return percent + '%';
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={state}
            onLeaveFeedback={this.sendFeedback}
          ></FeedbackOptions>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}
