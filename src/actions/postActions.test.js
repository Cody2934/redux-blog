import { addPost, ADD_POST, updatePost, UPDATE_POST, deletePost, DELETE_POST } from './postActions';

describe('post actions', () => {

  it('does the ADD_POST action', () => {
    const action = addPost({
      title: 'the title',
      body: 'the body'
    });
    expect(action).toEqual({
      type: ADD_POST,
      payload: { 
        title: 'the title',
        body: 'the body'
      }
    });
  });

  it('does the DELETE_POST action', () => {
    const action = deletePost(3);
    expect(action).toEqual({
      type: DELETE_POST,
      payload: 3
    });
  });

  it('does tge UPDATE_POST action', () => {
    const action = updatePost(3, 'this is an update');
    expect(action).toEqual({
      type: UPDATE_POST,
      payload: { 
        index: 3,
        body: 'this is an update'
      }
    });
  });

});

