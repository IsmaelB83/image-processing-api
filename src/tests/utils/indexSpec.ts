// Node imports
import path from 'path';
// Own imports
import resize from '../../utils';

const IMAGES = path.join(__dirname, '../../../public/assets/');

describe('Test resize function', () => {

  it('Expects async resize function to reject if original file not exists', async () => {
    await expectAsync(resize(IMAGES, 'noexists.jpg', 100, 100)).toBeRejected();
  });

  it('Expects async resize function to reject if width and/or height is not > 0', async () => {
    await expectAsync(resize(IMAGES, 'fjord.jpg', 0, 100)).toBeRejected();
    await expectAsync(resize(IMAGES, 'fjord.jpg', -1, 100)).toBeRejected();
    await expectAsync(resize(IMAGES, 'fjord.jpg', 100, 0)).toBeRejected();
    await expectAsync(resize(IMAGES, 'fjord.jpg', 100, -1)).toBeRejected();
    await expectAsync(resize(IMAGES, 'fjord.jpg', 0, 0)).toBeRejected();
    await expectAsync(resize(IMAGES, 'fjord.jpg', -1, -1)).toBeRejected();
  });

  it('Expects async resize function to reject if width or height are not numbers', async () => {
    // @ts-expect-error avoiding ts check because i want to force an evil input data in width/heigth
    await expectAsync(resize(IMAGES, 'fjord.jpg', '100s', 100)).toBeRejected();
    // @ts-expect-error avoiding ts check because i want to force an evil input data in width/heigth
    await expectAsync(resize(IMAGES, 'fjord.jpg', 100, 'aux')).toBeRejected();
  });

  it('Expects async resize function to work', async () => {
    await expectAsync(resize(IMAGES, 'fjord.jpg', 100, 100)).toBeResolved();
  });
  
});