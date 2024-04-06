import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade!');

    expect(content).toBeTruthy();
    expect(content.value).toStrictEqual(
      'Você recebeu uma solicitação de amizade!',
    );
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Ola')).toThrow();
  });

  it('should not be able to create a notification content with more than 256 characters', () => {
    expect(() => new Content('a'.repeat(257))).toThrow();
  });
});
