import { Content } from './content';
import { Notification } from './notifications';

const readAt = new Date();
const createdAt = new Date();

describe('Notification entity', () => {
  it('should not be able to create a notification content with more than 256 characters', () => {
    const notification = new Notification({
      recipientId: '51f5a773-8216-44c4-808c-e3bee7a59187',
      content: new Content('Este é um teste da entidade Notification!'),
      category: 'test',
      readAt,
      createdAt,
    });

    expect(JSON.stringify(notification)).toStrictEqual(
      JSON.stringify({
        props: {
          recipientId: '51f5a773-8216-44c4-808c-e3bee7a59187',
          content: { content: 'Este é um teste da entidade Notification!' },
          category: 'test',
          readAt,
          createdAt,
        },
      }),
    );
  });
});
