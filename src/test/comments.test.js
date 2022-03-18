import { apiMock, commentsTest } from '../__mocks__/comments-test.js';

describe('Add a new comment to API', () => {
  test('Add a new comment', () => {
    expect(apiMock(2, 'userName', 'comment').length).toBe(3);
  });

  test('Get count of comments', () => {
    const commentsArr = [{
      id: '1',
      name: 'Abenezer',
      userComment: 'new Comment',
    }, {
      id: '2',
      name: 'Linda',
      userComment: 'new Comment',
    },
    ];
    expect(commentsTest(commentsArr).length).toBe(2);
  });
});