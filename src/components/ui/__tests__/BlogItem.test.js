import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'store';
import { shallow, mount } from 'enzyme';
import { Router } from 'react-router';
import history from 'helpers/history';

import TextBox from 'components/ui/TextBox';
import Image from 'components/ui/Image';
import BlogItem from 'components/ui/BlogItem';
import Link from 'components/elements/Link';

describe('Item', () => {
  it('should render successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={createStore()}>
        <Router history={history}>
          <BlogItem/>
        </Router>
      </Provider>,
      div
    );
  });

  describe('render', () => {
    it('should render text', () => {
      const blogProps = {text: 'hi from blog'};
      const blog = shallow(<BlogItem text={blogProps.text}/>);
      const text = <TextBox>{blogProps.text}</TextBox>;
      expect(blog.contains(text)).toEqual(true);
    });

    it('should render image', () => {
      const blog = shallow(
        <BlogItem image={{src: 'test'}} />
      );
      const image = <Image src="test" />;
      expect(blog.contains(image)).toEqual(true);
    });

    it('should render edit link', () => {
      const blog = shallow(<BlogItem id="1"/>);
      const editLink = <Link to="/posts/1/edit" >
        <span
          style={{fontSize: '24px'}}
          className="glyphicon glyphicon-edit"
        />
      </Link>;
      expect(blog.contains(editLink)).toEqual(true);
    });

    it('should render author', () => {
      const blog = shallow(<BlogItem meta={{author: 'artem'}}/>);
      const author = <h5><span className="glyphicon glyphicon-user"/>artem</h5>;
      expect(blog.contains(author)).toEqual(true);
    });

    it('should render add comment button', () => {
      const blog = shallow(<BlogItem showComments={true}/>);
      const com = <h4> Comments: </h4>;
      expect(blog.contains(com)).toEqual(true);
    });

    it('should not render add comment button', () => {
      const blog = shallow(<BlogItem />);
      const com = <h4> Comments: </h4>;
      expect(blog.contains(com)).toEqual(false);
    });

    it('should render 3 comments', () => {
      const comments = [
        {phone: '1', text: '1'},
        {phone: '2', text: '2'},
        {phone: '3', text: '3'}
      ];
      const store = createStore();
      const state = store.getState();
      state.post.entry = {comments};
      const blog = mount(
        <Provider store={store}>
          <Router history={history}>
            <BlogItem showComments={true}/>
          </Router>
        </Provider>
      );
      expect(blog.find('li').length).toEqual(comments.length);
    });
  });
});
