export function seedDatabase(firebase) {

  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection('photos')
      .add({
        photoId: i,
        userId: 'B8kaPpdHvYMacpreVMehJBky5i73',
        imageSrc: `/images/users/tech/${i}.jpg`,
        caption: 'Technologies used for this project!',
        likes: [],
        comments: [
        ],
        userLatitude: '40.7128°',
        userLongitude: '74.0060°',
        dateCreated: Date.now()
      });
  }
}