class PlaceFinder {
  constructor() {
    const addressFrom = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserHandler);
    addressFrom.addEventListener('submit', this.findAddressHandler);
  }

  locateUserHandler() {}

  findAddressHandler() {}
}