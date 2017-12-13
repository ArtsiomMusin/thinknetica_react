import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'store';
import { shallow, mount } from 'enzyme';
import { Router } from 'react-router';
import history from 'helpers/history';

import PostCreate from 'components/views/PostCreate';
import renderField from 'helpers/renderField';
import sinon from 'sinon';


describe('PostCreate form', () => {
  it('should render successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={createStore()}>
        <Router history={history}>
          <PostCreate/>
        </Router>
      </Provider>,
      div
    );
  });

  it('should submit', () => {
    const handleSubmit = sinon.stub();
    const form = mount(<Provider store={createStore()}>
      <Router history={history}>
        <PostCreate handleSubmit={handleSubmit}/>
      </Router>
    </Provider>);
    form.find('form').simulate('submit');
    expect(handleSubmit.callCount).toBe(1);
  });

  describe('renderField', () => {
    it('should show errors on empty inputs', () => {
      const input = { name: 'title', value: '' };
      const label = 'Artem';
      const meta = { touched: true, error: 'ERROR' };
      const subject = shallow(renderField({ input, label, meta }));
      const errorBlock = subject.find(<div>ERROR</div>).first();
      expect(errorBlock.exists()).toEqual(true);
    });
  });
});
